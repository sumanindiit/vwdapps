(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_resetpassword_resetpassword_module_ts"],{

/***/ 80552:
/*!***************************************************************!*\
  !*** ./src/app/resetpassword/resetpassword-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpasswordPageRoutingModule": () => (/* binding */ ResetpasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetpassword.page */ 80071);




const routes = [
    {
        path: '',
        component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_0__.ResetpasswordPage
    }
];
let ResetpasswordPageRoutingModule = class ResetpasswordPageRoutingModule {
};
ResetpasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetpasswordPageRoutingModule);



/***/ }),

/***/ 81869:
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpasswordPageModule": () => (/* binding */ ResetpasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetpassword-routing.module */ 80552);
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetpassword.page */ 80071);







let ResetpasswordPageModule = class ResetpasswordPageModule {
};
ResetpasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetpasswordPageRoutingModule
        ],
        declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_1__.ResetpasswordPage]
    })
], ResetpasswordPageModule);



/***/ }),

/***/ 80071:
/*!*****************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpasswordPage": () => (/* binding */ ResetpasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_resetpassword_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./resetpassword.page.html */ 70818);
/* harmony import */ var _resetpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetpassword.page.scss */ 47877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ResetpasswordPage = class ResetpasswordPage {
    constructor() { }
    ngOnInit() {
    }
};
ResetpasswordPage.ctorParameters = () => [];
ResetpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-resetpassword',
        template: _raw_loader_resetpassword_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_resetpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResetpasswordPage);



/***/ }),

/***/ 47877:
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background:var(--ion-color-white);\n}\nion-content [loginmain] [loginimg] {\n  background: url('bg1.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 220px;\n  width: 100%;\n  -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 77%, 0 100%);\n  clip-path: polygon(0% 0%, 100% 0, 100% 77%, 0 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\nion-content [loginmain] [loginimg]:after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  background: rgba(0, 0, 0, 0.6);\n}\nion-content [loginmain] [loginimg] [logo] {\n  position: relative;\n  z-index: 2;\n}\nion-content [loginmain] [loginimg] [logo] img {\n  height: 90px;\n}\nion-content [loginmain] [loginform] [heading] {\n  text-align: center;\n  margin: 10px 0px 34px;\n}\nion-content [loginmain] [loginform] [heading] h2 {\n  font-size: 20px;\n  font-family: var(--ion-headfamily);\n  margin: 0px 0px 10px;\n}\nion-content [loginmain] [loginform] [heading] p {\n  font-weight: 500;\n  color: #9d9d9d;\n  font-size: 14px;\n  margin: 0px auto;\n  line-height: 21px;\n  max-width: 280px;\n}\nion-content [loginmain] [loginform] [btn-forgot] {\n  margin-top: 35px;\n  font-weight: 500;\n}\nion-content [loginmain] [loginform] [btn-forgot] p {\n  font-size: 13px;\n  color: var(--ion-color-black);\n  margin: 0px;\n  font-weight: 500;\n}\nion-content [loginmain] [loginform] [btn-forgot] p a {\n  color: var(--ion-color-secondary);\n  font-weight: 700;\n  text-decoration: underline;\n}\nion-content [loginmain] [loginform] [form-group] {\n  margin-bottom: 20px;\n}\nion-content [loginmain] [loginform] [form-group] [btn-reset] {\n  --box-shadow: none;\n  min-height: 54px;\n  color: var(--ion-color-white);\n  font-size: 14px;\n  font-weight: 600;\n  transform: skew(18deg);\n  width: calc(100% - 20px);\n  margin: 40px auto 0;\n}\nion-content [loginmain] [loginform] [form-group] [btn-reset] span {\n  transform: skew(-18deg);\n}\nion-content [loginmain] [loginform] [form-group] ion-item {\n  --padding-start: 18px;\n  --min-height: 55px;\n  --background: var(--ion-color-grey);\n}\nion-content [loginmain] [loginform] [form-group] ion-item ion-label {\n  align-items: center;\n  display: flex;\n}\nion-content [loginmain] [loginform] [form-group] ion-item ion-label img {\n  height: 20px;\n  width: 20px;\n  min-width: 20px;\n  object-fit: contain;\n}\nion-content [loginmain] [loginform] [form-group] ion-item ion-input {\n  font-size: 14px;\n  color: #43444f;\n  font-weight: 600;\n  --placeholder-font-weight: 500;\n  --placeholder-opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsbUNBQUE7QUFBQTtBQUdFO0VBRUUsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDSCxhQUFBO0VBQ0EsV0FBQTtFQUNBLDJEQUFBO0VBQ0EsbURBQUE7RUFDQSxhQUFBO0VBQ0csbUJBQUE7RUFDQSx1QkFBQTtFQUNILGtCQUFBO0FBRkQ7QUFHQztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUZIO0FBSUM7RUFDSSxrQkFBQTtFQUNHLFVBQUE7QUFGUjtBQUdLO0VBRUQsWUFBQTtBQUZKO0FBUUk7RUFDRixrQkFBQTtFQUNBLHFCQUFBO0FBTkY7QUFPRztFQUVFLGVBQUE7RUFDSCxrQ0FBQTtFQUNBLG9CQUFBO0FBTkY7QUFRRztFQUVFLGdCQUFBO0VBQ0gsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFQRjtBQVVDO0VBQ0ksZ0JBQUE7RUFDRixnQkFBQTtBQVJIO0FBU0c7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDSCxXQUFBO0VBQ0EsZ0JBQUE7QUFQSjtBQVFJO0VBRUksaUNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBUFI7QUFXQztFQUVFLG1CQUFBO0FBVkg7QUFXRztFQUVHLGtCQUFBO0VBQ0YsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQVZKO0FBV0k7RUFFQyx1QkFBQTtBQVZMO0FBYUU7RUFFRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7QUFaSjtBQWFJO0VBRUMsbUJBQUE7RUFDWSxhQUFBO0FBWmpCO0FBYUk7RUFFQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVpMO0FBZUk7RUFFSSxlQUFBO0VBQ0gsY0FBQTtFQUNBLGdCQUFBO0VBQ0MsOEJBQUE7RUFDQSx3QkFBQTtBQWROIiwiZmlsZSI6InJlc2V0cGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnRcclxue1xyXG4tLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuW2xvZ2lubWFpbl1cclxue1xyXG4gIFtsb2dpbmltZ11cclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1nL2JnMS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcblx0aGVpZ2h0OjIyMHB4O1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0LXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCwgMTAwJSA3NyUsIDAgMTAwJSk7XHJcblx0Y2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAsIDEwMCUgNzclLCAwIDEwMCUpO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0JjphZnRlclxyXG5cdHtcclxuXHQgIGNvbnRlbnQ6Jyc7XHJcblx0ICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHQgIHRvcDowcHg7XHJcblx0ICBsZWZ0OjBweDtcclxuXHQgIHJpZ2h0OjBweDtcclxuXHQgIGJvdHRvbTowcHg7XHJcblx0ICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC42MCk7XHJcblx0fVxyXG5cdFtsb2dvXVxyXG5cdHsgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuXHQgICAgaW1nXHJcblx0XHR7XHJcblx0XHQgIGhlaWdodDo5MHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuICB9XHJcbiAgW2xvZ2luZm9ybV1cclxuICB7XHJcbiAgICBbaGVhZGluZ11cclxuXHR7dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCBtYXJnaW46IDEwcHggIDBweCAzNHB4O1xyXG5cdCAgaDJcclxuXHQgIHtcclxuXHQgICAgZm9udC1zaXplOjIwcHg7XHJcblx0XHRmb250LWZhbWlseTp2YXIoLS1pb24taGVhZGZhbWlseSk7XHJcblx0XHRtYXJnaW46MHB4IDBweCAxMHB4O1xyXG5cdCAgfVxyXG5cdCAgcFxyXG5cdCAge1xyXG5cdCAgICBmb250LXdlaWdodDogNTAwO1xyXG5cdFx0Y29sb3I6ICM5ZDlkOWQ7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRtYXJnaW46IDBweCBhdXRvO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIxcHg7XHJcblx0XHRtYXgtd2lkdGg6IDI4MHB4O1xyXG5cdCAgfVxyXG5cdH1cclxuXHRbYnRuLWZvcmdvdF1cclxuXHRcdHsgIG1hcmdpbi10b3A6IDM1cHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdHBcclxuXHRcdFx0eyAgIGZvbnQtc2l6ZToxM3B4O1xyXG5cdFx0XHQgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRhXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdCAgICBjb2xvcjp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuXHRcdFx0XHQgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHQgICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRbZm9ybS1ncm91cF1cclxuXHRcdHsgICAgXHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRcdFtidG4tcmVzZXRdXHJcblx0XHQgICB7XHJcblx0XHRcdCAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0XHRtaW4taGVpZ2h0OiA1NHB4O1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogc2tldygxOGRlZyk7XHJcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG5cdFx0XHRcdG1hcmdpbjo0MHB4ICBhdXRvICAwO1xyXG5cdFx0XHRcdHNwYW5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0IHRyYW5zZm9ybTogc2tldygtMThkZWcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0aW9uLWl0ZW1cclxuXHRcdCAgICB7XHJcblx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xyXG5cdFx0XHRcdC0tbWluLWhlaWdodDogNTVweDtcclxuXHRcdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuXHRcdFx0XHRpb24tbGFiZWxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRpbWdcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHR3aWR0aDogMjBweDtcclxuXHRcdFx0XHRcdG1pbi13aWR0aDogMjBweDtcclxuXHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvbnRhaW47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24taW5wdXRcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0ICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjNDM0NDRmO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdCAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHQgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVx0XHJcblx0XHR9XHJcbiAgfVxyXG59XHJcbn0iXX0= */");

/***/ }),

