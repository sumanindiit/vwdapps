(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 48914:
/*!******************************************************!*\
  !*** ./src/app/services/globalFooService.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalFooService": () => (/* binding */ GlobalFooService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);



let GlobalFooService = class GlobalFooService {
    constructor() {
        this.fooSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    publishSomeData(data) {
        this.fooSubject.next(data);
    }
    getObservable() {
        return this.fooSubject;
    }
};
GlobalFooService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], GlobalFooService);



/***/ }),

/***/ 91836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 7162);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 27075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 91836);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 7162);







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 7162:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./settings.page.html */ 14718);
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss */ 69519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 45146);
/* harmony import */ var _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/globalFooService.service */ 48914);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ 5620);








let SettingsPage = class SettingsPage {
    constructor(router, globalFooService, common, api) {
        this.router = router;
        this.globalFooService = globalFooService;
        this.common = common;
        this.api = api;
        this.toggle = false;
        this.userId = localStorage.getItem('vwd_userid');
    }
    ionViewDidEnter() {
        this.userData = JSON.parse(localStorage.getItem('vwd_userData'));
        this.toggle = this.userData.pushNotification == 1 ? true : false;
    }
    ngOnInit() {
    }
    UpdateNotification(status) {
        console.log(status);
        let type = status == true ? 0 : 1;
        console.log(type);
        let dict = {
            userId: this.userId,
            pushNotification: type,
        };
        this.api.post('updatePushNotificationStatus', dict, '')
            .subscribe((result) => {
            this.common.stopLoading();
            let res;
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
                if (type == 1) {
                    this.toggle = false;
                }
                else {
                    this.toggle = true;
                }
                localStorage.setItem('vwd_userData', JSON.stringify(res.data));
                this.common.presentToast('Updated Successfully!.', 'success');
            }
        }, (error) => {
            console.log(error);
        });
    }
    logout() {
        //this.storage.clear();
        localStorage.clear();
        this.router.navigate(['/login']);
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFooService },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SettingsPage);



/***/ }),

/***/ 69519:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header:after {\n  display: none;\n}\nion-header ion-toolbar {\n  --border-width: 0px;\n  --background: var(--ion-color-primarygradient)!important;\n  --ion-color-base: var(--ion-color-primarygradient)!important;\n}\nion-header ion-toolbar ion-title {\n  font-size: 18px;\n  color: var(--ion-color-white);\n  font-family: var(--ion-headfamily);\n}\nion-content [settings] [userinfo] {\n  --background: transparent;\n  --inner-padding-end: 0px;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --padding-top: 7px;\n  --padding-bottom: 7px;\n  border-bottom: 1px solid #f0f0f0;\n}\nion-content [settings] [userinfo] ion-avatar {\n  width: 82px;\n  height: 82px;\n  border: 2px solid rgba(21, 46, 104, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content [settings] [userinfo] ion-avatar span {\n  width: 72px;\n  height: 72px;\n  background: #f0f5ff;\n  border-radius: 50%;\n  font-size: 23px;\n  font-weight: 600;\n  color: var(--ion-color-black);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content [settings] [userinfo] ion-label {\n  margin-left: 15px;\n}\nion-content [settings] [userinfo] ion-label h2 {\n  color: var(--ion-color-black);\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 5px;\n}\nion-content [settings] [userinfo] ion-label p {\n  color: var(--ion-color-black);\n  font-size: 12px;\n  font-weight: 500;\n  margin: 0px;\n}\nion-content [settings] [menulink] {\n  --inner-padding-end: 0px;\n  border-bottom: 1px solid #f0f0f0;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\nion-content [settings] [menulink] img {\n  object-fit: contain;\n  background: var(--ion-color-secondarygradient);\n  padding: 10px;\n  height: 40px;\n  width: 40px;\n  border-radius: 0px;\n  margin-right: 15px;\n}\nion-content [settings] [menulink] ion-toggle {\n  --handle-spacing: 3px;\n  width: 52px;\n  height: 28px;\n  --handle-width: 22px;\n  --handle-height: 22px;\n  --handle-box-shadow: none;\n  --background: #f0f5ff;\n  --background-checked: var(--ion-color-secondarygradient);\n  --handle-background: var(--ion-color-primary);\n  --handle-background-checked: var(--ion-color-white);\n  padding: 0;\n  pointer-events: all;\n}\nion-content [settings] [menulink] ion-label {\n  font-weight: 500;\n  font-size: 15px;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLGFBQUE7QUFBRjtBQUVDO0VBQ0MsbUJBQUE7RUFDQSx3REFBQTtFQUNBLDREQUFBO0FBQUY7QUFDRTtFQUNDLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0FBQ0g7QUFNRTtFQUNDLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBSEg7QUFJRztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZKO0FBR0k7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREw7QUFJRztFQUNDLGlCQUFBO0FBRko7QUFHSTtFQUNDLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFETDtBQUdJO0VBQ0MsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBREw7QUFLRTtFQUNDLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUhIO0FBSUc7RUFDQyxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZKO0FBSUc7RUFDQyxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx3REFBQTtFQUNBLDZDQUFBO0VBQ0EsbURBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlHO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUZKIiwiZmlsZSI6InNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0aW9uLXRvb2xiYXIge1xyXG5cdFx0LS1ib3JkZXItd2lkdGg6IDBweDtcclxuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnlncmFkaWVudCkhaW1wb3J0YW50O1xyXG5cdFx0LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnlncmFkaWVudCkhaW1wb3J0YW50O1xyXG5cdFx0aW9uLXRpdGxlIHtcclxuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1oZWFkZmFtaWx5KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuXHRbc2V0dGluZ3NdIHtcclxuXHRcdFt1c2VyaW5mb10ge1xyXG5cdFx0XHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHRcdC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuXHRcdFx0LS1wYWRkaW5nLWVuZDogMTVweDtcclxuXHRcdFx0LS1wYWRkaW5nLXRvcDogN3B4O1xyXG5cdFx0XHQtLXBhZGRpbmctYm90dG9tOiA3cHg7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xyXG5cdFx0XHRpb24tYXZhdGFyIHtcclxuXHRcdFx0XHR3aWR0aDogODJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDgycHg7XHJcblx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgyMSwgNDYsIDEwNCwgMC41MCk7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDcycHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDcycHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjBmNWZmO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyM3B4O1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spO1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aW9uLWxhYmVsIHtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMTVweDtcclxuXHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHAge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRbbWVudWxpbmtdIHtcclxuXHRcdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcclxuXHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG5cdFx0XHQtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG5cdFx0XHQtLXBhZGRpbmctdG9wOiAxMnB4O1xyXG5cdFx0XHQtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG5cdFx0XHRpbWcge1xyXG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvbnRhaW47XHJcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeWdyYWRpZW50KTtcclxuXHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0XHRcdGhlaWdodDogNDBweDtcclxuXHRcdFx0XHR3aWR0aDogNDBweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwcHg7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlvbi10b2dnbGUge1xyXG5cdFx0XHRcdC0taGFuZGxlLXNwYWNpbmc6IDNweDtcclxuXHRcdFx0XHR3aWR0aDogNTJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDI4cHg7XHJcblx0XHRcdFx0LS1oYW5kbGUtd2lkdGg6IDIycHg7XHJcblx0XHRcdFx0LS1oYW5kbGUtaGVpZ2h0OiAyMnB4O1xyXG5cdFx0XHRcdC0taGFuZGxlLWJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdFx0LS1iYWNrZ3JvdW5kOiAjZjBmNWZmO1xyXG5cdFx0XHRcdC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5Z3JhZGllbnQpO1xyXG5cdFx0XHRcdC0taGFuZGxlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHRcdFx0XHQtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRwb2ludGVyLWV2ZW50czogYWxsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */");

/***/ }),

