(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_addcomplaint_addcomplaint_module_ts"],{

/***/ 88950:
/*!*************************************************************!*\
  !*** ./src/app/addcomplaint/addcomplaint-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddcomplaintPageRoutingModule": () => (/* binding */ AddcomplaintPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _addcomplaint_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addcomplaint.page */ 15846);




const routes = [
    {
        path: '',
        component: _addcomplaint_page__WEBPACK_IMPORTED_MODULE_0__.AddcomplaintPage
    }
];
let AddcomplaintPageRoutingModule = class AddcomplaintPageRoutingModule {
};
AddcomplaintPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddcomplaintPageRoutingModule);



/***/ }),

/***/ 97549:
/*!*****************************************************!*\
  !*** ./src/app/addcomplaint/addcomplaint.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddcomplaintPageModule": () => (/* binding */ AddcomplaintPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _addcomplaint_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addcomplaint-routing.module */ 88950);
/* harmony import */ var _addcomplaint_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addcomplaint.page */ 15846);







let AddcomplaintPageModule = class AddcomplaintPageModule {
};
AddcomplaintPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _addcomplaint_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddcomplaintPageRoutingModule
        ],
        declarations: [_addcomplaint_page__WEBPACK_IMPORTED_MODULE_1__.AddcomplaintPage]
    })
], AddcomplaintPageModule);



/***/ }),

/***/ 15846:
/*!***************************************************!*\
  !*** ./src/app/addcomplaint/addcomplaint.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddcomplaintPage": () => (/* binding */ AddcomplaintPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_addcomplaint_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addcomplaint.page.html */ 64811);
/* harmony import */ var _addcomplaint_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addcomplaint.page.scss */ 42642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 45146);
/* harmony import */ var _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/globalFooService.service */ 48914);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/camera */ 37673);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);











let AddcomplaintPage = class AddcomplaintPage {
    constructor(formBuilder, globalFooService, common, api, router, plt, actionSheetCtrl) {
        this.formBuilder = formBuilder;
        this.globalFooService = globalFooService;
        this.common = common;
        this.api = api;
        this.router = router;
        this.plt = plt;
        this.actionSheetCtrl = actionSheetCtrl;
        this.submitAttempt = false;
        this.userId = localStorage.getItem('vwd_userid');
    }
    ngOnInit() {
        this.complaintForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
            content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(5)]]
        });
    }
    get errorCtr() {
        return this.complaintForm.controls;
    }
    onSubmit() {
        this.submitAttempt = true;
        if (!this.complaintForm.valid) {
            this.common.presentToast('Please fill all required fields.', 'danger');
            return false;
        }
        else {
            this.common.presentLoading();
            const dict = this.complaintForm.value;
            const imgName = (+new Date).toString(36).slice(-5);
            const formData = new FormData();
            if (typeof this.uploadBlobData === 'undefined') { }
            else {
                formData.append('file', this.uploadBlobData, `myimage.${this.uploadedExtension}`);
            }
            formData.append('title', this.complaintForm.value.title);
            formData.append('content', this.complaintForm.value.content);
            formData.append('userId', this.userId);
            this.api.post('addComplaint', formData, '')
                .subscribe((result) => {
                console.log('in result');
                this.submitAttempt = false;
                this.common.stopLoading();
                const res = result;
                if (res.status === 422 || res.status === '422') {
                    let errMsgs = '';
                    for (const x of res.errors) {
                        errMsgs += x + '</br>';
                    }
                    this.common.presentToast(errMsgs, 'danger');
                }
                else if (res.status === 200 || res.status === '200') {
                    this.complaintForm.reset();
                    this.common.presentToast('Added Successfully!.', 'success');
                    this.api.navCtrl.navigateRoot('/tabs/complaints/' + (+new Date).toString(6).slice(-5));
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
    selectImageSource() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const buttons = [
                {
                    text: 'Take Photo',
                    icon: 'camera',
                    handler: () => {
                        this.addImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraSource.Camera);
                    }
                },
                {
                    text: 'Choose From Gallery',
                    icon: 'image',
                    handler: () => {
                        this.addImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraSource.Photos);
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
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Select Image Source',
                buttons
            });
            yield actionSheet.present();
        });
    }
    addImage(source) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.Camera.getPhoto({
                quality: 60,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraResultType.Base64,
                source
            });
            const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
            const imageName = 'imagee';
            this.previewImage = 'data:image/png;base64,' + image.base64String;
            this.uploadBlobData = blobData;
            this.uploadedExtension = image.format;
        });
    }
    uploadFile(event) {
        const eventObj = event;
        const target = eventObj.target;
        const file = target.files[0];
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
};
AddcomplaintPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFooService },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController }
];
AddcomplaintPage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['fileInput', { static: false },] }]
};
AddcomplaintPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-addcomplaint',
        template: _raw_loader_addcomplaint_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addcomplaint_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddcomplaintPage);



