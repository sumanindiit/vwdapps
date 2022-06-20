(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_chat_chat_module_ts"],{

/***/ 57714:
/*!************************************************!*\
  !*** ./node_modules/rxjs-compat/Observable.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var rxjs_1 = __webpack_require__(/*! rxjs */ 765);
exports.Observable = rxjs_1.Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ 46056:
/*!*****************************************!*\
  !*** ./node_modules/rxjs/Observable.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(/*! rxjs-compat/Observable */ 57714));
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ 54761:
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageRoutingModule": () => (/* binding */ ChatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page */ 24099);




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_0__.ChatPage
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ 20818:
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageModule": () => (/* binding */ ChatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-routing.module */ 54761);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page */ 24099);







let ChatPageModule = class ChatPageModule {
};
ChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_1__.ChatPage]
    })
], ChatPageModule);



/***/ }),

/***/ 24099:
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPage": () => (/* binding */ ChatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chat.page.html */ 99451);
/* harmony import */ var _chat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page.scss */ 66582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 45146);
/* harmony import */ var _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/globalFooService.service */ 48914);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ 5620);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/camera */ 37673);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-socket-io */ 75421);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Observable */ 46056);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__);













let ChatPage = class ChatPage {
    constructor(formBuilder, router, globalFooService, common, api, plt, actionSheetCtrl, socket) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.globalFooService = globalFooService;
        this.common = common;
        this.api = api;
        this.plt = plt;
        this.actionSheetCtrl = actionSheetCtrl;
        this.socket = socket;
        this.submitAttempt = false;
        this.is_loaded = false;
        this.userId = localStorage.getItem('vwd_userid');
        this.disButton = true;
        this.getUpdates().subscribe(new_message => {
            console.log('testtttttttttt');
            this.getValletInfo();
            // console.log('new_message',new_message)
            // this.new_message = new_message;
            // if(this.new_message.toId == this.userId){
            //   this.chats.push(this.new_message);
            //   this.scrollToBottom();
            // }
        });
    }
    ionViewWillEnter() {
        this.getValletInfo();
    }
    ngOnInit() {
        this.messageForm = this.formBuilder.group({
            message: ['', []],
        });
        //http://54.71.136.88:3000/
    }
    getValletInfo() {
        this.api.post('getValletInfo', { userId: this.userId }, '')
            .subscribe((result) => {
            this.common.stopLoading();
            const res = result;
            if (res.status === '422' || res.status === 422) {
                let errMsgs = '';
                for (const x of res.errors) {
                    errMsgs += x + '</br>';
                }
                this.common.presentToast(errMsgs, 'danger');
                this.is_loaded = true;
            }
            else if (res.status === '200' || res.status === 200) {
                this.valletData = res.data.user;
                this.messageData = res.data.message;
                this.is_loaded = false;
                setTimeout(() => {
                    if (this.contentArea.scrollToBottom) {
                        this.contentArea.scrollToBottom();
                    }
                }, 100);
            }
        }, (error) => {
            console.log(error);
        });
    }
    get errorCtr() {
        return this.messageForm.controls;
    }
    onSubmit() {
        this.submitAttempt = true;
        if (!this.messageForm.valid) {
            this.common.presentToast('Please fill all required fields.', 'danger');
            return false;
        }
        else {
            this.common.presentLoading();
            const dict = this.messageForm.value;
            const imgName = (+new Date).toString(36).slice(-5);
            const formData = new FormData();
            if (typeof this.uploadBlobData === 'undefined') { }
            else {
                formData.append('file', this.uploadBlobData, `myimage.${this.uploadedExtension}`);
            }
            formData.append('message', this.messageForm.value.message);
            formData.append('userId', this.userId);
            formData.append('toId', this.valletData.id);
            this.socket.connect();
            this.socket.emit('send_message', { 'form_data': formData });
            this.api.post('sendMessage', formData, '')
                .subscribe((result) => {
                console.log('in result');
                this.submitAttempt = false;
                const res = result;
                if (res.status === 422 || res.status === '422') {
                    let errMsgs = '';
                    for (const x of res.errors) {
                        errMsgs += x + '</br>';
                    }
                    this.common.presentToast(errMsgs, 'danger');
                }
                else if (res.status === 200 || res.status === '200') {
                    this.previewImage = '';
                    this.messageForm.reset();
                    this.getValletInfo();
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
    selectImageSource() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    change(eve) {
        this.disButton = eve.target.value.length === '0' || eve.target.value.length === 0 ? true : false;
    }
    getUpdates() {
        let self;
        const observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__.Observable(observer => {
            console.log('test updates');
            this.socket.on('rec_message', (data) => {
                console.log('data', data);
                observer.next(data);
            });
        });
        return observable;
    }
};
ChatPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFooService },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__.Socket }
];
ChatPage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['fileInput', { static: false },] }],
    contentArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent,] }]
};
ChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)(),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-chat',
        template: _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatPage);



