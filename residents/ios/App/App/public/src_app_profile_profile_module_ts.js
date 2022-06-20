(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 86829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 72919);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 84523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 86829);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 72919);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 72919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 52907);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 70231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 45146);
/* harmony import */ var _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/globalFooService.service */ 48914);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);









let ProfilePage = class ProfilePage {
    constructor(formBuilder, globalFooService, common, api, router) {
        this.formBuilder = formBuilder;
        this.globalFooService = globalFooService;
        this.common = common;
        this.api = api;
        this.router = router;
        this.submitAttempt = false;
        this.userId = localStorage.getItem('vwd_userid');
        this.submitPasswordAttempt = false;
        this.passwordType = 'password';
        this.confirmPasswordType = 'password';
        this.passwordIcon = 'eye-off';
        this.confirmPasswordIcon = 'eye-off';
        this.segment = "basicinfo";
        this.showToolbar = false;
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f;
        this.userData = JSON.parse(localStorage.getItem('vwd_userData'));
        this.updateProfileForm = this.formBuilder.group({
            name: [(_a = this.userData) === null || _a === void 0 ? void 0 : _a.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
            email: [(_b = this.userData) === null || _b === void 0 ? void 0 : _b.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            phoneNo: [(_c = this.userData) === null || _c === void 0 ? void 0 : _c.phoneNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]+$')]],
            apartmentComplex: [(_d = this.userData) === null || _d === void 0 ? void 0 : _d.apartmentComplex, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]],
            buildingNo: [(_e = this.userData) === null || _e === void 0 ? void 0 : _e.buildingNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]],
            apartmentNo: [(_f = this.userData) === null || _f === void 0 ? void 0 : _f.apartmentNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]]
        });
        this.updatePasswordForm = this.formBuilder.group({
            currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        }, {
            validator: this.matchingPasswords('password', 'confirmPassword')
        });
    }
    get errorCtr() {
        return this.updateProfileForm.controls;
    }
    get errorPasswordCtr() {
        return this.updatePasswordForm.controls;
    }
    onSubmit() {
        this.submitAttempt = true;
        if (!this.updateProfileForm.valid) {
            this.common.presentToast('Please fill all required fields.', 'danger');
            return false;
        }
        else {
            this.common.presentLoading();
            let dict = this.updateProfileForm.value;
            dict['userId'] = this.userId;
            this.api.post('updateProfile', dict, '')
                .subscribe((result) => {
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
                    localStorage.setItem('vwd_userData', JSON.stringify(res.data));
                    this.common.presentToast('Profile Updated Successfully!.', 'success');
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
    matchingPasswords(passwordKey, confirmPasswordKey) {
        return (updatePasswordForm) => {
            let password = updatePasswordForm.controls[passwordKey];
            let confirmPassword = updatePasswordForm.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    }
    onPasswordSubmit() {
        this.submitPasswordAttempt = true;
        if (!this.updatePasswordForm.valid) {
            this.common.presentToast('Please fill all required fields.', 'danger');
            return false;
        }
        else {
            this.common.presentLoading();
            let dict = this.updatePasswordForm.value;
            dict['userId'] = this.userId;
            this.api.post('updatePassword', dict, '')
                .subscribe((result) => {
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
                    localStorage.clear();
                    this.router.navigate(['/login']);
                    this.common.presentToast('Password Updated Successfully!. Please Log in.', 'success');
                }
            }, (error) => {
                console.log(error);
            });
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
    segmentChanged(ev) {
        this.segment = ev.detail.value;
    }
    onScroll($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 100;
        }
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFooService },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



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

/***/ 70231:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  position: absolute;\n}\nion-header:after {\n  display: none;\n}\nion-header ion-toolbar {\n  --border-width: 0px;\n  --background: transparent!important;\n  --ion-color-base: transparent!important;\n}\nion-header ion-toolbar ion-title {\n  font-size: 18px;\n  color: var(--ion-color-white);\n  font-family: var(--ion-headfamily);\n}\nion-header ion-toolbar ion-back-button {\n  --icon-font-size: 20px;\n  color: var(--ion-color-white);\n}\nion-header.show-background ion-toolbar {\n  --background:var(--ion-color-primarygradient)!important;\n  --ion-color-base:var(--ion-color-primarygradient)!important;\n}\nion-content [profileimg] {\n  background: url('bg1.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 220px;\n  width: 100%;\n  -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 77%, 0 100%);\n  clip-path: polygon(0% 0%, 100% 0, 100% 77%, 0 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\nion-content [profileimg]:after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  background: rgba(0, 0, 0, 0.6);\n}\nion-content [profileinfo] {\n  padding: 0px 16px 16px;\n}\nion-content [profileinfo] [userinfo] {\n  text-align: center;\n  margin-bottom: 20px;\n}\nion-content [profileinfo] [userinfo] ion-avatar {\n  width: 109px;\n  height: 109px;\n  border: 1px solid var(--ion-color-white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);\n  margin-top: -70px;\n  position: relative;\n}\nion-content [profileinfo] [userinfo] ion-avatar span {\n  width: 96px;\n  height: 96px;\n  background: var(--ion-color-white);\n  font-size: 29px;\n  font-weight: 600;\n  color: var(--ion-color-black);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\nion-content [profileinfo] [userinfo] h2 {\n  color: var(--ion-color-black);\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 5px;\n}\nion-content [profileinfo] ion-segment {\n  margin-bottom: 20px;\n  padding: 7px;\n  background: var(--ion-color-white);\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n}\nion-content [profileinfo] ion-segment ion-segment-button {\n  min-height: 45px;\n  height: 45px;\n  --indicator-height: 0px;\n  --indicator-color: transparent;\n  --indicator-color-checked: transparent;\n  color: var(--ion-color-black);\n  --color-checked: var(--ion-color-black);\n  --color: var(--ion-color-black);\n  text-transform: capitalize;\n  font-size: 14px;\n  font-weight: 500;\n  --background: var(--ion-color-white);\n  --background-hover: var(--ion-color-white);\n}\nion-content [profileinfo] ion-segment ion-segment-button.segment-button-checked {\n  color: var(--ion-color-white);\n  --color-checked: var(--ion-color-white);\n  --color: var(--ion-color-white);\n  --background-hover: transparent;\n  --background: var(--ion-color-secondary);\n  background: var(--ion-color-secondary);\n  font-size: 14px;\n  font-weight: 500;\n}\nion-content [profileinfo] ion-list {\n  margin: 0;\n  padding: 0;\n  background: transparent;\n}\nion-content [profileinfo] ion-list [btn-submit] {\n  --box-shadow: none;\n  min-height: 54px;\n  color: var(--ion-color-white);\n  font-size: 14px;\n  font-weight: 600;\n  transform: skew(18deg);\n  width: calc(100% - 20px);\n  margin: 0 auto;\n}\nion-content [profileinfo] ion-list [btn-submit] span {\n  transform: skew(-18deg);\n}\nion-content [profileinfo] ion-list [form-group] {\n  margin-bottom: 20px;\n}\nion-content [profileinfo] ion-list [form-group] ion-item {\n  --padding-start: 18px;\n  --min-height: 55px;\n  --background: var(--ion-color-grey);\n}\nion-content [profileinfo] ion-list [form-group] ion-item ion-label {\n  align-items: center;\n  display: flex;\n}\nion-content [profileinfo] ion-list [form-group] ion-item ion-label img {\n  height: 20px;\n  width: 20px;\n  min-width: 20px;\n  object-fit: contain;\n}\nion-content [profileinfo] ion-list [form-group] ion-item ion-input {\n  font-size: 14px;\n  color: #43444f;\n  font-weight: 600;\n  --placeholder-font-weight: 500;\n  --placeholder-opacity: 1;\n}\n.error {\n  color: red;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csa0JBQUE7QUFDSDtBQUFDO0VBQ0MsYUFBQTtBQUVGO0FBQUM7RUFDQyxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7QUFFRjtBQURFO0VBQ0MsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7QUFHSDtBQURHO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUdIO0FBRUU7RUFFRSx1REFBQTtFQUNELDJEQUFBO0FBREg7QUFPQTtFQUVJLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0gsYUFBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUNBLG1EQUFBO0VBQ0EsYUFBQTtFQUNHLG1CQUFBO0VBQ0EsdUJBQUE7RUFDSCxrQkFBQTtBQUxEO0FBTUM7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFMSDtBQVFFO0VBQ0Msc0JBQUE7QUFOSDtBQU9JO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUxKO0FBTUk7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSko7QUFLSTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFITDtBQU9JO0VBQ0MsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUxMO0FBU0c7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDJDQUFBO0FBUEg7QUFRRztFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDWSwwQ0FBQTtBQU5oQjtBQU9JO0VBQ0MsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTEw7QUFTRTtFQUVBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFSRjtBQVNFO0VBRUksa0JBQUE7RUFDRixnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFSSjtBQVNJO0VBRUMsdUJBQUE7QUFSTDtBQVdFO0VBRUMsbUJBQUE7QUFWSDtBQVlFO0VBRUUscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0FBWEo7QUFZSTtFQUVDLG1CQUFBO0VBQ1ksYUFBQTtBQVhqQjtBQVlJO0VBRUMsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFYTDtBQWNJO0VBRUksZUFBQTtFQUNILGNBQUE7RUFDQSxnQkFBQTtFQUNDLDhCQUFBO0VBQ0Esd0JBQUE7QUFiTjtBQXFCQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FBbEJEIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0aW9uLXRvb2xiYXIge1xyXG5cdFx0LS1ib3JkZXItd2lkdGg6IDBweDtcclxuXHRcdC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG5cdFx0LS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG5cdFx0aW9uLXRpdGxlIHtcclxuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1oZWFkZmFtaWx5KTtcclxuXHRcdH1cclxuXHRcdFx0aW9uLWJhY2stYnV0dG9uIHtcclxuXHRcdFx0LS1pY29uLWZvbnQtc2l6ZTogMjBweDtcclxuXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG4gICYuc2hvdy1iYWNrZ3JvdW5kXHJcbiAge1xyXG5cdFx0aW9uLXRvb2xiYXJcclxuXHRcdHtcclxuXHQgICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnlncmFkaWVudCkhaW1wb3J0YW50O1xyXG5cdCAgLS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItcHJpbWFyeWdyYWRpZW50KSFpbXBvcnRhbnQ7XHJcblx0ICB9XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50XHJcbntcclxuW3Byb2ZpbGVpbWddXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltZy9iZzEuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG5cdGhlaWdodDoyMjBweDtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAsIDEwMCUgNzclLCAwIDEwMCUpO1xyXG5cdGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTAwJSAwLCAxMDAlIDc3JSwgMCAxMDAlKTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdCY6YWZ0ZXJcclxuXHR7XHJcblx0ICBjb250ZW50OicnO1xyXG5cdCAgcG9zaXRpb246YWJzb2x1dGU7XHJcblx0ICB0b3A6MHB4O1xyXG5cdCAgbGVmdDowcHg7XHJcblx0ICByaWdodDowcHg7XHJcblx0ICBib3R0b206MHB4O1xyXG5cdCAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNjApO1xyXG5cdH1cclxuICB9XHJcbiAgW3Byb2ZpbGVpbmZvXVxyXG4gIHtwYWRkaW5nOiAwcHggMTZweCAxNnB4O1xyXG4gICAgW3VzZXJpbmZvXVxyXG5cdHsgIHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdCAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0ICAgaW9uLWF2YXRhciB7XHJcblx0XHRcdFx0d2lkdGg6IDEwOXB4O1xyXG5cdFx0XHRcdGhlaWdodDogMTA5cHg7XHJcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjA3KTtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAtNzBweDtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHR3aWR0aDogOTZweDtcclxuXHRcdFx0XHRcdGhlaWdodDogOTZweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDI5cHg7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcclxuXHR9XHJcbiAgXHRpb24tc2VnbWVudCB7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRcdHBhZGRpbmc6IDdweDtcclxuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMCk7XHJcblx0XHRcdGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcblx0XHRcdFx0bWluLWhlaWdodDogNDVweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHRcdFx0LS1pbmRpY2F0b3ItaGVpZ2h0OiAwcHg7XHJcblx0XHRcdFx0LS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spO1xyXG5cdFx0XHRcdC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcclxuXHRcdFx0XHQtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spO1xyXG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHQmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHQtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0LS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpb24tbGlzdFxyXG5cdFx0e1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0W2J0bi1zdWJtaXRdXHJcblx0XHQgICB7XHJcblx0XHRcdCAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0XHRtaW4taGVpZ2h0OiA1NHB4O1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogc2tldygxOGRlZyk7XHJcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdHNwYW5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0IHRyYW5zZm9ybTogc2tldygtMThkZWcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0W2Zvcm0tZ3JvdXBdXHJcblx0XHR7ICAgIFxyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0XHRcclxuXHRcdGlvbi1pdGVtXHJcblx0XHQgICAge1xyXG5cdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMThweDtcclxuXHRcdFx0XHQtLW1pbi1oZWlnaHQ6IDU1cHg7XHJcblx0XHRcdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JleSk7XHJcblx0XHRcdFx0aW9uLWxhYmVsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdCBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0aW1nXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRcdFx0XHRtaW4td2lkdGg6IDIwcHg7XHJcblx0XHRcdFx0XHRvYmplY3QtZml0OiBjb250YWluO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW9uLWlucHV0XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdCAgICBmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHRjb2xvcjogIzQzNDQ0ZjtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHQgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0IC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR9XHJcbiAgfVxyXG59XHJcbi5lcnJvcntcclxuXHRjb2xvcjpyZWQ7XHJcblx0Zm9udC1zaXplOjEzcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 52907:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"md\"  [class.show-background]=\"showToolbar\">\n  \t<ion-toolbar color=\"primary\">\n  \t\t<ion-back-button slot=\"start\" defaultHref=\"/tabs/settings\"  text=\"\" icon=\"chevron-back-outline\">\n  \t\t</ion-back-button>\n    \t<ion-title class=\"ion-text-center\">Profile</ion-title>\n  \t</ion-toolbar>\n</ion-header>\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n  \t<div profileimg></div>\n\t<div profileinfo>\n\t\t<div userinfo>\n\t\t\t<ion-avatar>\n\t\t\t\t<span>{{ userData?.name.charAt(0) }}</span>\n\t\t\t</ion-avatar>\n\t\t\t<h2>{{ userData?.name }}</h2>\n\t\t</div>\n\t\t<ion-segment mode=\"md\"   (ionChange)=\"segmentChanged($event)\" value=\"basicinfo\">\n\t\t\t<ion-segment-button value=\"basicinfo\">\n\t\t\t\t<ion-label>Basic Info</ion-label>\n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"changepassword\">\n\t\t\t\t<ion-label>Change Password</ion-label>\n\t\t\t</ion-segment-button>\n\t\t</ion-segment>\n\t\t<ion-list *ngIf=\"segment === 'basicinfo'\">\n\t\t\t<form [formGroup]=\"updateProfileForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t\t\t<div form-group>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t<img src=\"assets/img/icon3.png\"/>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-input type=\"text\" formControlName=\"name\"  placeholder=\"Name\" ></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.name.errors?.required\">\n\t\t\t\t\t<ion-label no-margin stacked>Name is required.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.name.errors?.minlength\">\n\t\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.name.errors?.pattern\">\n\t\t\t\t\t<ion-label no-margin stacked>Only alphabets allowed.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</div>\n\t\t\t<div form-group>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t<img src=\"assets/img/icon1.png\"/>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-input type=\"email\"   formControlName=\"email\"  placeholder=\"Email Address\" ></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.email.errors?.required\">\n\t\t\t\t\t<ion-label no-margin stacked>Email is required.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.email.errors?.pattern\">\n\t\t\t\t\t<ion-label no-margin stacked>Enter valid email.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</div>\n\t\t\t<div form-group>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t<img src=\"assets/img/icon4.png\"/>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-input type=\"text\" maxlength=\"10\" formControlName=\"phoneNo\"   placeholder=\"Phone Number\" ></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.phoneNo.errors?.required\">\n\t\t\t\t\t<ion-label no-margin stacked>Phone number is required.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.phoneNo.errors?.pattern\">\n\t\t\t\t\t<ion-label no-margin stacked>Number values allowed.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</div>\n\t\t\t<div form-group>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t<img src=\"assets/img/icon5.png\"/>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-input type=\"text\" formControlName=\"apartmentComplex\"  placeholder=\"Apartment Complex\" ></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.apartmentComplex.errors?.required\">\n\t\t\t\t\t<ion-label no-margin stacked>Apartment Complex is required.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.apartmentComplex.errors?.minlength\">\n\t\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</div>\n\t\t\t<div form-group>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t<img src=\"assets/img/icon6.png\"/>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-input type=\"text\" formControlName=\"buildingNo\"  placeholder=\"Building Number\" ></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.buildingNo.errors?.required\">\n\t\t\t\t\t<ion-label no-margin stacked>Building Number is required.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.buildingNo.errors?.minlength\">\n\t\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</div>\n\t\t\t<div form-group>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t<img src=\"assets/img/icon7.png\"/>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-input type=\"text\" formControlName=\"apartmentNo\"  placeholder=\"Apartment Number\" ></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class='form-text error'*ngIf=\"submitAttempt && errorCtr.apartmentNo.errors?.required\">\n\t\t\t\t\t<ion-label no-margin stacked>Apartment Number is required.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class='form-text error' *ngIf=\"submitAttempt && errorCtr.apartmentNo.errors?.minlength\">\n\t\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t\t</ion-item>\n\n\t\t\t</div>\n\t\t\t<ion-button btn-submit type=\"submit\"   expand=\"full\" color=\"primary\">\n\t\t\t\t<span>Submit</span>\n\t\t\t</ion-button>\n\t\t\t</form>\n\t\t</ion-list>\n\n\t\t<ion-list *ngIf=\"segment === 'changepassword'\">\n\t\t\t<form [formGroup]=\"updatePasswordForm\" (ngSubmit)=\"onPasswordSubmit()\" novalidate>\n\t\t\t\t<div form-group>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<img src=\"assets/img/icon2.png\"/>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t<ion-input type=\"password\" formControlName=\"currentPassword\"  placeholder=\"Current Password\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitPasswordAttempt && errorPasswordCtr.currentPassword.errors?.required\">\n\t\t\t\t\t\t<ion-label no-margin stacked>Current Password is required.</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</div>\n\t\t\t\t<div form-group>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<img src=\"assets/img/icon2.png\"/>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t<ion-input  [type]=\"passwordType\"   formControlName=\"password\" placeholder=\"Password\"></ion-input>\n\t\t\t\t\t\t<ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n\t\t\t\t\t</ion-item>\t\n\t\t\t\t\t<ion-item class='form-text error'*ngIf=\"submitPasswordAttempt && errorPasswordCtr.password.errors?.required\">\n\t\t\t\t\t\t<ion-label no-margin stacked>Password is required.</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class='form-text error' *ngIf=\"submitPasswordAttempt && errorPasswordCtr.password.errors?.pattern\" >\n\t\t\t\t\t\t<ion-label no-margin stacked wrap-text>Password must be between 6 and 12 characters with at least one capital letter, one small letter, and one digit.</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div form-group>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t<img src=\"assets/img/icon2.png\"/>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-input [type]=\"confirmPasswordType\" formControlName=\"confirmPassword\" placeholder=\"Confirm Password\"></ion-input>\n\t\t\t\t\t<ion-icon item-end [name]=\"confirmPasswordIcon\" class=\"passwordIcon\" (click)='hideShowConfirmPassword()'></ion-icon>\t\n\t\t\t\t</ion-item>\n\n\t\t\t\t\t<ion-item class='form-text error'*ngIf=\"submitPasswordAttempt && errorPasswordCtr.confirmPassword.errors?.required\">\n\t\t\t\t\t\t<ion-label no-margin stacked>Confirm Password is required.</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class='form-text error' *ngIf=\"submitPasswordAttempt && !errorPasswordCtr.confirmPassword.errors?.required && updatePasswordForm.hasError('mismatchedPasswords') \">\n\t\t\t\t\t\t<ion-label no-margin stacked>Passwords do not match</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</div>\n\t\t\t\t<ion-button btn-submit type=\"submit\"  expand=\"full\" color=\"primary\">\n\t\t\t\t\t\t<span>Submit</span>\n\t\t\t\t</ion-button>\n\t\t\t</form>\n\t\t</ion-list>\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map