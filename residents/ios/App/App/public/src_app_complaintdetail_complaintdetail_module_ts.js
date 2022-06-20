(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_complaintdetail_complaintdetail_module_ts"],{

/***/ 87305:
/*!*******************************************************************!*\
  !*** ./src/app/complaintdetail/complaintdetail-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplaintdetailPageRoutingModule": () => (/* binding */ ComplaintdetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _complaintdetail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complaintdetail.page */ 61307);




const routes = [
    {
        path: '',
        component: _complaintdetail_page__WEBPACK_IMPORTED_MODULE_0__.ComplaintdetailPage
    }
];
let ComplaintdetailPageRoutingModule = class ComplaintdetailPageRoutingModule {
};
ComplaintdetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComplaintdetailPageRoutingModule);



/***/ }),

/***/ 92863:
/*!***********************************************************!*\
  !*** ./src/app/complaintdetail/complaintdetail.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplaintdetailPageModule": () => (/* binding */ ComplaintdetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _complaintdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complaintdetail-routing.module */ 87305);
/* harmony import */ var _complaintdetail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complaintdetail.page */ 61307);







let ComplaintdetailPageModule = class ComplaintdetailPageModule {
};
ComplaintdetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _complaintdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComplaintdetailPageRoutingModule
        ],
        declarations: [_complaintdetail_page__WEBPACK_IMPORTED_MODULE_1__.ComplaintdetailPage]
    })
], ComplaintdetailPageModule);



/***/ }),

/***/ 61307:
/*!*********************************************************!*\
  !*** ./src/app/complaintdetail/complaintdetail.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplaintdetailPage": () => (/* binding */ ComplaintdetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_complaintdetail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./complaintdetail.page.html */ 38081);
/* harmony import */ var _complaintdetail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complaintdetail.page.scss */ 63109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 45146);
/* harmony import */ var _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/globalFooService.service */ 48914);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ 5620);








let ComplaintdetailPage = class ComplaintdetailPage {
    constructor(route, globalFooService, common, api) {
        this.globalFooService = globalFooService;
        this.common = common;
        this.api = api;
        this.complaintId = route.snapshot.paramMap.get('complaintId');
    }
    ionViewWillEnter() {
        this.getPageData();
    }
    ngOnInit() { }
    getPageData() {
        this.api.post('getComplaintDetail', { complaintId: this.complaintId }, '')
            .subscribe((result) => {
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
                this.pageData = res.data;
                console.log(this.pageData);
            }
        }, (error) => {
            console.log(error);
        });
    }
};
ComplaintdetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFooService },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ComplaintdetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-complaintdetail',
        template: _raw_loader_complaintdetail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complaintdetail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ComplaintdetailPage);



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

