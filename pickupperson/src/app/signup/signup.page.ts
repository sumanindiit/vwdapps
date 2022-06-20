import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Platform, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  signUpForm: FormGroup;
  submitAttempt: boolean = false;
  passwordType: string = 'password';
  confirmPasswordType: string = 'password';
  passwordIcon: string = 'eye-off';
  confirmPasswordIcon: string = 'eye-off';
  allCommunities: any;
  uploadBlobData: any;
  uploadedExtension: any;
  previewImage: any;
  imageUploaderr: boolean = false;

  customAlertOptions: any = {
    header: ' Select Community',
    translucent: true
  };
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
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      community: ['', [Validators.required]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.matchingPasswords('password', 'confirmPassword')
    })

    this.getCommunities();
  }


  getCommunities() {
    this.api.post('getPickupPersonCommunities', '', '')
      .subscribe(
        (result) => {
          const res: any = result;
          if (res.status === 422 || res.status === '422') {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x + '</br>';
            }
            this.allCommunities = [];
          }
          else if (res.status === 200 || res.status === '200') {
            this.allCommunities = res.data;
          }
        },
        (error) => {
          console.log(error);
        });
  }

  get errorCtr() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    this.submitAttempt = true;

    if (!this.signUpForm.valid) {
      //this.common.presentToast('Please fill all required fields.','danger');
      return false;
    } else if (this.imageUploaderr === false) {
      return false;
    }
    else {
      this.common.presentLoading();

      const dict = this.signUpForm.value;
      const imgName = (+new Date).toString(36).slice(-5);
      const formData = new FormData();

      if (typeof this.uploadBlobData === 'undefined') { } else {
        formData.append('file', this.uploadBlobData, `myimage.${this.uploadedExtension}`);
      }
      formData.append('name', this.signUpForm.value.name);
      formData.append('email', this.signUpForm.value.email);
      formData.append('phoneNo', this.signUpForm.value.phoneNo);
      formData.append('community', this.signUpForm.value.community);
      formData.append('password', this.signUpForm.value.password);
      formData.append('confirmPassword', this.signUpForm.value.confirmPassword);
      formData.append('type', 'pickupPerson');
      formData.append('role', 'pickupPerson');

      this.api.post('register', formData, '')
        .subscribe(
          (result) => {
            console.log('in result');
            this.submitAttempt = false;
            this.common.stopLoading();
            let res: any;
            res = result;
            if (res.status == 422) {
              var errMsgs = '';
              for (var i = 0; i < res.errors.length; i++) {
                var obj = res.errors[i];
                errMsgs += obj + '</br>';
              }

              this.common.presentToast(errMsgs, 'danger');

            }
            else if (res.status == 200) {
              this.api.post('saveAdminNotifications', { type: 2, content: dict.email + ' has created an account as Pickup Person' }, '')
                .subscribe(
                  (result) => { },
                  (error) => {
                    console.log(error);
                  });

              this.signUpForm.reset()
              this.common.presentToast('Registered Successfully!.', 'success');
              this.api.navCtrl.navigateRoot('/login');
            }
          },
          (error) => {
            console.log('in error');
            console.log(error);
          });
    }
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (signUpForm: FormGroup): {
      [key: string]: any
    } => {
      let password = signUpForm.controls[passwordKey];
      let confirmPassword = signUpForm.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  hideShowConfirmPassword() {
    this.confirmPasswordType = this.confirmPasswordType === 'text' ? 'password' : 'text';
    this.confirmPasswordIcon = this.confirmPasswordIcon === 'eye-off' ? 'eye' : 'eye-off';
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

    this.previewImage = 'data:image/png;base64,' + image.base64String;

    this.uploadBlobData = blobData;
    this.uploadedExtension = image.format;
    this.imageUploaderr = true;

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


}
