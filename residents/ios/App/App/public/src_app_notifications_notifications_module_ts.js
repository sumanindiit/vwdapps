(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_notifications_notifications_module_ts"],{

/***/ 47897:
/*!***************************************************************!*\
  !*** ./src/app/notifications/notifications-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageRoutingModule": () => (/* binding */ NotificationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 4598);




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ 89182:
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageModule": () => (/* binding */ NotificationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-routing.module */ 47897);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page */ 4598);







let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage]
    })
], NotificationsPageModule);



/***/ }),

/***/ 4598:
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notifications.page.html */ 17546);
/* harmony import */ var _notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page.scss */ 51083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 45146);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);








let NotificationsPage = class NotificationsPage {
    constructor(common, api, router, alertController) {
        this.common = common;
        this.api = api;
        this.router = router;
        this.alertController = alertController;
        this.userId = localStorage.getItem('vwd_userid');
        this.is_loaded = false;
    }
    ionViewWillEnter() {
        this.getNotifications();
    }
    ngOnInit() { }
    getNotifications() {
        this.api.post('getNotifications', { userId: this.userId }, '')
            .subscribe((result) => {
            const res = result;
            if (res.status === 422 || res.status === '422') {
                let errMsgs = '';
                for (const x of res.errors) {
                    errMsgs += x + '</br>';
                }
                //this.common.presentToast(errMsgs,'danger');
                this.notifications = [];
                this.is_loaded = true;
            }
            else if (res.status === 200 || res.status === '200') {
                this.notifications = res.data;
                this.is_loaded = false;
                console.log(this.notifications);
            }
        }, (error) => {
            console.log(error);
        });
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-notifications',
        template: _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationsPage);



/***/ }),

/***/ 51083:
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header:after {\n  display: none;\n}\nion-header ion-toolbar {\n  --border-width: 0px;\n  --background: var(--ion-color-primarygradient)!important;\n  --ion-color-base: var(--ion-color-primarygradient)!important;\n}\nion-header ion-toolbar ion-title {\n  font-size: 18px;\n  color: var(--ion-color-white);\n  font-family: var(--ion-headfamily);\n}\nion-content ion-item {\n  --inner-padding-end: 0;\n  --background: var(--ion-color-white);\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  margin-bottom: 20px;\n}\nion-content ion-item ion-label {\n  text-align: right;\n  white-space: normal;\n  margin: 0;\n}\nion-content ion-item ion-label p {\n  max-width: 280px;\n  text-align: left;\n  font-size: 13px;\n  color: var(--ion-color-black);\n  line-height: 21px;\n  margin: 10px 0px 0px;\n}\nion-content ion-item ion-label ion-note {\n  font-size: 11px;\n  color: #777777;\n  font-weight: 600;\n}\nion-content ion-item:last-child {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsYUFBQTtBQUFGO0FBRUM7RUFDQyxtQkFBQTtFQUNBLHdEQUFBO0VBQ0EsNERBQUE7QUFBRjtBQUNFO0VBQ0MsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7QUFDSDtBQUtDO0VBQ0Msc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUZGO0FBR0U7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQURIO0FBRUc7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUFKO0FBRUc7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNDLGtCQUFBO0FBREgiLCJmaWxlIjoibm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuXHQmOmFmdGVyIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdGlvbi10b29sYmFyIHtcclxuXHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5Z3JhZGllbnQpIWltcG9ydGFudDtcclxuXHRcdC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5Z3JhZGllbnQpIWltcG9ydGFudDtcclxuXHRcdGlvbi10aXRsZSB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1pb24taGVhZGZhbWlseSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcblx0aW9uLWl0ZW0ge1xyXG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTApO1xyXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG5cdFx0LS1wYWRkaW5nLWVuZDogMTVweDtcclxuXHRcdC0tcGFkZGluZy10b3A6IDEwcHg7XHJcblx0XHQtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0XHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdHAge1xyXG5cdFx0XHRcdG1heC13aWR0aDogMjgwcHg7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDIxcHg7XHJcblx0XHRcdFx0bWFyZ2luOiAxMHB4IDBweCAwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0aW9uLW5vdGUge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTFweDtcclxuXHRcdFx0XHRjb2xvcjogIzc3Nzc3NztcclxuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59Il19 */");

/***/ }),

/***/ 17546:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"md\">\n\t<ion-toolbar class=\"primary\">\n\t\t<ion-title class=\"ion-text-center\">Notifications</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n\n\t<div *ngIf=\"notifications\" >\n\t\t<ion-item class=\"ion-no-padding\" lines=\"none\" *ngFor =\"let data of notifications\">\n\t\t\t<ion-label>\n\t\t\t\t<p><b>John Doe</b> {{data.content}} .\n\t\t\t\t</p>\n\t\t\t\t<ion-note>2 hrs ago</ion-note>\n\t\t\t</ion-label>\n\t\t</ion-item>\n  \t</div >\n\t\n   <div *ngIf=\"is_loaded === true\" class=\"alert alert-danger\" role=\"alert\" style=\"color: red;font-size: 17px;text-align: center;font-weight: 600;\" >\n\t\tNo notifications found!\n\t</div>\n\n\t<!-- Skeleton screen -->\n  \t<div *ngIf=\"!notifications\">\n\t\t<ion-item class=\"ion-no-padding\" lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t\t<p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n\t\t\t\t<p><ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text></p>\n\t\t\t\t<ion-note><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></ion-note>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\t\t<ion-item class=\"ion-no-padding\" lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t\t<p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n\t\t\t\t<p><ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text></p>\n\t\t\t\t<ion-note><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></ion-note>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\t\t<ion-item class=\"ion-no-padding\" lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t\t<p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n\t\t\t\t<p><ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text></p>\n\t\t\t\t<ion-note><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></ion-note>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\t\t<ion-item class=\"ion-no-padding\" lines=\"none\">\n\t\t\t<ion-label>\n\t\t\t\t<p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n\t\t\t\t<p><ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text></p>\n\t\t\t\t<ion-note><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></ion-note>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\t</div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_notifications_notifications_module_ts.js.map