(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_termsconditions_termsconditions_module_ts"],{

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

/***/ 23732:
/*!*******************************************************************!*\
  !*** ./src/app/termsconditions/termsconditions-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsconditionsPageRoutingModule": () => (/* binding */ TermsconditionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _termsconditions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termsconditions.page */ 71149);




const routes = [
    {
        path: '',
        component: _termsconditions_page__WEBPACK_IMPORTED_MODULE_0__.TermsconditionsPage
    }
];
let TermsconditionsPageRoutingModule = class TermsconditionsPageRoutingModule {
};
TermsconditionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsconditionsPageRoutingModule);



/***/ }),

/***/ 17855:
/*!***********************************************************!*\
  !*** ./src/app/termsconditions/termsconditions.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsconditionsPageModule": () => (/* binding */ TermsconditionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _termsconditions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termsconditions-routing.module */ 23732);
/* harmony import */ var _termsconditions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termsconditions.page */ 71149);







let TermsconditionsPageModule = class TermsconditionsPageModule {
};
TermsconditionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _termsconditions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsconditionsPageRoutingModule
        ],
        declarations: [_termsconditions_page__WEBPACK_IMPORTED_MODULE_1__.TermsconditionsPage]
    })
], TermsconditionsPageModule);



/***/ }),

/***/ 71149:
/*!*********************************************************!*\
  !*** ./src/app/termsconditions/termsconditions.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsconditionsPage": () => (/* binding */ TermsconditionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_termsconditions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./termsconditions.page.html */ 66767);
/* harmony import */ var _termsconditions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termsconditions.page.scss */ 89867);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 45146);
/* harmony import */ var _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/globalFooService.service */ 48914);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ 5620);








let TermsconditionsPage = class TermsconditionsPage {
    constructor(router, globalFooService, common, api) {
        this.router = router;
        this.globalFooService = globalFooService;
        this.common = common;
        this.api = api;
    }
    ngOnInit() {
        this.getPageData();
    }
    getPageData() {
        this.api.post('getPageData', { pageSlug: 'terms_condition' }, '')
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
                this.pageData = res.data;
            }
        }, (error) => {
            console.log(error);
        });
    }
};
TermsconditionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFooService },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
TermsconditionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-termsconditions',
        template: _raw_loader_termsconditions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_termsconditions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TermsconditionsPage);



/***/ }),

