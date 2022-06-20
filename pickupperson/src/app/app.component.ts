import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { ApiService } from './services/api/api.service';

import {
	ActionPerformed,
	PushNotificationSchema,
	PushNotifications,
	Token,
} from '@capacitor/push-notifications';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {

	userId: any = localStorage.getItem('vwd_userid');
	constructor(
		private platform: Platform,
		public router: Router,
		private alertController: AlertController,
		private socket: Socket,
		public api: ApiService
	) {
		this.initializeApp();
		this.initFCM();
		this.socket.connect();
		this.socket.on('removePlayerFromTeam', (payload, callback) => {
			if (payload.userid) {
				if(this.userId == payload.userid.toString()){
					this.api.post('reload_pickup_person_app_by_id', {userId:this.userId}, '')
					.subscribe(
						(result) => {
							const res: any = result;
							if(res.status === 200 ||  res.status === '200' )
							{
								localStorage.setItem('vwd_userData',JSON.stringify(res.data)  );
							}
							console.log('updated.....');
						},
						(error) => {
							console.log(error);
						});
				}
			}
		});
	}

	initializeApp() {
		this.platform.ready().then(() => {

			if (localStorage.getItem('is_logged_in') == 'true') {
				this.router.navigate(['/tabs/home']);
			} else {
				this.router.navigate(['/login']);
			}
		});
	}

	initFCM() {

		// Show us the notification payload if the app is open on our device
		PushNotifications.addListener('pushNotificationReceived',
			(notification: PushNotificationSchema) => {
				console.log('Push received: ' + JSON.stringify(notification));

				//this.presentMessage('',notification.body);

				// let res: any = JSON.stringify(notification);
				// this.presentMessage(res.title,res.body);	
			}
		);

		// Method called when tapping on a notification
		PushNotifications.addListener('pushNotificationActionPerformed',
			(notification: ActionPerformed) => {
				console.log('Push action performed: ' + JSON.stringify(notification));
				const data = notification.notification.data;
				//this.presentMessage('',data.body);

				console.log('Action performed: ' + JSON.stringify(notification.notification));
			}
		);


	}

	async presentMessage(messageTitle, messageBody) {
		console.log(messageTitle);
		console.log(messageBody);
		const alert = await this.alertController.create({
			header: 'VWD Pick Up',
			cssClass: 'alert-cas',
			subHeader: messageTitle,
			message: messageBody,
			buttons: [
				{
					text: 'Ok',
					handler: () => {
						this.router.navigate(['/tabs/notifications']);
					}
				},
				{
					text: 'Cancel',
					handler: () => {

					}
				}
			]
		});

		await alert.present();
	}
}
