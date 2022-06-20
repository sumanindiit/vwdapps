import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { CommonService} from '../services/common.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
import { Platform, ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-addcomplaint',
  templateUrl: './addcomplaint.page.html',
  styleUrls: ['./addcomplaint.page.scss'],
})
export class AddcomplaintPage implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  complaintForm: FormGroup;
  submitAttempt: boolean = false;
  uploadBlobData: any;
  uploadedExtension: any;
  userId: any = localStorage.getItem('vwd_userid');
  previewImage: any;
  valletId: any = localStorage.getItem('vwd_valletid');
  userData: any;

  constructor(
    public formBuilder: FormBuilder,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api: ApiService,
    public router: Router,
    private plt: Platform,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    this.complaintForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3) ,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      content: ['', [Validators.required, Validators.minLength(5) ]]
    });
    this.userData   = JSON.parse(localStorage.getItem('vwd_userData'));
  }

  get errorCtr() {
    return this.complaintForm.controls;
  }

  onSubmit() {
    this.submitAttempt = true;

    if (!this.complaintForm.valid) {
        this.common.presentToast('Please fill all required fields.','danger');
        return false;
    } else {
      this.common.presentLoading();
      const dict = this.complaintForm.value;
      const imgName = (+new Date).toString(36).slice(-5);
      const formData = new FormData();

      if(typeof this.uploadBlobData === 'undefined'){ }else
      {
        formData.append('file', this.uploadBlobData, `myimage.${this.uploadedExtension}`);
      }
      formData.append('title', this.complaintForm.value.title);
      formData.append('content', this.complaintForm.value.content);
      formData.append('userId', this.userId);

      this.api.post('addComplaint', formData,'')
      .subscribe(
        (result) => {
          console.log('in result');
          this.submitAttempt = false;
          this.common.stopLoading();
          const res: any = result;
          if(res.status === 422 || res.status === '422')
          {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x +'</br>';
            }
            this.common.presentToast(errMsgs,'danger');
          }
          else if(res.status === 200 || res.status === '200')
          {
            this.api.post('saveAdminNotifications', { type: 1, content: this.userData?.name + ' has registered a new complaint.' }, '')
                .subscribe(
                  (result) => { },
                  (error) => {
                    console.log(error);
                  });
            this.sendPushNotifications(this.complaintForm.value.title);

            this.complaintForm.reset();
            this.common.presentToast('Added Successfully!.','success');
            this.api.navCtrl.navigateRoot('/tabs/home/'+ (+new Date).toString(6).slice(-5));
          }
        },
        (error) => {
          console.log(error);
        });
    }
  }


  async selectImageSource() {
    const buttons = [
      {
        text: 'Take Photo',
        icon: 'camera',
        handler: () => {
          this.addImage(CameraSource.Camera);
        }
      },
      {
        text: 'Choose From Gallery',
        icon: 'image',
        handler: () => {
          this.addImage(CameraSource.Photos);
        }
      }
    ];
    // Only allow file selection inside a browser
    if (!this.plt.is('hybrid')) {
      buttons.push({
        text: 'Choose a File',
        icon: 'attach',
        handler: () => {
          this.fileInput.nativeElement.click();
        }
      });
    }
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons
    });
    await actionSheet.present();
  }

  async addImage(source: any) {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source
    });


    const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
    const imageName = 'imagee';

    this.previewImage = 'data:image/png;base64,'+image.base64String;

    this.uploadBlobData = blobData;
    this.uploadedExtension = image.format;

  }

  uploadFile(event: EventTarget) {
    const eventObj: MSInputMethodContext = event as MSInputMethodContext;
    const target: HTMLInputElement = eventObj.target as HTMLInputElement;
    const file: File = target.files[0];
  }

  // Helper function
  b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  sendPushNotifications(msgBody,title = ''){

    let msg = this.userData.name + ' added a new complaint';
    const formData = new FormData();
    formData.append('userId', this.userId);
    formData.append('toId', this.valletId);
    formData.append('body', msg);
    formData.append('title', 'Complaints');

    this.api.post('sendresidentPushNotifications', formData,'')
      .subscribe(
        (result) => { },
        (error) => {
          console.log(error);
        });
  }

}