/***/ 63109:
/*!***********************************************************!*\
  !*** ./src/app/complaintdetail/complaintdetail.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header:after {\n  display: none;\n}\nion-header ion-toolbar {\n  --border-width:0px;\n  --background:var(--ion-color-primarygradient)!important;\n  --ion-color-base:var(--ion-color-primarygradient)!important;\n}\nion-header ion-toolbar ion-title {\n  font-size: 18px;\n  color: var(--ion-color-white);\n  font-family: var(--ion-headfamily);\n}\nion-header ion-toolbar ion-back-button {\n  --icon-font-size: 20px;\n  color: var(--ion-color-white);\n}\nion-content [complaintdetail] {\n  padding-top: 0;\n  position: relative;\n}\nion-content [complaintdetail]:after {\n  content: \"\";\n  position: absolute;\n  background: var(--ion-color-primarygradient);\n  height: 50px;\n  width: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n}\nion-content [complaintdetail] ion-card {\n  display: grid;\n  position: relative;\n  z-index: 1;\n  border-radius: 0px;\n  background: transparent;\n  box-shadow: none;\n  margin-bottom: 20px;\n}\nion-content [complaintdetail] ion-card img {\n  height: 190px;\n  width: 100%;\n  object-fit: cover;\n}\nion-content [complaintdetail] ion-card:after {\n  content: \"\";\n  position: absolute;\n  background: var(--ion-color-black);\n  opacity: 0.62;\n  top: 0px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\nion-content [complaintdetail] ion-card span {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  z-index: 9;\n  color: var(--ion-color-white);\n  border: 1px solid var(--ion-color-white);\n  font-size: 12px;\n  padding: 4px 15px;\n  font-weight: 500;\n}\nion-content [complaintdetail] [complaintcontent] h2 {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ion-color-black);\n  margin: 0 0px 3px;\n}\nion-content [complaintdetail] [complaintcontent] ion-note {\n  font-size: 11px;\n  color: #9c9c9c;\n  font-weight: 400;\n}\nion-content [complaintdetail] [complaintcontent] p {\n  font-size: 13px;\n  color: #9c9c9c;\n  font-weight: 400;\n  margin: 8px 0px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsYWludGRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFFQSxhQUFBO0FBRkY7QUFJRTtFQUNDLGtCQUFBO0VBQ0QsdURBQUE7RUFDQSwyREFBQTtBQUZGO0FBR0U7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDSCxrQ0FBQTtBQUREO0FBR0U7RUFFRSxzQkFBQTtFQUNBLDZCQUFBO0FBRko7QUFRQTtFQUNDLGNBQUE7RUFDRCxrQkFBQTtBQUxBO0FBTUE7RUFFQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBTEQ7QUFPQztFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNILFVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUxGO0FBTUU7RUFFQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBTEg7QUFPRTtFQUNHLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNILFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFMRjtBQU9FO0VBRUcsa0JBQUE7RUFDSCxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFORjtBQVdNO0VBRUYsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQVZKO0FBWUc7RUFFRSxlQUFBO0VBQ0gsY0FBQTtFQUNBLGdCQUFBO0FBWEY7QUFhRztFQUVDLGVBQUE7RUFDRixjQUFBO0VBQ0EsZ0JBQUE7RUFDRyxlQUFBO0VBQ0gsaUJBQUE7QUFaRiIsImZpbGUiOiJjb21wbGFpbnRkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlclxyXG57IFxyXG4gICY6YWZ0ZXJcclxuICB7XHJcbiAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICBpb24tdG9vbGJhclxyXG4gIHstLWJvcmRlci13aWR0aDowcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5Z3JhZGllbnQpIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5Z3JhZGllbnQpIWltcG9ydGFudDtcclxuICBpb24tdGl0bGVcclxuICB7IGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1oZWFkZmFtaWx5KTtcclxuICB9XHJcbiAgaW9uLWJhY2stYnV0dG9uXHJcbiAge1xyXG4gICAgLS1pY29uLWZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gIH1cclxuICB9XHJcbn1cclxuaW9uLWNvbnRlbnRcclxue1xyXG5bY29tcGxhaW50ZGV0YWlsXVxyXG57cGFkZGluZy10b3A6IDA7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG4mOmFmdGVyXHJcbntcclxuIGNvbnRlbnQ6Jyc7XHJcbiBwb3NpdGlvbjphYnNvbHV0ZTtcclxuIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnlncmFkaWVudCk7XHJcbiBoZWlnaHQ6NTBweDtcclxuIHdpZHRoOiAxMDAlO1xyXG4gdG9wOjA7XHJcbiBsZWZ0OjA7XHJcbiByaWdodDowO1xyXG59XHJcbiBpb24tY2FyZCAgIFxyXG4gICB7IGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcblx0IHotaW5kZXg6MTtcclxuXHQgYm9yZGVyLXJhZGl1czowcHg7XHJcblx0IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcblx0IGJveC1zaGFkb3c6IG5vbmU7XHJcblx0IG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0IGltZ1xyXG5cdCB7XHJcblx0ICBoZWlnaHQ6MTkwcHg7XHJcblx0ICB3aWR0aDoxMDAlO1xyXG5cdCAgb2JqZWN0LWZpdDpjb3ZlcjtcclxuXHQgfVxyXG5cdCAmOmFmdGVyXHJcblx0IHsgIGNvbnRlbnQ6Jyc7XHJcblx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgICAgYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmxhY2spO1xyXG5cdCAgICBvcGFjaXR5OjAuNjI7XHJcblx0XHR0b3A6IDBweDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHQgfVxyXG5cdCBzcGFuXHJcblx0IHtcclxuXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAxNXB4O1xyXG5cdFx0bGVmdDogMTVweDtcclxuXHRcdHotaW5kZXg6IDk7XHJcblx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRwYWRkaW5nOiA0cHggMTVweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0IH1cclxuICAgfVxyXG4gICBbY29tcGxhaW50Y29udGVudF1cclxuICAge1xyXG4gICAgICBoMlxyXG5cdCAge1xyXG5cdCAgIGZvbnQtc2l6ZToxNHB4O1xyXG5cdCAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuXHQgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItYmxhY2spO1xyXG5cdCAgIG1hcmdpbjowIDBweCAzcHg7XHJcblx0ICB9XHJcblx0ICBpb24tbm90ZVxyXG5cdCAge1xyXG5cdCAgICBmb250LXNpemU6MTFweDtcclxuXHRcdGNvbG9yOiM5YzljOWM7XHJcblx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0ICB9XHJcblx0ICBwXHJcblx0ICB7XHJcblx0ICBcdGZvbnQtc2l6ZToxM3B4O1xyXG5cdFx0Y29sb3I6IzljOWM5YztcclxuXHRcdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHQgICAgbWFyZ2luOjhweCAwcHg7XHJcblx0XHRsaW5lLWhlaWdodDoyMXB4O1xyXG5cdCAgfVxyXG4gICB9XHJcbn1cclxufSJdfQ== */");

/***/ }),

/***/ 38081:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/complaintdetail/complaintdetail.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"md\"> \n  <ion-toolbar class=\"primary\">\n <ion-back-button slot=\"start\" defaultHref=\"/tabs/complaints\"  text=\"\" icon=\"chevron-back-outline\">\n  </ion-back-button>\n    <ion-title class=\"ion-text-center\">Complaint Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<div complaintdetail class=\"ion-padding\">\n\n  <div *ngIf=\"pageData\">\n    <ion-card class=\"ion-no-margin\">\n      <img src=\"{{ pageData?.image }}\"/>\n      <span>{{ pageData?.status }}</span>\n    </ion-card>\n    <div complaintcontent>\n      <h2>{{ pageData?.title }}</h2>\n      <ion-note>{{ pageData?.post_date }}</ion-note>\n      <p>{{ pageData?.content }}</p>\n    </div>\n  </div>\n\n  <!-- Skeleton screen -->\n  <div *ngIf=\"!pageData\">\n    <ion-card class=\"ion-no-margin\">\n      <ion-skeleton-text animated  style=\"width: 100%;height:240px\" ></ion-skeleton-text>\n      <span><ion-skeleton-text animated style=\"width: 40%;\"  ></ion-skeleton-text></span>\n    </ion-card>\n    <div complaintcontent>\n      <h2><ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text></h2>\n      <ion-note><ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text></ion-note>\n      <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n      <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n      <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n      <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n    </div>\n  </div>\n\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_complaintdetail_complaintdetail_module_ts.js.map