/***/ 89867:
/*!***********************************************************!*\
  !*** ./src/app/termsconditions/termsconditions.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header:after {\n  display: none;\n}\nion-header ion-toolbar {\n  --border-width: 0px;\n  --background: var(--ion-color-primarygradient)!important;\n  --ion-color-base: var(--ion-color-primarygradient)!important;\n}\nion-header ion-toolbar ion-title {\n  font-size: 18px;\n  color: var(--ion-color-white);\n  font-family: var(--ion-headfamily);\n}\nion-content {\n  --background:var(--ion-color-white);\n}\nion-content [terms] [mt-20] {\n  margin-top: 20px !important;\n}\nion-content [terms] [heading] {\n  margin: 0px 0px 12px 0px;\n  font-size: 16px;\n  font-weight: 700;\n  position: relative;\n  z-index: 1;\n  color: var(--ion-color-black);\n}\nion-content [terms] [heading]:after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  width: 65px;\n  height: 4px;\n  background: var(--ion-color-secondary);\n  z-index: -1;\n  bottom: 2px;\n  opacity: 0.6;\n}\nion-content [terms] ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nion-content [terms] ul li {\n  display: flex;\n  align-items: flex-start;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 14px;\n  position: relative;\n  margin-bottom: 15px;\n}\nion-content [terms] ul li img {\n  max-width: 15px;\n  min-width: 15px;\n  object-fit: contain;\n  margin-right: 12px;\n  transform: translateY(5px);\n}\nion-content [terms] ul li p {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.8);\n  line-height: 24px;\n  margin: 0;\n}\nion-content [terms] p {\n  margin: 10px 0px;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.8);\n  line-height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zY29uZGl0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxhQUFBO0FBQUY7QUFFQztFQUNDLG1CQUFBO0VBQ0Esd0RBQUE7RUFDQSw0REFBQTtBQUFGO0FBQ0U7RUFDQyxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtBQUNIO0FBR0E7RUFFQSxtQ0FBQTtBQURBO0FBSUU7RUFFQywyQkFBQTtBQUhIO0FBS0U7RUFDQyx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBSEg7QUFJRztFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRkg7QUFLRTtFQUVBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFKRjtBQUtFO0VBRUssYUFBQTtFQUNMLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUpGO0FBS0c7RUFDRyxlQUFBO0VBQ0gsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUhIO0FBS0U7RUFDQyxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNELFNBQUE7QUFIRjtBQU9FO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0QseUJBQUE7RUFDQyxpQkFBQTtBQUxIIiwiZmlsZSI6InRlcm1zY29uZGl0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuXHQmOmFmdGVyIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdGlvbi10b29sYmFyIHtcclxuXHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5Z3JhZGllbnQpIWltcG9ydGFudDtcclxuXHRcdC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5Z3JhZGllbnQpIWltcG9ydGFudDtcclxuXHRcdGlvbi10aXRsZSB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1pb24taGVhZGZhbWlseSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbmlvbi1jb250ZW50XHJcbntcclxuLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblxyXG4gW3Rlcm1zXSB7XHJcbiAgW210LTIwXVxyXG4gIHtcclxuICAgbWFyZ2luLXRvcDoyMHB4IWltcG9ydGFudDtcclxuICB9XHJcblx0XHRbaGVhZGluZ10ge1xyXG5cdFx0XHRtYXJnaW46IDBweCAwcHggMTJweCAgMHB4O1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcclxuXHRcdFx0JjphZnRlciB7XHJcblx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0d2lkdGg6IDY1cHg7XHJcblx0XHRcdGhlaWdodDogNHB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuXHRcdFx0ei1pbmRleDogLTE7XHJcblx0XHRcdGJvdHRvbTogMnB4O1xyXG5cdFx0XHRvcGFjaXR5OjAuNjA7XHJcblx0XHR9XHJcblx0XHR9XHJcblx0XHR1bFxyXG5cdHtcclxuXHQgbGlzdC1zdHlsZTpub25lO1xyXG5cdCBtYXJnaW46MDtcclxuXHQgcGFkZGluZzowO1xyXG5cdCBsaVxyXG5cdCB7XHJcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0XHRjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgwKTtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0XHQgaW1nXHJcblx0XHQgeyAgbWF4LXdpZHRoOiAxNXB4O1xyXG5cdFx0XHRtaW4td2lkdGg6IDE1cHg7XHJcblx0XHRcdG9iamVjdC1maXQ6IGNvbnRhaW47XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMTJweDtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XHJcblx0XHQgfVxyXG5cdFx0cFxyXG5cdFx0e2ZvbnQtc2l6ZToxNHB4O1xyXG5cdFx0IGNvbG9yOnJnYmEoMCwgMCwgMCwgMC44MCk7XHJcblx0XHQgbGluZS1oZWlnaHQ6MjRweDtcclxuXHRcdG1hcmdpbjowO1xyXG5cdFx0fVxyXG5cdCB9XHJcblx0fSBcclxuXHRcdHAgXHJcblx0XHR7bWFyZ2luOiAxMHB4IDBweDtcclxuXHRcdCBmb250LXNpemU6MTRweDtcclxuXHRcdGNvbG9yOnJnYmEoMCwgMCwgMCwgMC44MCk7XHJcblx0XHQgbGluZS1oZWlnaHQ6MjRweDtcclxuXHRcdH1cclxuICB9XHRcclxufSJdfQ== */");

/***/ }),

/***/ 66767:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/termsconditions/termsconditions.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"md\">\n  <ion-toolbar color=\"primary\">\n  <ion-back-button slot=\"start\" defaultHref=\"/tabs/settings\"  text=\"\" icon=\"chevron-back-outline\">\n  </ion-back-button>\n    <ion-title class=\"ion-text-center\">{{ pageData?.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n\t<div *ngIf=\"pageData\">\n    <div privacypolicy [innerHTML]=\"pageData?.content\" ></div>\n  </div>\n\n  <!-- Skeleton screen -->\n  <div *ngIf=\"!pageData\">\n    <div privacypolicy >\n      <h2 heading><ion-skeleton-text animated  style=\"width: 40%\" ></ion-skeleton-text></h2>\n      <p><ion-skeleton-text animated  style=\"width: 80%\" ></ion-skeleton-text></p>\n      <p><ion-skeleton-text animated  style=\"width: 80%\" ></ion-skeleton-text></p>\n      <p><ion-skeleton-text animated  style=\"width: 80%\" ></ion-skeleton-text></p>\n\n      <h2 heading mt-20><ion-skeleton-text animated  style=\"width: 40%\" ></ion-skeleton-text></h2>\n      \n      <ul>\n          <li><ion-skeleton-text animated  style=\"width: 80%\" ></ion-skeleton-text></li>\n          <li><ion-skeleton-text animated  style=\"width: 80%\" ></ion-skeleton-text></li>\n          <li><ion-skeleton-text animated  style=\"width: 80%\" ></ion-skeleton-text></li>\n      </ul>\n      <h2 heading mt-20><ion-skeleton-text animated  style=\"width: 40%\" ></ion-skeleton-text></h2>\n      <p><ion-skeleton-text animated  style=\"width: 80%\" ></ion-skeleton-text></p>\n      <p><ion-skeleton-text animated  style=\"width: 80%\" ></ion-skeleton-text></p>\n      <p><ion-skeleton-text animated  style=\"width: 80%\" ></ion-skeleton-text></p>\n    </div>\n  </div> \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_termsconditions_termsconditions_module_ts.js.map