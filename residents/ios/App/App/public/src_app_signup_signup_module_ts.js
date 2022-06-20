(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_signup_signup_module_ts"],{

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

/***/ 50159:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 80771);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 77648:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 50159);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 80771);








let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 80771:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 21355);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 74194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 45146);
/* harmony import */ var _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/globalFooService.service */ 48914);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);









let SignupPage = class SignupPage {
    constructor(formBuilder, globalFooService, common, api, router) {
        this.formBuilder = formBuilder;
        this.globalFooService = globalFooService;
        this.common = common;
        this.api = api;
        this.router = router;
        this.submitAttempt = false;
        this.passwordType = 'password';
        this.confirmPasswordType = 'password';
        this.passwordIcon = 'eye-off';
        this.confirmPasswordIcon = 'eye-off';
    }
    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            phoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]+$')]],
            apartmentComplex: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]],
            buildingNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]],
            apartmentNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        }, {
            validator: this.matchingPasswords('password', 'confirmPassword')
        });
    }
    get errorCtr() {
        return this.signUpForm.controls;
    }
    onSubmit() {
        this.submitAttempt = true;
        if (!this.signUpForm.valid) {
            this.common.presentToast('Please fill all required fields.', 'danger');
            return false;
        }
        else {
            this.common.presentLoading();
            let dict = this.signUpForm.value;
            this.api.post('register', dict, '')
                .subscribe((result) => {
                console.log('in result');
                this.submitAttempt = false;
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
                    this.signUpForm.reset();
                    this.common.presentToast('Registered Successfully!.', 'success');
                    this.api.navCtrl.navigateRoot('/login');
                }
            }, (error) => {
                console.log('in error');
                console.log(error);
            });
        }
    }
    matchingPasswords(passwordKey, confirmPasswordKey) {
        return (signUpForm) => {
            let password = signUpForm.controls[passwordKey];
            let confirmPassword = signUpForm.controls[confirmPasswordKey];
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
SignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFooService },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 74194:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background:var(--ion-color-white);\n}\nion-content [loginmain] [loginimg] {\n  background: url('bg1.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 220px;\n  width: 100%;\n  -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 77%, 0 100%);\n  clip-path: polygon(0% 0%, 100% 0, 100% 77%, 0 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\nion-content [loginmain] [loginimg]:after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  background: rgba(0, 0, 0, 0.6);\n}\nion-content [loginmain] [loginimg] [logo] {\n  position: relative;\n  z-index: 2;\n}\nion-content [loginmain] [loginimg] [logo] img {\n  height: 90px;\n}\nion-content [loginmain] [loginform] [heading] {\n  text-align: center;\n  margin: 10px 0px 25px;\n}\nion-content [loginmain] [loginform] [heading] h2 {\n  font-size: 20px;\n  font-family: var(--ion-headfamily);\n  margin: 0px 0px 10px;\n}\nion-content [loginmain] [loginform] [heading] p {\n  font-weight: 500;\n  color: #9d9d9d;\n  font-size: 14px;\n  margin: 0px;\n}\nion-content [loginmain] [loginform] [btn-login] {\n  font-weight: 500;\n}\nion-content [loginmain] [loginform] [btn-login] p {\n  font-size: 13px;\n  color: var(--ion-color-black);\n  margin: 0px;\n  font-weight: 500;\n}\nion-content [loginmain] [loginform] [btn-login] p a {\n  color: var(--ion-color-secondary);\n  font-weight: 700;\n  text-decoration: underline;\n}\nion-content [loginmain] [loginform] [form-group] {\n  margin-bottom: 20px;\n}\nion-content [loginmain] [loginform] [form-group] [btn-signup] {\n  --box-shadow: none;\n  min-height: 54px;\n  color: var(--ion-color-white);\n  font-size: 14px;\n  font-weight: 600;\n  transform: skew(18deg);\n  width: calc(100% - 20px);\n  margin: 0 auto;\n}\nion-content [loginmain] [loginform] [form-group] [btn-signup] span {\n  transform: skew(-18deg);\n}\nion-content [loginmain] [loginform] [form-group] ion-item {\n  --padding-start: 18px;\n  --min-height: 55px;\n  --background: var(--ion-color-grey);\n}\nion-content [loginmain] [loginform] [form-group] ion-item ion-label {\n  align-items: center;\n  display: flex;\n  white-space: initial;\n}\nion-content [loginmain] [loginform] [form-group] ion-item ion-label img {\n  height: 20px;\n  width: 20px;\n  min-width: 20px;\n  object-fit: contain;\n}\nion-content [loginmain] [loginform] [form-group] ion-item ion-input {\n  font-size: 14px;\n  color: #43444f;\n  font-weight: 600;\n  --placeholder-font-weight: 500;\n  --placeholder-opacity: 1;\n}\n.error {\n  color: red;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxtQ0FBQTtBQUFBO0FBR0U7RUFFRSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNILGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkRBQUE7RUFDQSxtREFBQTtFQUNBLGFBQUE7RUFDRyxtQkFBQTtFQUNBLHVCQUFBO0VBQ0gsa0JBQUE7QUFGRDtBQUdDO0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBRkg7QUFJQztFQUNJLGtCQUFBO0VBQ0csVUFBQTtBQUZSO0FBR0s7RUFFRCxZQUFBO0FBRko7QUFRSTtFQUNGLGtCQUFBO0VBQ0EscUJBQUE7QUFORjtBQU9HO0VBRUUsZUFBQTtFQUNILGtDQUFBO0VBQ0Esb0JBQUE7QUFORjtBQVFHO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFOSjtBQVNDO0VBRUUsZ0JBQUE7QUFSSDtBQVNHO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0gsV0FBQTtFQUNBLGdCQUFBO0FBUEo7QUFRSTtFQUVJLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQVBSO0FBV0M7RUFFRSxtQkFBQTtBQVZIO0FBV0c7RUFFRyxrQkFBQTtFQUNGLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQVZKO0FBV0k7RUFFQyx1QkFBQTtBQVZMO0FBYUU7RUFFRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7QUFaSjtBQWNJO0VBRUMsbUJBQUE7RUFDWSxhQUFBO0VBQ1osb0JBQUE7QUFiTDtBQWNJO0VBRUMsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFiTDtBQWdCSTtFQUVJLGVBQUE7RUFDSCxjQUFBO0VBQ0EsZ0JBQUE7RUFDQyw4QkFBQTtFQUNBLHdCQUFBO0FBZk47QUF3QkE7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQXJCRCIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnRcclxue1xyXG4tLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuW2xvZ2lubWFpbl1cclxue1xyXG4gIFtsb2dpbmltZ11cclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1nL2JnMS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcblx0aGVpZ2h0OjIyMHB4O1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0LXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCwgMTAwJSA3NyUsIDAgMTAwJSk7XHJcblx0Y2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAsIDEwMCUgNzclLCAwIDEwMCUpO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0JjphZnRlclxyXG5cdHtcclxuXHQgIGNvbnRlbnQ6Jyc7XHJcblx0ICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHQgIHRvcDowcHg7XHJcblx0ICBsZWZ0OjBweDtcclxuXHQgIHJpZ2h0OjBweDtcclxuXHQgIGJvdHRvbTowcHg7XHJcblx0ICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC42MCk7XHJcblx0fVxyXG5cdFtsb2dvXVxyXG5cdHsgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuXHQgICAgaW1nXHJcblx0XHR7XHJcblx0XHQgIGhlaWdodDo5MHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuICB9XHJcbiAgW2xvZ2luZm9ybV1cclxuICB7XHJcbiAgICBbaGVhZGluZ11cclxuXHR7dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCBtYXJnaW46IDEwcHggIDBweCAyNXB4O1xyXG5cdCAgaDJcclxuXHQgIHtcclxuXHQgICAgZm9udC1zaXplOjIwcHg7XHJcblx0XHRmb250LWZhbWlseTp2YXIoLS1pb24taGVhZGZhbWlseSk7XHJcblx0XHRtYXJnaW46MHB4IDBweCAxMHB4O1xyXG5cdCAgfVxyXG5cdCAgcFxyXG5cdCAge2ZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0ICAgY29sb3I6IzlkOWQ5ZDtcclxuXHQgICBmb250LXNpemU6MTRweDtcclxuXHQgICBtYXJnaW46MHB4O1xyXG5cdCAgfVxyXG5cdH1cclxuXHRbYnRuLWxvZ2luXVxyXG5cdFx0eyAgXHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdHBcclxuXHRcdFx0eyAgIGZvbnQtc2l6ZToxM3B4O1xyXG5cdFx0XHQgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRhXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdCAgICBjb2xvcjp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuXHRcdFx0XHQgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHQgICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRbZm9ybS1ncm91cF1cclxuXHRcdHsgICAgXHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRcdFtidG4tc2lnbnVwXVxyXG5cdFx0ICAge1xyXG5cdFx0XHQgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdFx0bWluLWhlaWdodDogNTRweDtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IHNrZXcoMThkZWcpO1xyXG5cdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRzcGFuXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdCB0cmFuc2Zvcm06IHNrZXcoLTE4ZGVnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdGlvbi1pdGVtXHJcblx0XHQgICAge1xyXG5cdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMThweDtcclxuXHRcdFx0XHQtLW1pbi1oZWlnaHQ6IDU1cHg7XHJcblx0XHRcdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JleSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aW9uLWxhYmVsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdCBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0IHdoaXRlLXNwYWNlOiBpbml0aWFsO1xyXG5cdFx0XHRcdGltZ1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0XHRcdFx0bWluLXdpZHRoOiAyMHB4O1xyXG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY29udGFpbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlvbi1pbnB1dFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHQgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICM0MzQ0NGY7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdFx0IC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdCAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuICB9XHJcbn1cclxuXHJcblxyXG59XHJcbi5lcnJvcntcclxuXHRjb2xvcjpyZWQ7XHJcblx0Zm9udC1zaXplOjEzcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 21355:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--ion-header>\n  <ion-toolbar>\n    <ion-title>signup</ion-title>\n  </ion-toolbar>\n</ion-header-->\n<ion-content>\n<div loginmain>\n  <div loginimg>\n    <div logo  class=\"ion-text-center\">\n         <img src=\"assets/img/logo.png\"/>\n      </div>\n  </div>\n  <div loginform class=\"ion-padding\">\n    <div heading>\n\t   <h2>Welcome Back</h2>\n\t   <p>Signup To Your Account</p>\n\t</div>\n\t<form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t   <div form-group>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t<img src=\"assets/img/icon3.png\"/>\n\t\t\t</ion-label>\n\t\t\t<ion-input type=\"text\" formControlName=\"name\" placeholder=\"Name\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.name.errors?.required\">\n\t\t\t\t<ion-label no-margin stacked>Name is required.</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.name.errors?.minlength\">\n\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.name.errors?.pattern\">\n\t\t\t\t<ion-label no-margin stacked>Only alphabets allowed.</ion-label>\n\t\t\t</ion-item>\n\t\t</div>\n\t\t<div form-group>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t<img src=\"assets/img/icon1.png\"/>\n\t\t\t</ion-label>\n\t\t\t<ion-input type=\"email\" formControlName=\"email\"  placeholder=\"Email Address\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.email.errors?.required\">\n\t\t\t\t<ion-label no-margin stacked>Email is required.</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.email.errors?.pattern\">\n\t\t\t\t<ion-label no-margin stacked>Enter valid email.</ion-label>\n\t\t\t</ion-item>\n\t\t</div>\n\t\t<div form-group>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t<img src=\"assets/img/icon4.png\"/>\n\t\t\t</ion-label>\n\t\t\t<ion-input type=\"text\" maxlength=\"10\" formControlName=\"phoneNo\"   placeholder=\"Phone Number\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.phoneNo.errors?.required\">\n\t\t\t\t<ion-label no-margin stacked>Phone number is required.</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.phoneNo.errors?.pattern\">\n\t\t\t\t<ion-label no-margin stacked>Number values allowed.</ion-label>\n\t\t\t</ion-item>\n\t\t</div>\n\t\t<div form-group>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t<img src=\"assets/img/icon5.png\"/>\n\t\t\t</ion-label>\n\t\t\t<ion-input type=\"text\" formControlName=\"apartmentComplex\"  placeholder=\"Apartment Complex\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.apartmentComplex.errors?.required\">\n\t\t\t\t<ion-label no-margin stacked>Apartment Complex is required.</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.apartmentComplex.errors?.minlength\">\n\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t</ion-item>\n\t\t</div>\n\t\t<div form-group>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t<img src=\"assets/img/icon6.png\"/>\n\t\t\t</ion-label>\n\t\t\t<ion-input type=\"text\"  formControlName=\"buildingNo\" placeholder=\"Building Number\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.buildingNo.errors?.required\">\n\t\t\t\t<ion-label no-margin stacked>Building Number is required.</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.buildingNo.errors?.minlength\">\n\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t</ion-item>\n\t\t</div>\n\t\t<div form-group>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t<img src=\"assets/img/icon7.png\"/>\n\t\t\t</ion-label>\n\t\t\t<ion-input type=\"text\" formControlName=\"apartmentNo\" placeholder=\"Apartment Number\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<ion-item class='form-text error'*ngIf=\"submitAttempt && errorCtr.apartmentNo.errors?.required\">\n\t\t\t\t<ion-label no-margin stacked>Apartment Number is required.</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item class='form-text error' *ngIf=\"submitAttempt && errorCtr.apartmentNo.errors?.minlength\">\n\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t</ion-item>\n\n\t\t</div>\n\t\t<div form-group>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label>\n\t\t\t\t<img src=\"assets/img/icon2.png\"/>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-input  [type]=\"passwordType\"   formControlName=\"password\" placeholder=\"Password\"></ion-input>\n\t\t\t\t<ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n\t\t\t</ion-item>\t\n\t\t\t<ion-item class='form-text error'*ngIf=\"submitAttempt && errorCtr.password.errors?.required\">\n\t\t\t\t<ion-label no-margin stacked>Password is required.</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item class='form-text error' *ngIf=\"submitAttempt && errorCtr.password.errors?.pattern\" >\n\t\t\t\t<ion-label no-margin stacked wrap-text>Password must be between 6 and 12 characters with at least one capital letter, one small letter, and one digit.</ion-label>\n\t\t\t </ion-item>\n\t\t\t\n\t\t</div>\n\t\t<div form-group>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t<img src=\"assets/img/icon2.png\"/>\n\t\t\t</ion-label>\n\t\t\t<ion-input [type]=\"confirmPasswordType\" formControlName=\"confirmPassword\" placeholder=\"Confirm Password\"></ion-input>\n\t\t\t<ion-icon item-end [name]=\"confirmPasswordIcon\" class=\"passwordIcon\" (click)='hideShowConfirmPassword()'></ion-icon>\t\n\t\t</ion-item>\n\n\t\t\t<ion-item class='form-text error'*ngIf=\"submitAttempt && errorCtr.confirmPassword.errors?.required\">\n\t\t\t\t<ion-label no-margin stacked>Confirm Password is required.</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item class='form-text error' *ngIf=\"submitAttempt && !errorCtr.confirmPassword.errors?.required && signUpForm.hasError('mismatchedPasswords') \">\n\t\t\t\t<ion-label no-margin stacked>Passwords do not match</ion-label>\n\t\t\t</ion-item>\n\t\t</div>\n\t\t<div form-group>\n\t\t\t<ion-button btn-signup  type=\"submit\" expand=\"full\" color=\"primary\">\n\t\t\t\t\t<span>Signup</span>\n\t\t\t</ion-button>\n\t\t\t<div btn-login class=\"ion-text-center\">\n\t\t\t<p>Already have an account? <a href=\"javascript:void(0)\" routerLink=\"/login\">Login</a></p>\n\n\t\t\t</div>\n  \t\t</div>\n\t</form>\n</div>\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map