/***/ }),

/***/ 42642:
/*!*****************************************************!*\
  !*** ./src/app/addcomplaint/addcomplaint.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header:after {\n  display: none;\n}\nion-header ion-toolbar {\n  --border-width:0px;\n  --background:var(--ion-color-primarygradient)!important;\n  --ion-color-base:var(--ion-color-primarygradient)!important;\n}\nion-header ion-toolbar ion-title {\n  font-size: 18px;\n  color: var(--ion-color-white);\n  font-family: var(--ion-headfamily);\n}\nion-header ion-toolbar ion-back-button {\n  --icon-font-size: 20px;\n  color: var(--ion-color-white);\n}\nion-content [addcomplaint] [heading] {\n  margin-bottom: 20px;\n  text-align: center;\n}\nion-content [addcomplaint] [heading] h2 {\n  font-size: 18px;\n  color: var(--ion-color-black);\n  font-weight: 700;\n  margin: 10px 0px 7px;\n}\nion-content [addcomplaint] [heading] p {\n  font-size: 14px;\n  line-height: 21px;\n  color: #8d8d8d;\n  margin: 0 auto;\n  max-width: 270px;\n}\nion-content [addcomplaint] [form-group] {\n  margin-bottom: 20px;\n}\nion-content [addcomplaint] [form-group][mb-0] {\n  margin-bottom: 0px;\n}\nion-content [addcomplaint] [form-group] [btn-submit] {\n  --box-shadow: none;\n  min-height: 54px;\n  color: var(--ion-color-white);\n  font-size: 14px;\n  font-weight: 600;\n  transform: skew(18deg);\n  width: calc(100% - 20px);\n  margin: 0 auto;\n}\nion-content [addcomplaint] [form-group] [btn-submit] span {\n  transform: skew(-18deg);\n}\nion-content [addcomplaint] [form-group] ion-item {\n  --padding-start: 18px;\n  --min-height: 55px;\n  --background: var(--ion-color-grey);\n}\nion-content [addcomplaint] [form-group] ion-item ion-label {\n  align-items: center;\n  display: flex;\n}\nion-content [addcomplaint] [form-group] ion-item ion-label[labeltextarea] {\n  transform: translateY(5px);\n}\nion-content [addcomplaint] [form-group] ion-item ion-label img {\n  height: 20px;\n  width: 20px;\n  min-width: 20px;\n  object-fit: contain;\n}\nion-content [addcomplaint] [form-group] ion-item ion-input, ion-content [addcomplaint] [form-group] ion-item ion-textarea {\n  font-size: 14px;\n  color: #43444f;\n  font-weight: 600;\n  --placeholder-font-weight: 500;\n  --placeholder-opacity: 1;\n}\nion-content [addcomplaint] [uploadimage] p {\n  color: var(--ion-color-black);\n  font-size: 14px;\n  font-weight: 500;\n  max-width: 230px;\n  margin: 20px auto;\n  text-align: center;\n  line-height: 1.5;\n}\nion-content [addcomplaint] [uploadimage] [fileupload] label {\n  background: var(--ion-color-grey);\n  display: block;\n  text-align: center;\n  padding: 12px;\n}\nion-content [addcomplaint] [uploadimage] [fileupload] label [uploadinner] {\n  padding: 20px 15px;\n  border: 2px dashed #a7a7a7;\n}\nion-content [addcomplaint] [uploadimage] [fileupload] label [uploadinner] img {\n  height: 30px;\n}\nion-content [addcomplaint] [uploadimage] [fileupload] label [uploadinner] h3 {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-black);\n  margin: 10px 0px 0px;\n}\n.error {\n  color: red;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGNvbXBsYWludC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFFQSxhQUFBO0FBRkY7QUFJRTtFQUNDLGtCQUFBO0VBQ0QsdURBQUE7RUFDQSwyREFBQTtBQUZGO0FBR0U7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDSCxrQ0FBQTtBQUREO0FBR0U7RUFFRSxzQkFBQTtFQUNBLDZCQUFBO0FBRko7QUFVRTtFQUNDLG1CQUFBO0VBQ0Msa0JBQUE7QUFQSjtBQVFDO0VBRUMsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQVBGO0FBU0M7RUFFRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBUkg7QUFXRTtFQUVDLG1CQUFBO0FBVkg7QUFXRztFQUVDLGtCQUFBO0FBVko7QUFZRztFQUVHLGtCQUFBO0VBQ0YsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FBWEo7QUFZSTtFQUVDLHVCQUFBO0FBWEw7QUFjRTtFQUVFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQWJKO0FBY0k7RUFFQyxtQkFBQTtFQUNZLGFBQUE7QUFiakI7QUFjSztFQUVBLDBCQUFBO0FBYkw7QUFlSTtFQUVDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBZEw7QUFpQkk7RUFFSSxlQUFBO0VBQ0gsY0FBQTtFQUNBLGdCQUFBO0VBQ0MsOEJBQUE7RUFDQSx3QkFBQTtBQWhCTjtBQXNCQztFQUVDLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFyQkY7QUF5QkU7RUFFQSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUF4QkY7QUF5QkU7RUFFQSxrQkFBQTtFQUNBLDBCQUFBO0FBeEJGO0FBeUJFO0VBRUEsWUFBQTtBQXhCRjtBQTBCRTtFQUVDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUF6Qkg7QUFpQ0E7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQTlCRCIsImZpbGUiOiJhZGRjb21wbGFpbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlclxyXG57IFxyXG4gICY6YWZ0ZXJcclxuICB7XHJcbiAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICBpb24tdG9vbGJhclxyXG4gIHstLWJvcmRlci13aWR0aDowcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5Z3JhZGllbnQpIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5Z3JhZGllbnQpIWltcG9ydGFudDtcclxuICBpb24tdGl0bGVcclxuICB7IGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1oZWFkZmFtaWx5KTtcclxuICB9XHJcbiAgaW9uLWJhY2stYnV0dG9uXHJcbiAge1xyXG4gICAgLS1pY29uLWZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gIH1cclxuICB9XHJcbn1cclxuaW9uLWNvbnRlbnRcclxue1xyXG5bYWRkY29tcGxhaW50XVxyXG57XHJcbiAgW2hlYWRpbmddXHJcbiAge21hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRoMlxyXG5cdHtcclxuXHQgZm9udC1zaXplOjE4cHg7XHJcblx0IGNvbG9yOnZhcigtLWlvbi1jb2xvci1ibGFjayk7XHJcblx0IGZvbnQtd2VpZ2h0OjcwMDtcclxuXHQgbWFyZ2luOjEwcHggMHB4IDdweDtcclxuXHR9XHJcblx0cFxyXG5cdHtcclxuXHQgIGZvbnQtc2l6ZToxNHB4O1xyXG5cdCAgbGluZS1oZWlnaHQ6MjFweDtcclxuXHQgIGNvbG9yOiM4ZDhkOGQ7XHJcblx0ICBtYXJnaW46IDAgYXV0bzsgXHJcblx0ICBtYXgtd2lkdGg6IDI3MHB4O1xyXG5cdH1cclxuICB9IFxyXG4gIFtmb3JtLWdyb3VwXVxyXG5cdFx0eyAgICBcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRcdFx0JlttYi0wXVxyXG5cdFx0XHR7XHJcblx0XHRcdCBtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0W2J0bi1zdWJtaXRdXHJcblx0XHQgICB7XHJcblx0XHRcdCAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0XHRtaW4taGVpZ2h0OiA1NHB4O1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogc2tldygxOGRlZyk7XHJcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdHNwYW5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0IHRyYW5zZm9ybTogc2tldygtMThkZWcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0aW9uLWl0ZW1cclxuXHRcdCAgICB7XHJcblx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xyXG5cdFx0XHRcdC0tbWluLWhlaWdodDogNTVweDtcclxuXHRcdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuXHRcdFx0XHRpb24tbGFiZWxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHQgJltsYWJlbHRleHRhcmVhXVxyXG5cdFx0XHRcdCB7XHJcblx0XHRcdFx0IHRyYW5zZm9ybTp0cmFuc2xhdGVZKDVweCk7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHRpbWdcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHR3aWR0aDogMjBweDtcclxuXHRcdFx0XHRcdG1pbi13aWR0aDogMjBweDtcclxuXHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvbnRhaW47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24taW5wdXQgLCBpb24tdGV4dGFyZWFcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0ICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjNDM0NDRmO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdCAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHQgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVx0XHJcblx0XHR9XHJcblt1cGxvYWRpbWFnZV1cclxuXHR7XHJcblx0cFxyXG5cdHtcclxuXHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdG1heC13aWR0aDogMjMwcHg7XHJcblx0XHRtYXJnaW46IDIwcHggYXV0bztcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxLjU7XHJcblx0fVxyXG5cdFtmaWxldXBsb2FkXVxyXG5cdHtcclxuXHQgbGFiZWxcclxuXHQge1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOjEycHg7XHJcblx0XHRbdXBsb2FkaW5uZXJdXHJcblx0XHR7XHJcblx0XHRwYWRkaW5nOjIwcHggMTVweDtcclxuXHRcdGJvcmRlcjoycHggZGFzaGVkICNhN2E3YTc7XHJcblx0XHRpbWdcclxuXHRcdHtcclxuXHRcdGhlaWdodDozMHB4O1xyXG5cdFx0fVxyXG5cdFx0aDNcclxuXHRcdHtcclxuXHRcdCBmb250LXNpemU6MTRweDtcclxuXHRcdCBmb250LXdlaWdodDo1MDA7XHJcblx0XHQgY29sb3I6dmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcclxuXHRcdCBtYXJnaW46MTBweCAwcHggMHB4O1xyXG5cdFx0fVxyXG5cdFx0fVxyXG5cdCB9XHJcblx0fVxyXG5cdH1cclxufVxyXG59XHJcbi5lcnJvcntcclxuXHRjb2xvcjpyZWQ7XHJcblx0Zm9udC1zaXplOjEzcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 64811:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addcomplaint/addcomplaint.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"md\"> \n  \t<ion-toolbar class=\"primary\">\n\t\t  \n  \t\t<ion-back-button slot=\"start\" defaultHref=\"/tabs/complaints\"  text=\"\" icon=\"chevron-back-outline\">\n  \t\t</ion-back-button>\n    \t<ion-title class=\"ion-text-center\">Add Complaint</ion-title>\n  \t</ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n \t<div addcomplaint>\n     \t<div heading>\n\t   \t\t<h2>Any Complaint ?</h2>\n\t   \t\t<p>Please fill the detail  below if you have any complaint</p>\n\t\t</div>\n\t\t<form [formGroup]=\"complaintForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t\t\t<div form-group>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<img src=\"assets/img/icon9.png\"/>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-input type=\"text\" formControlName=\"title\"  placeholder=\"Title\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.title.errors?.required\">\n\t\t\t\t\t<ion-label no-margin stacked>Title is required.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.title.errors?.minlength\">\n\t\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.title.errors?.pattern\">\n\t\t\t\t\t<ion-label no-margin stacked>Only alphabets allowed.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</div>\n\t\t\t<div form-group>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label labeltextarea>\n\t\t\t\t\t\t<img src=\"assets/img/icon10.png\"/>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-textarea rows=\"4\"  formControlName=\"content\"  placeholder=\"Description\"></ion-textarea>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.content.errors?.required\">\n\t\t\t\t\t<ion-label no-margin stacked>Description is required.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.content.errors?.minlength\">\n\t\t\t\t\t<ion-label no-margin stacked>Minimum 5 chars long.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</div>\n\t\t\t<div uploadimage>\n\t\t\t\t<div fileupload>\n\t\t\t\t\t<label >\n\t\t\t\t\t\t<div uploadinner (click)=\"selectImageSource()\">\n\t\t\t\t\t\t\t<img src=\"assets/img/icon11.png\"/><h3>Take a Picture</h3> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"file\"    accept=\"image/*\" id=\"fileupload\"  (change)=\"uploadFile($event)\" name=\"fileupload\" style=\"display:none\"/>\n\t\t\t\t</div>\n\t\t\t\t<p>Take a picture or choose from your library</p>\n\t\t\t\t<img *ngIf=\"previewImage\" [src]=\"previewImage\"/>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div form-group mb-0>\n\t\t\t\t<ion-button btn-submit  type=\"submit\" expand=\"full\" color=\"primary\">\n\t\t\t\t\t<span>Submit</span>\n\t\t\t\t</ion-button>\n\t\t\t</div>\n\t\t</form>\n \t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_addcomplaint_addcomplaint_module_ts.js.map