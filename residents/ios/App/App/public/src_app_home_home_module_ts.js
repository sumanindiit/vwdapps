(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 62267);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 49764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 45146);
/* harmony import */ var _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/globalFooService.service */ 48914);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);









let HomePage = class HomePage {
    constructor(formBuilder, globalFooService, common, api, router) {
        this.formBuilder = formBuilder;
        this.globalFooService = globalFooService;
        this.common = common;
        this.api = api;
        this.router = router;
        this.customAlertOptions = {
            header: ' Select Reason',
            translucent: true
        };
        this.submitAttempt = false;
        this.userId = localStorage.getItem('vwd_userid');
        this.valletId = localStorage.getItem('vwd_valletid');
        this.reasonValue = 'reason1';
    }
    ngOnInit() {
        this.notificationForm = this.formBuilder.group({
            selectReason: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            valletId: [this.valletId, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
        });
    }
    get errorCtr() {
        return this.notificationForm.controls;
    }
    onSubmit() {
        this.submitAttempt = true;
        if (!this.notificationForm.valid) {
            return false;
        }
        else {
            this.common.presentLoading();
            const dict = this.notificationForm.value;
            const formData = new FormData();
            formData.append('message', this.notificationForm.value.selectReason);
            formData.append('toId', this.valletId);
            formData.append('userId', this.userId);
            formData.append('type', '1');
            this.api.post('saveNotifications', formData, '')
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
                    this.common.presentToast('Sent Successfully!.', 'success');
                    this.notificationForm["controls"]["selectReason"].reset();
                    //this.notificationForm.value.selectReason =  '';
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFooService },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



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

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header:after {\n  display: none;\n}\nion-header ion-toolbar {\n  --border-width:0px;\n  --background:var(--ion-color-primarygradient)!important;\n  --ion-color-base:var(--ion-color-primarygradient)!important;\n}\nion-header ion-toolbar ion-title {\n  font-size: 18px;\n  color: var(--ion-color-white);\n  font-family: var(--ion-headfamily);\n}\nion-header ion-toolbar ion-buttons {\n  font-size: 22px;\n  color: var(--ion-color-white);\n  margin-right: 10px;\n}\nion-content [homemap] img {\n  height: 260px;\n  width: 100%;\n  object-fit: cover;\n}\nion-content [notify] {\n  box-shadow: 0px -6px 10px rgba(0, 0, 0, 0.1);\n  padding: 16px 16px 0px;\n  position: relative;\n  background: var(--ion-color-white);\n}\nion-content [notify] p {\n  margin: 0 0 25px;\n  line-height: 23px;\n  text-align: center;\n  font-size: 14px;\n  color: #000;\n  font-weight: 400;\n}\nion-content [notify] [form-group] {\n  margin-bottom: 25px;\n}\nion-content [notify] [form-group] ion-item {\n  --padding-start: 18px;\n  --min-height: 55px;\n  --background: var(--ion-color-grey);\n}\nion-content [notify] [form-group] ion-item ion-label {\n  margin: 0;\n  min-width: 20px;\n  align-items: center;\n  display: flex;\n}\nion-content [notify] [form-group] ion-item ion-label img {\n  height: 20px;\n  width: 20px;\n  min-width: 20px;\n  object-fit: contain;\n}\nion-content [notify] [form-group] ion-item ion-select {\n  font-size: 14px;\n  color: #43444f;\n  font-weight: 600;\n  --placeholder-font-weight: 500;\n  --placeholder-opacity: 1;\n  max-width: 100%;\n  width: 100%;\n  padding-left: 10px;\n}\nion-content [notify] [btn-notify] {\n  --box-shadow: none;\n  min-height: 54px;\n  color: var(--ion-color-white);\n  font-size: 14px;\n  font-weight: 600;\n  transform: skew(18deg);\n  width: calc(100% - 20px);\n  margin: 0 auto;\n}\nion-content [notify] [btn-notify] span {\n  transform: skew(-18deg);\n}\n.error {\n  color: red;\n  font-size: 13px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBRUEsYUFBQTtBQUZGO0FBSUU7RUFDQyxrQkFBQTtFQUNELHVEQUFBO0VBQ0EsMkRBQUE7QUFGRjtBQUdFO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0gsa0NBQUE7QUFERDtBQUdFO0VBRUUsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQVVJO0VBRUYsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVJGO0FBV0M7RUFFQSw0Q0FBQTtFQUNHLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQVZKO0FBV0M7RUFFSSxnQkFBQTtFQUNILGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBVkY7QUFXRztFQUVBLG1CQUFBO0FBVkg7QUFXRTtFQUVFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQVZKO0FBV0k7RUFDRSxTQUFBO0VBQ0YsZUFBQTtFQUNDLG1CQUFBO0VBQ1ksYUFBQTtBQVRqQjtBQVVJO0VBRUMsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFUTDtBQVlJO0VBRUssZUFBQTtFQUNILGNBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ2tCLFdBQUE7RUFDbEIsa0JBQUE7QUFYTjtBQWVFO0VBRUksa0JBQUE7RUFDRixnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFkSjtBQWVJO0VBRUMsdUJBQUE7QUFkTDtBQW1CQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWhCRCIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJcclxue1xyXG4gICY6YWZ0ZXJcclxuICB7XHJcbiAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICBpb24tdG9vbGJhclxyXG4gIHstLWJvcmRlci13aWR0aDowcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5Z3JhZGllbnQpIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5Z3JhZGllbnQpIWltcG9ydGFudDtcclxuICBpb24tdGl0bGVcclxuICB7IGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1oZWFkZmFtaWx5KTtcclxuICB9XHJcbiAgaW9uLWJ1dHRvbnNcclxuICB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50XHJcbntcclxuXHRbaG9tZW1hcF1cclxuXHR7XHJcblx0ICAgaW1nXHJcblx0ICAge1xyXG5cdFx0aGVpZ2h0OiAyNjBweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0ICAgfVxyXG5cdH1cclxuXHRbbm90aWZ5XVxyXG5cdHtcclxuXHRib3gtc2hhZG93OiAwcHggLTZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMCk7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRwXHJcblx0e1xyXG5cdCAgICBtYXJnaW46IDAgMCAyNXB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIzcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRjb2xvcjogIzAwMDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0fVx0W2Zvcm0tZ3JvdXBdXHJcblx0XHR7ICAgIFxyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cdFx0aW9uLWl0ZW1cclxuXHRcdCAgICB7XHJcblx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xyXG5cdFx0XHRcdC0tbWluLWhlaWdodDogNTVweDtcclxuXHRcdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuXHRcdFx0XHRpb24tbGFiZWxcclxuXHRcdFx0XHR7IG1hcmdpbjogMDsgXHJcblx0XHRcdFx0bWluLXdpZHRoOiAyMHB4O1xyXG5cdFx0XHRcdCBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0aW1nXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRcdFx0XHRtaW4td2lkdGg6IDIwcHg7XHJcblx0XHRcdFx0XHRvYmplY3QtZml0OiBjb250YWluO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW9uLXNlbGVjdFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdCAgICBmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjNDM0NDRmO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdFx0XHQtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHRcdC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OjEwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuXHRcdFtidG4tbm90aWZ5XVxyXG5cdFx0ICAge1xyXG5cdFx0XHQgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdFx0bWluLWhlaWdodDogNTRweDtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IHNrZXcoMThkZWcpO1xyXG5cdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRzcGFuXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdCB0cmFuc2Zvcm06IHNrZXcoLTE4ZGVnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHR9XHJcbn1cclxuLmVycm9ye1xyXG5cdGNvbG9yOnJlZDtcclxuXHRmb250LXNpemU6MTNweDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */");

/***/ }),

/***/ 49764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"md\"> \n  \t<ion-toolbar class=\"primary\">\n    \t<ion-title class=\"ion-text-center\">Home</ion-title>\n\t\t<ion-buttons slot=\"end\" routerLink=\"/tabs/chat\">\n\t  \t\t<ion-icon name=\"chatbubbles-outline\"></ion-icon>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<div homemap>\n\t\t<img src=\"assets/img/map.jpg\"/>\n\t</div>\n\t<div notify>\n\t\t<p>Select the reason for VMD valet from the options below and then just notify  them by pressing the button</p>\n\t\t<form [formGroup]=\"notificationForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t\t\t<div form-group>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<img src=\"assets/img/icon8.png\"/>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-select formControlName=\"selectReason\"  value=\"{{reasonValue}}\" [interfaceOptions]=\"customAlertOptions\" interface=\"action-sheet\"  placeholder=\"Select Reason\">\n\t\t\t\t\t\t<ion-select-option value=\"My Trash Bin Is Now Outside\">My Trash Bin Is Now Outside</ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"VWD Valet Is  Still Onsite\">VWD Valet Is  Still Onsite </ion-select-option>\n\t\t\t\t\t\t<ion-select-option value=\"Not Grab The Valet\">Not Grab The Valet </ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t\t<span class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.selectReason.errors?.required\">\n\t\t\t\t\t<ion-label no-margin stacked>Please select reason.</ion-label>\n\t\t\t\t</span>\n\n\t\t\t\t<ion-input formControlName=\"valletId\" type=\"number\" value=\"{{ valletId }}\" hidden=true;></ion-input>\n\t\t\t\t<span class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.valletId.errors?.required\">\n\t\t\t\t\t<ion-label no-margin stacked>Vallet is not assigned yet.</ion-label>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<ion-button btn-notify  type=\"submit\" expand=\"full\" color=\"primary\">\n\t\t\t\t\t<span>Notify</span>\n\t\t\t</ion-button>\n\t\t</form>\n\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map