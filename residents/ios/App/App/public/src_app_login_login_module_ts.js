(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 45146);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);
/* harmony import */ var _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/globalFooService.service */ 48914);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 61628);











let LoginPage = class LoginPage {
    constructor(formBuilder, globalFooService, common, api, router, storage) {
        this.formBuilder = formBuilder;
        this.globalFooService = globalFooService;
        this.common = common;
        this.api = api;
        this.router = router;
        this.storage = storage;
        this.submitAttempt = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    ngOnInit() {
        this.logInForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
        });
    }
    get errorCtr() {
        return this.logInForm.controls;
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    onSubmit() {
        this.submitAttempt = true;
        if (!this.logInForm.valid) {
            this.common.presentToast('Please fill all required fields.', 'danger');
            return false;
        }
        else {
            this.common.presentLoading();
            let dict = this.logInForm.value;
            this.api.post('login', dict, '')
                .subscribe((result) => {
                this.submitAttempt = false;
                this.common.stopLoading();
                let res;
                res = result;
                if (res.status == 422) {
                    this.common.presentToast('Incorrect Username or Password.', 'danger');
                }
                else if (res.status == 200) {
                    localStorage.setItem('vwd_userData', JSON.stringify(res.data));
                    var userId = this.api.encryptData(res.userId, _config__WEBPACK_IMPORTED_MODULE_3__.config.ENC_SALT);
                    localStorage.setItem('vwd_userid', res.userId);
                    localStorage.setItem('vwd_valletid', res.data.vwd_valletid);
                    localStorage.setItem('vwd_valletName', res.data.vwd_valletName);
                    localStorage.setItem('vwd_token', userId);
                    var userToken = res.token;
                    localStorage.setItem('user_access_token', userToken);
                    localStorage.setItem('is_logged_in', 'true');
                    this.logInForm.reset();
                    this.common.presentToast('Logged In Successfully!.', 'success');
                    this.api.navCtrl.navigateRoot('/tabs/home');
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_4__.GlobalFooService },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

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

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background:var(--ion-color-white);\n}\nion-content [loginmain] [loginimg] {\n  background: url('bg1.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 220px;\n  width: 100%;\n  -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 77%, 0 100%);\n  clip-path: polygon(0% 0%, 100% 0, 100% 77%, 0 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\nion-content [loginmain] [loginimg]:after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  background: rgba(0, 0, 0, 0.6);\n}\nion-content [loginmain] [loginimg] [logo] {\n  position: relative;\n  z-index: 2;\n}\nion-content [loginmain] [loginimg] [logo] img {\n  height: 90px;\n}\nion-content [loginmain] [loginform] [heading] {\n  text-align: center;\n  margin: 10px 0px 34px;\n}\nion-content [loginmain] [loginform] [heading] h2 {\n  font-size: 20px;\n  font-family: var(--ion-headfamily);\n  margin: 0px 0px 10px;\n}\nion-content [loginmain] [loginform] [heading] p {\n  font-weight: 500;\n  color: #9d9d9d;\n  font-size: 14px;\n  margin: 0px;\n}\nion-content [loginmain] [loginform] [btn-signup] {\n  margin-top: 35px;\n  font-weight: 500;\n}\nion-content [loginmain] [loginform] [btn-signup] p {\n  font-size: 13px;\n  color: var(--ion-color-black);\n  margin: 0px;\n  font-weight: 500;\n}\nion-content [loginmain] [loginform] [btn-signup] p a {\n  color: var(--ion-color-secondary);\n  font-weight: 700;\n  text-decoration: underline;\n}\nion-content [loginmain] [loginform] [form-group] {\n  margin-bottom: 20px;\n}\nion-content [loginmain] [loginform] [form-group] [forgot] {\n  font-size: 14px;\n  color: #333333;\n  font-weight: 600;\n  text-decoration: none;\n}\nion-content [loginmain] [loginform] [form-group] [btn-login] {\n  --box-shadow: none;\n  min-height: 54px;\n  color: var(--ion-color-white);\n  font-size: 14px;\n  font-weight: 600;\n  transform: skew(18deg);\n  width: calc(100% - 20px);\n  margin: 0 auto;\n}\nion-content [loginmain] [loginform] [form-group] [btn-login] span {\n  transform: skew(-18deg);\n}\nion-content [loginmain] [loginform] [form-group] ion-item {\n  --padding-start: 18px;\n  --min-height: 55px;\n  --background: var(--ion-color-grey);\n}\nion-content [loginmain] [loginform] [form-group] ion-item ion-label {\n  align-items: center;\n  display: flex;\n  white-space: initial;\n}\nion-content [loginmain] [loginform] [form-group] ion-item ion-label img {\n  height: 20px;\n  width: 20px;\n  min-width: 20px;\n  object-fit: contain;\n}\nion-content [loginmain] [loginform] [form-group] ion-item ion-input {\n  font-size: 14px;\n  color: #43444f;\n  font-weight: 600;\n  --placeholder-font-weight: 500;\n  --placeholder-opacity: 1;\n}\n.error {\n  color: red;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLG1DQUFBO0FBQUE7QUFHRTtFQUVFLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0gsYUFBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUNBLG1EQUFBO0VBQ0EsYUFBQTtFQUNHLG1CQUFBO0VBQ0EsdUJBQUE7RUFDSCxrQkFBQTtBQUZEO0FBR0M7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFGSDtBQUlDO0VBQ0ksa0JBQUE7RUFDRyxVQUFBO0FBRlI7QUFHSztFQUVELFlBQUE7QUFGSjtBQVFJO0VBQ0Ysa0JBQUE7RUFDQSxxQkFBQTtBQU5GO0FBT0c7RUFFRSxlQUFBO0VBQ0gsa0NBQUE7RUFDQSxvQkFBQTtBQU5GO0FBUUc7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQU5KO0FBU0M7RUFDSSxnQkFBQTtFQUNGLGdCQUFBO0FBUEg7QUFRRztFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNILFdBQUE7RUFDQSxnQkFBQTtBQU5KO0FBT0k7RUFFSSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFOUjtBQVVDO0VBRUUsbUJBQUE7QUFUSDtBQVVHO0VBRUksZUFBQTtFQUNILGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBVEo7QUFXRztFQUVHLGtCQUFBO0VBQ0YsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FBVko7QUFXSTtFQUVDLHVCQUFBO0FBVkw7QUFhRTtFQUVFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQVpKO0FBYUk7RUFFQyxtQkFBQTtFQUNZLGFBQUE7RUFDWixvQkFBQTtBQVpMO0FBYUk7RUFFQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVpMO0FBZUk7RUFFSSxlQUFBO0VBQ0gsY0FBQTtFQUNBLGdCQUFBO0VBQ0MsOEJBQUE7RUFDQSx3QkFBQTtBQWROO0FBcUJBO0VBQ0MsVUFBQTtFQUNBLGVBQUE7QUFsQkQiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnRcclxue1xyXG4tLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuW2xvZ2lubWFpbl1cclxue1xyXG4gIFtsb2dpbmltZ11cclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1nL2JnMS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcblx0aGVpZ2h0OjIyMHB4O1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0LXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCwgMTAwJSA3NyUsIDAgMTAwJSk7XHJcblx0Y2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAsIDEwMCUgNzclLCAwIDEwMCUpO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0JjphZnRlclxyXG5cdHtcclxuXHQgIGNvbnRlbnQ6Jyc7XHJcblx0ICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHQgIHRvcDowcHg7XHJcblx0ICBsZWZ0OjBweDtcclxuXHQgIHJpZ2h0OjBweDtcclxuXHQgIGJvdHRvbTowcHg7XHJcblx0ICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC42MCk7XHJcblx0fVxyXG5cdFtsb2dvXVxyXG5cdHsgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuXHQgICAgaW1nXHJcblx0XHR7XHJcblx0XHQgIGhlaWdodDo5MHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuICB9XHJcbiAgW2xvZ2luZm9ybV1cclxuICB7XHJcbiAgICBbaGVhZGluZ11cclxuXHR7dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCBtYXJnaW46IDEwcHggIDBweCAzNHB4O1xyXG5cdCAgaDJcclxuXHQgIHtcclxuXHQgICAgZm9udC1zaXplOjIwcHg7XHJcblx0XHRmb250LWZhbWlseTp2YXIoLS1pb24taGVhZGZhbWlseSk7XHJcblx0XHRtYXJnaW46MHB4IDBweCAxMHB4O1xyXG5cdCAgfVxyXG5cdCAgcFxyXG5cdCAge2ZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0ICAgY29sb3I6IzlkOWQ5ZDtcclxuXHQgICBmb250LXNpemU6MTRweDtcclxuXHQgICBtYXJnaW46MHB4O1xyXG5cdCAgfVxyXG5cdH1cclxuXHRbYnRuLXNpZ251cF1cclxuXHRcdHsgIG1hcmdpbi10b3A6IDM1cHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdHBcclxuXHRcdFx0eyAgIGZvbnQtc2l6ZToxM3B4O1xyXG5cdFx0XHQgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRhXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdCAgICBjb2xvcjp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuXHRcdFx0XHQgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHQgICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRbZm9ybS1ncm91cF1cclxuXHRcdHsgICAgXHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRcdFtmb3Jnb3RdXHJcblx0XHRcdHtcclxuXHRcdFx0ICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRjb2xvcjojMzMzMzMzO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdH0gICBcclxuXHRcdFx0W2J0bi1sb2dpbl1cclxuXHRcdCAgIHtcclxuXHRcdFx0ICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDU0cHg7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiBza2V3KDE4ZGVnKTtcclxuXHRcdFx0XHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0c3BhblxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHQgdHJhbnNmb3JtOiBza2V3KC0xOGRlZyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRpb24taXRlbVxyXG5cdFx0ICAgIHtcclxuXHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XHJcblx0XHRcdFx0LS1taW4taGVpZ2h0OiA1NXB4O1xyXG5cdFx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG5cdFx0XHRcdGlvbi1sYWJlbFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdCB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcclxuXHRcdFx0XHRpbWdcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHR3aWR0aDogMjBweDtcclxuXHRcdFx0XHRcdG1pbi13aWR0aDogMjBweDtcclxuXHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvbnRhaW47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24taW5wdXRcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0ICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjNDM0NDRmO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdCAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHQgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVx0XHJcblx0XHR9XHJcbiAgfVxyXG59XHJcbn1cclxuLmVycm9ye1xyXG5cdGNvbG9yOnJlZDtcclxuXHRmb250LXNpemU6MTNweDtcclxufSJdfQ== */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header-->\n<ion-content>\n\t<div loginmain>\n  \t\t<div loginimg>\n    \t\t<div logo  class=\"ion-text-center\">\n         \t\t<img src=\"assets/img/logo.png\"/>\n      \t\t</div>\n  \t\t</div>\n  \t\t<div loginform class=\"ion-padding\">\n\t\t\t<form [formGroup]=\"logInForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t\t\t\t<div heading>\n\t\t\t\t\t<h2>Welcome Back</h2>\n\t\t\t\t\t<p>Login To Your Account</p>\n\t\t\t\t</div>\n\t\t\t\t<div form-group>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label><img src=\"assets/img/icon1.png\"/></ion-label>\n\t\t\t\t\t\t<ion-input formControlName=\"email\" type=\"email\"  placeholder=\"Email Address\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.email.errors?.required\">\n\t\t\t\t\t\t<ion-label no-margin stacked>Email is required.</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.email.errors?.pattern\">\n\t\t\t\t\t\t<ion-label no-margin stacked>Enter valid email.</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</div>\n\t\t\t\t<div form-group>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label><img src=\"assets/img/icon2.png\"/></ion-label>\n\t\t\t\t\t\t<ion-input [type]=\"passwordType\"   formControlName=\"password\"  placeholder=\"Password\"></ion-input>\n\t\t\t\t\t\t<ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class='form-text error'*ngIf=\"submitAttempt && errorCtr.password.errors?.required\">\n\t\t\t\t\t\t<ion-label no-margin stacked>Password is required.</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class='form-text error' *ngIf=\"submitAttempt && errorCtr.password.errors?.pattern\" >\n\t\t\t\t\t\t<ion-label no-margin stacked wrap-text>Password must be between 6 and 12 characters with at least one capital letter, one small letter, and one digit.</ion-label>\n\t\t\t\t\t </ion-item>\n\t\t\t\t</div>\n\t\t\t\t<div form-group class=\"ion-text-right\">\n\t\t\t\t\t<a forgot routerLink=\"/forgotpassword\" href=\"javascript:void(0)\">Forgot Password ?</a>\n\t\t\t\t</div>\n\t\t\t\t<div form-group>\n\t\t\t\t\t<ion-button btn-login  type=\"submit\" expand=\"full\" color=\"primary\">\n\t\t\t\t\t\t<span>Login</span>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</div>\n\t\t\t</form>\n\n\t\t\t<div btn-signup class=\"ion-text-center\">\n\t\t\t\t<p>Don't have an account? <a href=\"javascript:void(0)\" routerLink=\"/signup\">Sign Up</a></p>\n\t\t\t</div>\n  \t\t</div>\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map