/***/ }),

/***/ 66582:
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header:after {\n  display: none;\n}\nion-header ion-toolbar {\n  --border-width: 0px;\n  --background: var(--ion-color-primarygradient)!important;\n  --ion-color-base: var(--ion-color-primarygradient)!important;\n}\nion-header ion-toolbar ion-title {\n  padding-left: 0px;\n}\nion-header ion-toolbar ion-title ion-item {\n  --inner-padding-end: 0px;\n  --background: transparent;\n}\nion-header ion-toolbar ion-title ion-item ion-avatar {\n  width: 46px;\n  height: 46px;\n  border: 1px solid var(--ion-color-white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-header ion-toolbar ion-title ion-item ion-avatar span {\n  width: 40px;\n  height: 40px;\n  background: var(--ion-color-white);\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-black);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-header ion-toolbar ion-title ion-item ion-label {\n  margin-left: 15px;\n}\nion-header ion-toolbar ion-title ion-item ion-label h2 {\n  font-size: 13px;\n  color: var(--ion-color-white);\n  font-weight: 600;\n  margin: 0;\n}\nion-header ion-toolbar ion-title ion-item ion-label p {\n  font-size: 12px;\n  color: var(--ion-color-white);\n  font-weight: 400;\n  margin: 0;\n}\nion-header ion-toolbar ion-back-button {\n  --icon-font-size: 20px;\n  color: var(--ion-color-white);\n}\nion-content {\n  --background: url('shape1.png') top right/contain no-repeat;\n  background: #f2f2f2;\n}\nion-content [receiver], ion-content .receiver {\n  flex-direction: row;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\nion-content [receiver] [chatleft] ion-icon, ion-content .receiver [chatleft] ion-icon {\n  color: var(--ion-color-primary);\n}\nion-content [receiver] [chatleft] p, ion-content .receiver [chatleft] p {\n  font-weight: 500;\n  font-size: 11px;\n  margin: 0px;\n  color: #333333;\n}\nion-content [receiver] [chatright], ion-content .receiver [chatright] {\n  padding: 15px 20px;\n  max-width: 270px;\n  border-radius: 0px;\n  background: var(--ion-color-secondarygradient);\n  position: relative;\n}\nion-content [receiver] [chatright]:after, ion-content .receiver [chatright]:after {\n  content: \"\";\n  border-width: 10px 10px 0px 0px;\n  border-style: solid;\n  border-color: #630606 transparent #630606 transparent;\n  position: absolute;\n  top: 0px;\n  right: -10px;\n}\nion-content [receiver] [chatright] p, ion-content .receiver [chatright] p {\n  font-weight: 500;\n  margin: 0px;\n  font-size: 13px;\n  color: var(--ion-color-white);\n  line-height: 21px;\n}\nion-content [sender], ion-content .sender {\n  flex-direction: row;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\nion-content [sender] [chatright] p, ion-content .sender [chatright] p {\n  font-weight: 500;\n  font-size: 11px;\n  margin: 0px;\n  color: #333333;\n}\nion-content [sender] [chatleft], ion-content .sender [chatleft] {\n  padding: 15px 20px;\n  border-radius: 0px;\n  background: var(--ion-color-white);\n  max-width: 270px;\n  position: relative;\n}\nion-content [sender] [chatleft]:after, ion-content .sender [chatleft]:after {\n  content: \"\";\n  border-width: 10px 10px 0px 0px;\n  border-style: solid;\n  border-color: var(--ion-color-white) transparent var(--ion-color-white) transparent;\n  position: absolute;\n  top: 0px;\n  left: -10px;\n  transform: rotate(90deg);\n}\nion-content [sender] [chatleft] p, ion-content .sender [chatleft] p {\n  font-weight: 500;\n  margin: 0px;\n  font-size: 13px;\n  line-height: 21px;\n  color: #333333;\n}\nion-footer {\n  background: var(--ion-color-white);\n}\nion-footer:before {\n  display: none;\n}\nion-footer [commentbox] {\n  padding: 15px;\n  display: flex;\n  flex-direction: row;\n}\nion-footer [commentbox] ion-item {\n  width: 100%;\n  border: 2px solid rgba(0, 0, 0, 0.16);\n  --min-height: 45px;\n  margin-right: -2px;\n  --background: transparent;\n  font-size: 11px;\n  --inner-padding-end: 10px;\n}\nion-footer [commentbox] ion-item img {\n  margin: 0px 0px 0px 10px;\n}\nion-footer [commentbox] ion-item ion-input {\n  --placeholder-opacity: 1;\n  color: #333;\n  font-size: 13px;\n  font-weight: 500;\n}\nion-footer [commentbox] ion-item [attachment] {\n  transform: rotate(-135deg);\n}\nion-footer [commentbox] ion-buttons {\n  font-size: 25px;\n}\nion-footer [commentbox] ion-buttons[iconright] {\n  margin-left: 0px;\n  background: var(--ion-color-primarygradient);\n  width: 49px;\n  height: 49px;\n  color: var(--ion-color-white);\n  min-width: 49px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsYUFBQTtBQUFGO0FBRUM7RUFDQyxtQkFBQTtFQUNBLHdEQUFBO0VBQ0EsNERBQUE7QUFBRjtBQUNFO0VBQ0MsaUJBQUE7QUFDSDtBQUFHO0VBQ0Msd0JBQUE7RUFDQSx5QkFBQTtBQUVKO0FBREk7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFHTDtBQUZLO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUlOO0FBREk7RUFDQyxpQkFBQTtBQUdMO0FBRks7RUFDQyxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFJTjtBQUZLO0VBQ0MsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBSU47QUFDRTtFQUNDLHNCQUFBO0VBQ0EsNkJBQUE7QUFDSDtBQUlBO0VBQ0MsMkRBQUE7RUFDQSxtQkFBQTtBQUREO0FBRUM7RUFDQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUVHO0VBQ0MsK0JBQUE7QUFBSjtBQUVHO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBSjtBQUdFO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtBQURIO0FBRUc7RUFDQyxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUc7RUFDQyxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQUFKO0FBSUM7RUFDQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUlHO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFGSjtBQUtFO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUhIO0FBSUc7RUFDQyxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1GQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBRko7QUFJRztFQUNDLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGSjtBQVFBO0VBQ0Msa0NBQUE7QUFMRDtBQU1DO0VBQ0MsYUFBQTtBQUpGO0FBTUM7RUFDQyxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSkY7QUFLRTtFQUNDLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUhIO0FBSUc7RUFDQyx3QkFBQTtBQUZKO0FBSUc7RUFDQyx3QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUlHO0VBQ0MsMEJBQUE7QUFGSjtBQUtFO0VBQ0MsZUFBQTtBQUhIO0FBSUc7RUFDQyxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUZKIiwiZmlsZSI6ImNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcblx0JjphZnRlciB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHRpb24tdG9vbGJhciB7XHJcblx0XHQtLWJvcmRlci13aWR0aDogMHB4O1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeWdyYWRpZW50KSFpbXBvcnRhbnQ7XHJcblx0XHQtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeWdyYWRpZW50KSFpbXBvcnRhbnQ7XHJcblx0XHRpb24tdGl0bGUge1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDBweDtcclxuXHRcdFx0aW9uLWl0ZW0ge1xyXG5cdFx0XHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdFx0XHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdGlvbi1hdmF0YXIge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDQ2cHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDQ2cHg7XHJcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogNDBweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24tbGFiZWwge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XHJcblx0XHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHAge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpb24tYmFjay1idXR0b24ge1xyXG5cdFx0XHQtLWljb24tZm9udC1zaXplOiAyMHB4O1xyXG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuXHQtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL3NoYXBlMS5wbmcpIHRvcCByaWdodC9jb250YWluIG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG5cdFtyZWNlaXZlcl0sIC5yZWNlaXZlciB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0W2NoYXRsZWZ0XSB7XHJcblx0XHRcdGlvbi1pY29uIHtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHAge1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdFx0XHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRbY2hhdHJpZ2h0XSB7XHJcblx0XHRcdHBhZGRpbmc6IDE1cHggMjBweDtcclxuXHRcdFx0bWF4LXdpZHRoOiAyNzBweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMHB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5Z3JhZGllbnQpO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0Ym9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMHB4IDBweDtcclxuXHRcdFx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogIzYzMDYwNiB0cmFuc3BhcmVudCAjNjMwNjA2IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHR0b3A6IDBweDtcclxuXHRcdFx0XHRyaWdodDogLTEwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0cCB7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDIxcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0W3NlbmRlcl0sIC5zZW5kZXIge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRcdFtjaGF0cmlnaHRdIHtcclxuXHRcdFx0cCB7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRmb250LXNpemU6IDExcHg7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0Y29sb3I6ICMzMzMzMzM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFtjaGF0bGVmdF0ge1xyXG5cdFx0XHRwYWRkaW5nOiAxNXB4IDIwcHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0bWF4LXdpZHRoOiAyNzBweDtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHQmOmFmdGVyIHtcclxuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdGJvcmRlci13aWR0aDogMTBweCAxMHB4IDBweCAwcHg7XHJcblx0XHRcdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSkgdHJhbnNwYXJlbnQgdmFyKC0taW9uLWNvbG9yLXdoaXRlKSB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0dG9wOiAwcHg7XHJcblx0XHRcdFx0bGVmdDogLTEwcHg7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHAge1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdCY6YmVmb3JlIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdFtjb21tZW50Ym94XSB7XHJcblx0XHRwYWRkaW5nOiAxNXB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRpb24taXRlbSB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cdFx0XHQtLW1pbi1oZWlnaHQ6IDQ1cHg7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogLTJweDtcclxuXHRcdFx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdFx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAxMHB4O1xyXG5cdFx0XHRpbWcge1xyXG5cdFx0XHRcdG1hcmdpbjogMHB4IDBweCAwcHggMTBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpb24taW5wdXQge1xyXG5cdFx0XHRcdC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuXHRcdFx0XHRjb2xvcjogIzMzMztcclxuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRbYXR0YWNobWVudF0ge1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpb24tYnV0dG9ucyB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjVweDtcclxuXHRcdFx0JltpY29ucmlnaHRdIHtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMHB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5Z3JhZGllbnQpO1xyXG5cdFx0XHRcdHdpZHRoOiA0OXB4O1xyXG5cdFx0XHRcdGhlaWdodDogNDlweDtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRtaW4td2lkdGg6IDQ5cHg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */");

/***/ }),

/***/ 99451:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"valletData\">\n  <ion-header mode=\"md\"> \n\n    <ion-toolbar class=\"primary\">\n      <ion-back-button slot=\"start\" defaultHref=\"/tabs/home\"  text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n      <ion-title class=\"ion-text-center\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-avatar><span>{{ valletData?.name.charAt(0) }}</span></ion-avatar>\n          <ion-label>\n            <h2>{{ valletData?.name }}</h2>\n            <p>{{ valletData?.email }}</p>\n          </ion-label>\n        </ion-item>\n      </ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content class=\"ion-padding\" #contentArea>\n\n    <div  *ngFor =\"let data of messageData\">\n\n      <div sender *ngIf=\"data.typ === 'sender'\">\n        <div chatleft *ngIf=\"data.typo === '1'\">\n          <p><img style=\"height: 100px;width: 100px;\" src=\"https://dev.indiit.solutions/vwd/public/messages/{{ data.message }}\"></p>\n        </div>\n        <div chatleft *ngIf=\"data.typo === '0'\">\n          <p>{{ data.message }}</p>\n        </div>\n        <div chatright>\n          <p>{{ data.time }}</p>\n        </div>\n      </div>\n\n      <div receiver *ngIf=\"data.typ === 'receiver'\">\n        <div chatleft>\n          <ion-icon name=\"checkmark-done-outline\"></ion-icon>\n          <p>{{ data.time }}</p>\n        </div> \n        <div chatright *ngIf=\"data.typo === '0'\">\n          <p>{{ data.message }}</p>\n        </div>\n        <div chatright *ngIf=\"data.typo === '1'\">\n          <p><img style=\"height: 100px;width: 100px;\" src=\"https://dev.indiit.solutions/vwd/public/messages/{{ data.message }}\"></p>\n        </div>\n      </div>\n\n    </div>\n  </ion-content>\n\n  <ion-footer>\n    \n      <form [formGroup]=\"messageForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\n        <img *ngIf=\"previewImage\" [src]=\"previewImage\"/>\n        <div commentbox>\n          \n          <ion-item lines=\"none\">\n            <ion-input type=\"text\" formControlName=\"message\" (ionInput)=\"change($event)\" placeholder=\"Write Message.....\"></ion-input>\n            <ion-icon attachment name=\"attach-outline\" (click)=\"selectImageSource()\" ></ion-icon>\n            \n          </ion-item>\n\n          <ion-button iconright  disabled={{disButton}} type=\"submit\">\n            <ion-icon name=\"paper-plane\"></ion-icon>\n          </ion-button>\n\n          <input type=\"file\"    accept=\"image/*\" id=\"fileupload\"  (change)=\"uploadFile($event)\" name=\"fileupload\" hidden=true/>\n        </div>\n      </form>\n    \n  </ion-footer>\n</ng-container>\n\n\n<ng-container *ngIf=\"is_loaded === true\">\n  <ion-header mode=\"md\"> \n\n    <ion-toolbar class=\"primary\">\n      <ion-back-button slot=\"start\" defaultHref=\"/tabs/home\"  text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n      <ion-title class=\"ion-text-center\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-avatar><span></span></ion-avatar>\n          <ion-label>\n            <h2></h2>\n            <p></p>\n          </ion-label>\n        </ion-item>\n      </ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content class=\"ion-padding\" #contentArea>\n\n    <div style=\"color: red;font-size: 17px;text-align: center;font-weight: 600;\" >\n      \tNo Vallet has been assigned yet.\n    </div>\n  </ion-content>\n\n  <ion-footer>\n  </ion-footer>\n</ng-container>\n\n\n<!-- Skeleton screen -->\n<ng-container *ngIf=\"!valletData\">\n  <ion-header mode=\"md\"> \n    <ion-toolbar class=\"primary\">\n      <ion-back-button slot=\"start\" defaultHref=\"/tabs/home\"  text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n      <ion-title class=\"ion-text-center\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-avatar><span><ion-skeleton-text animated style=\"width: 20%;\"></ion-skeleton-text></span></ion-avatar>\n          <ion-label>\n            <h2><ion-skeleton-text animated style=\"width: 40%;--background-rgb: 255,255,255;\"></ion-skeleton-text></h2>\n            <p><ion-skeleton-text animated style=\"width: 60%;--background-rgb: 255,255,255;\"></ion-skeleton-text></p>\n          </ion-label>\n        </ion-item>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"ion-padding\" >\n    <div receiver>\n      <div chatleft>\n        <ion-icon name=\"checkmark-done-outline\"></ion-icon>\n        <p><ion-skeleton-text animated style=\"width: 20%;--background-rgb: 255,255,255;\"></ion-skeleton-text></p>\n      </div> \n      <div chatright style=\"width: 100%;\">\n        <p><ion-skeleton-text animated style=\"width: 60%;--background-rgb: 255,255,255;\"></ion-skeleton-text> </p>\n      </div>\n    </div>\n    <div sender>\n      <div chatleft style=\"width: 100%;\">\n        <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\n      </div>\n      <div chatright>\n        <p><ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text></p>\n      </div> \n    </div>\n    <div sender>\n      <div chatleft style=\"width: 100%;\" >\n        <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\n      </div>\n      <div chatright>\n        <p><ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text></p>\n      </div> \n    </div>\n    <div receiver>\n      <div chatleft>\n        <ion-icon name=\"checkmark-done-outline\"></ion-icon>\n        <p><ion-skeleton-text animated style=\"width: 20%;--background-rgb: 255,255,255;\"></ion-skeleton-text></p>\n      </div> \n      <div chatright style=\"width: 100%;\">\n        <p><ion-skeleton-text animated style=\"width: 60%;--background-rgb: 255,255,255;\"></ion-skeleton-text> </p>\n      </div>\n    </div>\n  </ion-content>\n\n  <ion-footer>\n    <div commentbox>\n      <ion-item lines=\"none\">\n      <ion-input type=\"text\" placeholder=\"Write Message.....\"></ion-input>\n      <ion-icon attachment name=\"attach-outline\"></ion-icon>\n      </ion-item>\n      <ion-buttons iconright><ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text></ion-buttons>\n    </div>\n  </ion-footer>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_chat_module_ts.js.map