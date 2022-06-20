import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToastController,ActionSheetController,NavController} from '@ionic/angular';
import { config} from '../../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { map } from "rxjs/operators";
import { throwError } from 'rxjs';


import { HttpHeaders,HttpClient} from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:any = config.API_URL;
  constructor(
    private HttpClient:HttpClient, 
    public actionSheetController: ActionSheetController, 
    public navCtrl: NavController
    ) { }

  post(endpoint,data,headers){
    
    return this.HttpClient.post(this.url+endpoint,data)
      .map((responseData) => {
        return responseData;
      },error => {
        console.log(error);
      });

  }

  encryptData(data,salt) {
	    try {
	        var enc = CryptoJS.AES.encrypt(JSON.stringify(data), salt).toString();
	        enc = enc.split('+').join('xMl3Jk').split('/').join('Por21Ld').split('=').join('Ml32');
	        return enc;
	    } catch (e) {
	        return 0;
	    }
	}
}