/***/ 70818:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/resetpassword.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--ion-header>\n  <ion-toolbar>\n    <ion-title>resetpassword</ion-title>\n  </ion-toolbar>\n</ion-header-->\n<ion-content>\n<div loginmain>\n  <div loginimg>\n    <div logo  class=\"ion-text-center\">\n         <img src=\"assets/img/logo.png\"/>\n      </div>\n  </div>\n  <div loginform class=\"ion-padding\">\n    <div heading>\n\t   <h2>Reset Password</h2>\n\t   <p>Please fill the details below to reset your password</p>\n\t</div>\n\t   <div form-group>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t<img src=\"assets/img/icon2.png\"/>\n\t\t\t</ion-label>\n\t\t\t<ion-input type=\"password\"  placeholder=\"New Password\"></ion-input>\n\t\t\t</ion-item>\n\t\t</div>\n\t\t<div form-group>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t<img src=\"assets/img/icon2.png\"/>\n\t\t\t</ion-label>\n\t\t\t<ion-input type=\"password\"  placeholder=\"Confirm Password\"></ion-input>\n\t\t\t</ion-item>\n\t\t</div>\n\t\t<div form-group>\n\t     <ion-button btn-reset expand=\"full\" color=\"primary\">\n\t\t\t\t<span>Reset Password</span>\n\t\t</ion-button>\n\t\t</div>\n\t\t<div btn-forgot class=\"ion-text-center\">\n\t\t<p>Back To <a href=\"javascript:void(0)\" routerLink=\"/forgotpassword\">Forgot</a></p>\n\t\t</div>\n  </div>\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_resetpassword_resetpassword_module_ts.js.map