/***/ 14718:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"md\">\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<div settings>\n    <ion-item lines=\"none\" class=\"ion-no-padding\" userinfo detail=\"false\">\n     <ion-avatar>\n\t   <span>{{ userData?.name.charAt(0) }}</span>\n     </ion-avatar>\n\t <ion-label>\n\t  <h2>{{ userData?.name }}</h2>\n\t  <p>{{ userData?.email }}</p>\n\t </ion-label>\n\t</ion-item>\n\t<ion-item menulink mode=\"md\" lines=\"none\" class=\"ion-no-padding\" detail=\"false\" routerLink=\"/profile\">\n\t\t<img slot=\"start\" src=\"assets/img/icon12.png\"/>\n\t\t<ion-label>My Profile</ion-label>\n\t\t<ion-buttons>\n\t\t  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n\t\t</ion-buttons>\n    </ion-item>\n\t<ion-item menulink mode=\"md\" lines=\"none\" class=\"ion-no-padding\" detail=\"false\" routerLink=\"/termsconditions\">\n\t\t<img slot=\"start\" src=\"assets/img/icon13.png\"/>\n\t\t<ion-label>Terms & Conditions</ion-label>\n\t\t<ion-buttons>\n\t\t  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n\t\t</ion-buttons>\n    </ion-item>\n\t<ion-item menulink mode=\"md\" lines=\"none\" class=\"ion-no-padding\" detail=\"false\" routerLink=\"/privacypolicy\">\n\t\t<img slot=\"start\" src=\"assets/img/icon13.png\"/>\n\t\t<ion-label>Privacy Policy</ion-label>\n\t\t<ion-buttons>\n\t\t  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n\t</ion-buttons>\n    </ion-item>\n\t<ion-item menulink mode=\"md\" lines=\"none\" class=\"ion-no-padding\" detail=\"false\">\n\t\t<ion-label>Push Notifications</ion-label>\n\t\t<ion-toggle [checked]=\"toggle == true?true:false\" (click)=\"UpdateNotification(toggle)\"  ></ion-toggle>\n    </ion-item>\n\t<ion-item menulink mode=\"md\" lines=\"none\" class=\"ion-no-padding\" detail=\"false\" (click)=\"logout()\" >\n\t\t<ion-label><b>Logout</b></ion-label>\n\t\t<ion-buttons>\n\t\t  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n\t</ion-buttons>\n    </ion-item>\n</div>\t \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map