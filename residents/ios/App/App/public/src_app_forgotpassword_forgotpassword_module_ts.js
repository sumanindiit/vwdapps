(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_forgotpassword_forgotpassword_module_ts"],{

/***/ 1782:
/*!*****************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPageRoutingModule": () => (/* binding */ ForgotpasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword.page */ 55651);




const routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__.ForgotpasswordPage
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotpasswordPageRoutingModule);



/***/ }),

/***/ 82488:
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPageModule": () => (/* binding */ ForgotpasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword-routing.module */ 1782);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpassword.page */ 55651);







let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotpasswordPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__.ForgotpasswordPage]
    })
], ForgotpasswordPageModule);



/***/ }),

/***/ 55651:
/*!*******************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPage": () => (/* binding */ ForgotpasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forgotpassword.page.html */ 79603);
/* harmony import */ var _forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpassword.page.scss */ 11398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 45146);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);








let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(formBuilder, common, api, router) {
        this.formBuilder = formBuilder;
        this.common = common;
        this.api = api;
        this.router = router;
        this.submitAttempt = false;
        this.submitAttemptOTP = false;
        this.submitPasswordAttempt = false;
        this.step = '1';
        this.passwordType = 'password';
        this.confirmPasswordType = 'password';
        this.passwordIcon = 'eye-off';
        this.confirmPasswordIcon = 'eye-off';
    }
    ngOnInit() {
        this.forgotPassword = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
        });
        this.verifyOTP = this.formBuilder.group({
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
        });
        this.resetPassword = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        }, {
            validator: this.matchingPasswords('password', 'confirmPassword')
        });
    }
    get errorCtr() {
        return this.forgotPassword.controls;
    }
    get errorCtrOTP() {
        return this.verifyOTP.controls;
    }
    get errorPasswordCtr() {
        return this.resetPassword.controls;
    }
    onVerifyOTP() {
        this.submitAttemptOTP = true;
        if (!this.verifyOTP.valid) {
            return false;
        }
        else {
            this.common.presentLoading();
            let dict = {
                otp_id: this.otp_id,
                otp: this.verifyOTP.value.otp
            };
            this.api.post('verifyOTP', dict, '')
                .subscribe((result) => {
                this.submitAttempt = false;
                this.common.stopLoading();
                let res;
                res = result;
                if (res.status == 422) {
                    let errMsgs = '';
                    for (const x of res.errors) {
                        errMsgs += x + '</br>';
                    }
                    this.common.presentToast(errMsgs, 'danger');
                }
                else if (res.status == 200) {
                    this.verifyOTP.reset();
                    this.common.presentToast('OTP verified!.', 'success');
                    this.step = '3';
                    this.otp = res.otp;
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
    onSubmit() {
        this.submitAttempt = true;
        if (!this.forgotPassword.valid) {
            return false;
        }
        else {
            this.common.presentLoading();
            let dict = this.forgotPassword.value;
            this.api.post('forgotPassword', dict, '')
                .subscribe((result) => {
                this.submitAttempt = false;
                this.common.stopLoading();
                let res;
                res = result;
                if (res.status == 422) {
                    let errMsgs = '';
                    for (const x of res.errors) {
                        errMsgs += x + '</br>';
                    }
                    this.common.presentToast(errMsgs, 'danger');
                }
                else if (res.status == 200) {
                    this.forgotPassword.reset();
                    this.common.presentToast('OTP sent on your email address!.', 'success');
                    this.step = '2';
                    this.otp_id = res.email;
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
    onResetPassword() {
        this.submitPasswordAttempt = true;
        if (!this.resetPassword.valid) {
            //this.common.presentToast('Please fill all required fields.','danger');
            return false;
        }
        else {
            this.common.presentLoading();
            let dict = this.resetPassword.value;
            dict['otp'] = this.otp;
            dict['otp_id'] = this.otp_id;
            this.api.post('resetPassword', dict, '')
                .subscribe((result) => {
                this.submitAttempt = false;
                this.common.stopLoading();
                let res;
                res = result;
                if (res.status == 422) {
                    let errMsgs = '';
                    for (const x of res.errors) {
                        errMsgs += x + '</br>';
                    }
                    this.common.presentToast(errMsgs, 'danger');
                }
                else if (res.status == 200) {
                    //localStorage.clear();
                    this.resetPassword.reset();
                    this.router.navigate(['/login']);
                    this.common.presentToast('Password Updated Successfully!. Please Log in.', 'success');
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
    matchingPasswords(passwordKey, confirmPasswordKey) {
        return (resetPassword) => {
            let password = resetPassword.controls[passwordKey];
            let confirmPassword = resetPassword.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    hideShowConfirmPassword() {
        this.confirmPasswordType = this.confirmPasswordType === 'text' ? 'password' : 'text';
        this.confirmPasswordIcon = this.confirmPasswordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
};
ForgotpasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ForgotpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgotpassword',
        template: _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgotpasswordPage);



/***/ }),

/***/ 11398:
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background:var(--ion-color-white);\n}\nion-content [loginmain] [loginimg] {\n  background: url('bg1.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 220px;\n  width: 100%;\n  -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 77%, 0 100%);\n  clip-path: polygon(0% 0%, 100% 0, 100% 77%, 0 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\nion-content [loginmain] [loginimg]:after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  background: rgba(0, 0, 0, 0.6);\n}\nion-content [loginmain] [loginimg] [logo] {\n  position: relative;\n  z-index: 2;\n}\nion-content [loginmain] [loginimg] [logo] img {\n  height: 90px;\n}\nion-content [loginmain] [loginform] [heading] {\n  text-align: center;\n  margin: 10px 0px 34px;\n}\nion-content [loginmain] [loginform] [heading] h2 {\n  font-size: 20px;\n  font-family: var(--ion-headfamily);\n  margin: 0px 0px 10px;\n}\nion-content [loginmain] [loginform] [heading] p {\n  font-weight: 500;\n  color: #9d9d9d;\n  font-size: 14px;\n  margin: 0px auto;\n  line-height: 21px;\n  max-width: 280px;\n}\nion-content [loginmain] [loginform] [btn-forgot] {\n  margin-top: 35px;\n  font-weight: 500;\n}\nion-content [loginmain] [loginform] [btn-forgot] p {\n  font-size: 13px;\n  color: var(--ion-color-black);\n  margin: 0px;\n  font-weight: 500;\n}\nion-content [loginmain] [loginform] [btn-forgot] p a {\n  color: var(--ion-color-secondary);\n  font-weight: 700;\n  text-decoration: underline;\n}\nion-content [loginmain] [loginform] [form-group] {\n  margin: 50px 0px 60px;\n}\nion-content [loginmain] [loginform] [form-group] [btn-reset] {\n  --box-shadow: none;\n  min-height: 54px;\n  color: var(--ion-color-white);\n  font-size: 14px;\n  font-weight: 600;\n  transform: skew(18deg);\n  width: calc(100% - 20px);\n  margin: 0 auto;\n}\nion-content [loginmain] [loginform] [form-group] [btn-reset] span {\n  transform: skew(-18deg);\n}\nion-content [loginmain] [loginform] [form-group] ion-item {\n  --padding-start: 18px;\n  --min-height: 55px;\n  --background: var(--ion-color-grey);\n}\nion-content [loginmain] [loginform] [form-group] ion-item ion-label {\n  align-items: center;\n  display: flex;\n}\nion-content [loginmain] [loginform] [form-group] ion-item ion-label img {\n  height: 20px;\n  width: 20px;\n  min-width: 20px;\n  object-fit: contain;\n}\nion-content [loginmain] [loginform] [form-group] ion-item ion-input {\n  font-size: 14px;\n  color: #43444f;\n  font-weight: 600;\n  --placeholder-font-weight: 500;\n  --placeholder-opacity: 1;\n}\n.error {\n  color: red;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLG1DQUFBO0FBQUE7QUFHRTtFQUVFLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0gsYUFBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUNBLG1EQUFBO0VBQ0EsYUFBQTtFQUNHLG1CQUFBO0VBQ0EsdUJBQUE7RUFDSCxrQkFBQTtBQUZEO0FBR0M7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFGSDtBQUlDO0VBQ0ksa0JBQUE7RUFDRyxVQUFBO0FBRlI7QUFHSztFQUVELFlBQUE7QUFGSjtBQVFJO0VBQ0Ysa0JBQUE7RUFDQSxxQkFBQTtBQU5GO0FBT0c7RUFFRSxlQUFBO0VBQ0gsa0NBQUE7RUFDQSxvQkFBQTtBQU5GO0FBUUc7RUFFRSxnQkFBQTtFQUNILGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBUEY7QUFVQztFQUNJLGdCQUFBO0VBQ0YsZ0JBQUE7QUFSSDtBQVNHO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0gsV0FBQTtFQUNBLGdCQUFBO0FBUEo7QUFRSTtFQUVJLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQVBSO0FBV0M7RUFFRSxxQkFBQTtBQVZIO0FBV0c7RUFFRyxrQkFBQTtFQUNGLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQVZKO0FBV0k7RUFFQyx1QkFBQTtBQVZMO0FBYUU7RUFFRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7QUFaSjtBQWFJO0VBRUMsbUJBQUE7RUFDWSxhQUFBO0FBWmpCO0FBYUk7RUFFQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVpMO0FBZUk7RUFFSSxlQUFBO0VBQ0gsY0FBQTtFQUNBLGdCQUFBO0VBQ0MsOEJBQUE7RUFDQSx3QkFBQTtBQWROO0FBcUJBO0VBQ0MsVUFBQTtFQUNBLGVBQUE7QUFsQkQiLCJmaWxlIjoiZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnRcclxue1xyXG4tLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuW2xvZ2lubWFpbl1cclxue1xyXG4gIFtsb2dpbmltZ11cclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1nL2JnMS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcblx0aGVpZ2h0OjIyMHB4O1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0LXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCwgMTAwJSA3NyUsIDAgMTAwJSk7XHJcblx0Y2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAsIDEwMCUgNzclLCAwIDEwMCUpO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0JjphZnRlclxyXG5cdHtcclxuXHQgIGNvbnRlbnQ6Jyc7XHJcblx0ICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHQgIHRvcDowcHg7XHJcblx0ICBsZWZ0OjBweDtcclxuXHQgIHJpZ2h0OjBweDtcclxuXHQgIGJvdHRvbTowcHg7XHJcblx0ICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC42MCk7XHJcblx0fVxyXG5cdFtsb2dvXVxyXG5cdHsgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuXHQgICAgaW1nXHJcblx0XHR7XHJcblx0XHQgIGhlaWdodDo5MHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuICB9XHJcbiAgW2xvZ2luZm9ybV1cclxuICB7XHJcbiAgICBbaGVhZGluZ11cclxuXHR7dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCBtYXJnaW46IDEwcHggIDBweCAzNHB4O1xyXG5cdCAgaDJcclxuXHQgIHtcclxuXHQgICAgZm9udC1zaXplOjIwcHg7XHJcblx0XHRmb250LWZhbWlseTp2YXIoLS1pb24taGVhZGZhbWlseSk7XHJcblx0XHRtYXJnaW46MHB4IDBweCAxMHB4O1xyXG5cdCAgfVxyXG5cdCAgcFxyXG5cdCAge1xyXG5cdCAgICBmb250LXdlaWdodDogNTAwO1xyXG5cdFx0Y29sb3I6ICM5ZDlkOWQ7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRtYXJnaW46IDBweCBhdXRvO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIxcHg7XHJcblx0XHRtYXgtd2lkdGg6IDI4MHB4O1xyXG5cdCAgfVxyXG5cdH1cclxuXHRbYnRuLWZvcmdvdF1cclxuXHRcdHsgIG1hcmdpbi10b3A6IDM1cHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdHBcclxuXHRcdFx0eyAgIGZvbnQtc2l6ZToxM3B4O1xyXG5cdFx0XHQgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRhXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdCAgICBjb2xvcjp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuXHRcdFx0XHQgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHQgICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRbZm9ybS1ncm91cF1cclxuXHRcdHsgICAgXHJcblx0XHRcdG1hcmdpbjogNTBweCAwcHggNjBweDtcclxuXHRcdFx0W2J0bi1yZXNldF1cclxuXHRcdCAgIHtcclxuXHRcdFx0ICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDU0cHg7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiBza2V3KDE4ZGVnKTtcclxuXHRcdFx0XHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0c3BhblxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHQgdHJhbnNmb3JtOiBza2V3KC0xOGRlZyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRpb24taXRlbVxyXG5cdFx0ICAgIHtcclxuXHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XHJcblx0XHRcdFx0LS1taW4taGVpZ2h0OiA1NXB4O1xyXG5cdFx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG5cdFx0XHRcdGlvbi1sYWJlbFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGltZ1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0XHRcdFx0bWluLXdpZHRoOiAyMHB4O1xyXG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY29udGFpbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlvbi1pbnB1dFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHQgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICM0MzQ0NGY7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdFx0IC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdCAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuICB9XHJcbn1cclxufVxyXG4uZXJyb3J7XHJcblx0Y29sb3I6cmVkO1xyXG5cdGZvbnQtc2l6ZToxM3B4O1xyXG59Il19 */");

/***/ }),

/***/ 79603:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--ion-header>\n  <ion-toolbar>\n    <ion-title>forgotpassword</ion-title>\n  </ion-toolbar>\n</ion-header-->\n<ion-content>\n\t<div loginmain>\n\t\t<div loginimg>\n\t\t\t<div logo  class=\"ion-text-center\">\n\t\t\t\t<img src=\"assets/img/logo.png\"/>\n\t\t\t</div>\n\t\t</div>\n\t\t<div loginform class=\"ion-padding\">\n\n\t\t\t<ng-container *ngIf=\"step == '1'\">\n\t\t\t<div heading>\n\t\t\t\t<h2>Forgot Password</h2>\n\t\t\t\t<p>Please fill the registered email address below to reset password</p>\n\t\t\t</div>\n\t\t\t<form [formGroup]=\"forgotPassword\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t\t\t\t<div form-group>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t<img src=\"assets/img/icon1.png\"/>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-input formControlName=\"email\" type=\"email\"  placeholder=\"Email Address\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.email.errors?.required\">\n\t\t\t\t\t\t<ion-label no-margin stacked>Email is required.</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.email.errors?.pattern\">\n\t\t\t\t\t\t<ion-label no-margin stacked>Enter valid email.</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t<div form-group>\n\t\t\t\t\t<ion-button btn-reset  type=\"submit\" expand=\"full\" color=\"primary\">\n\t\t\t\t\t\t\t<span>Reset Password</span>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t</ng-container>\n\n\t\t\t<ng-container *ngIf=\"step == '2'\">\n\n\t\t\t\t<div heading>\n\t\t\t\t\t<h2>Verify OTP</h2>\n\t\t\t\t\t<p>Enter OTP sent on your email address</p>\n\t\t\t\t</div>\n\t\t\t\t<form [formGroup]=\"verifyOTP\" (ngSubmit)=\"onVerifyOTP()\" novalidate>\n\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t<ion-item  class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-label >\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"code\"></ion-icon>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-input formControlName=\"otp\" placeholder=\"Enter OTP\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttemptOTP && errorCtrOTP.otp.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Please enter OTP.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t<ion-button btn-reset  type=\"submit\" expand=\"full\" color=\"primary\">\n\t\t\t\t\t\t\t\t<span>Verify OTP</span>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t\n\t\t\t</ng-container>\n\n\t\t\t<ng-container *ngIf=\"step == '3'\">\n\t\t\t\t<div heading>\n\t\t\t\t\t<h2>Reset Password</h2>\n\t\t\t\t\t<p>Create your new password</p>\n\t\t\t\t</div>\n\t\t\t\t<form [formGroup]=\"resetPassword\" (ngSubmit)=\"onResetPassword()\" novalidate>\n\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t<img src=\"assets/img/icon2.png\"/>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-input  [type]=\"passwordType\"   formControlName=\"password\" placeholder=\"Password\"></ion-input>\n\t\t\t\t\t\t\t<ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n\t\t\t\t\t\t</ion-item>\t\n\t\t\t\t\t\t<ion-item class='form-text error'*ngIf=\"submitPasswordAttempt && errorPasswordCtr.password.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Password is required.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class='form-text error' *ngIf=\"submitPasswordAttempt && errorPasswordCtr.password.errors?.pattern\" >\n\t\t\t\t\t\t\t<ion-label no-margin stacked wrap-text>Password must be between 6 and 12 characters with at least one capital letter, one small letter, and one digit.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t<img src=\"assets/img/icon2.png\"/>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-input [type]=\"confirmPasswordType\" formControlName=\"confirmPassword\" placeholder=\"Confirm Password\"></ion-input>\n\t\t\t\t\t\t\t<ion-icon item-end [name]=\"confirmPasswordIcon\" class=\"passwordIcon\" (click)='hideShowConfirmPassword()'></ion-icon>\t\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class='form-text error'*ngIf=\"submitPasswordAttempt && errorPasswordCtr.confirmPassword.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Confirm Password is required.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class='form-text error' *ngIf=\"submitPasswordAttempt && !errorPasswordCtr.confirmPassword.errors?.required && resetPassword.hasError('mismatchedPasswords') \">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Passwords do not match</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div form-group>\n\t\t\t\t\t<ion-button btn-reset  type=\"submit\" expand=\"full\" color=\"primary\">\n\t\t\t\t\t\t\t<span>Reset Password</span>\n\t\t\t\t\t</ion-button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</ng-container>\n\n\t\t\t<div btn-forgot class=\"ion-text-center\">\n\t\t\t\t<p>Back To <a href=\"javascript:void(0)\" routerLink=\"/login\">Login</a></p>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_forgotpassword_forgotpassword_module_ts.js.map