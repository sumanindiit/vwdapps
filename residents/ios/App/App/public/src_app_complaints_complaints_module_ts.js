(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_complaints_complaints_module_ts"],{

/***/ 48948:
/*!*********************************************************!*\
  !*** ./src/app/complaints/complaints-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplaintsPageRoutingModule": () => (/* binding */ ComplaintsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _complaints_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complaints.page */ 37531);




const routes = [
    {
        path: '',
        component: _complaints_page__WEBPACK_IMPORTED_MODULE_0__.ComplaintsPage
    }
];
let ComplaintsPageRoutingModule = class ComplaintsPageRoutingModule {
};
ComplaintsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComplaintsPageRoutingModule);



/***/ }),

/***/ 60678:
/*!*************************************************!*\
  !*** ./src/app/complaints/complaints.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplaintsPageModule": () => (/* binding */ ComplaintsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _complaints_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complaints-routing.module */ 48948);
/* harmony import */ var _complaints_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complaints.page */ 37531);







let ComplaintsPageModule = class ComplaintsPageModule {
};
ComplaintsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _complaints_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComplaintsPageRoutingModule
        ],
        declarations: [_complaints_page__WEBPACK_IMPORTED_MODULE_1__.ComplaintsPage]
    })
], ComplaintsPageModule);



/***/ }),

/***/ 37531:
/*!***********************************************!*\
  !*** ./src/app/complaints/complaints.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplaintsPage": () => (/* binding */ ComplaintsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_complaints_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./complaints.page.html */ 95104);
/* harmony import */ var _complaints_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complaints.page.scss */ 45544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 45146);
/* harmony import */ var _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/globalFooService.service */ 48914);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ 5620);









let ComplaintsPage = class ComplaintsPage {
    constructor(router, globalFooService, common, api) {
        this.router = router;
        this.globalFooService = globalFooService;
        this.common = common;
        this.api = api;
        this.userId = localStorage.getItem('vwd_userid');
        this.is_loaded = false;
        this.isMoreRecords = true;
        this.recordsPerPage = 8;
    }
    ionViewWillEnter() {
        this.start = 0;
        this.allComplaints = [];
        //this.getPageData();
        this.getComplaints({}, '0');
    }
    ngOnInit() { }
    getComplaints(event = {}, type = '') {
        if (type === '0') {
            //this.common.presentLoading();
        }
        else {
            this.scrollEvent = event;
            if (type === '1') {
                console.log(this.start);
                console.log(this.recordsPerPage);
                this.start = this.start + this.recordsPerPage;
            }
        }
        var self = this;
        console.log('self start', self.start);
        console.log('this start', this.start);
        setTimeout(() => {
            self.api.post('getComplaints', { userId: this.userId, recordsPerPage: self.recordsPerPage, start: self.start }, '')
                .subscribe((result) => {
                this.common.stopLoading();
                const res = result;
                if (res.status === 422 || res.status === '422') {
                    let errMsgs = '';
                    for (const x of res.errors) {
                        errMsgs += x + '</br>';
                    }
                    self.common.presentToast(errMsgs, 'danger');
                    self.is_loaded = true;
                }
                else if (res.status === 200 || res.status === '200') {
                    var loaded_records = self.start + self.recordsPerPage;
                    if (loaded_records >= res.total) {
                        self.isMoreRecords = false;
                    }
                    self.allComplaints = self.allComplaints.concat(res.data);
                    if (type === '0') {
                        self.common.stopLoading();
                    }
                    else {
                        if (type === '1') {
                            self.scrollEvent.target.complete();
                        }
                    }
                    this.pageData = self.allComplaints;
                    this.is_loaded = false;
                    console.log(this.pageData);
                }
            }, (error) => {
                console.log(error);
            });
        }, 500);
    }
    getPageData() {
        this.api.post('getComplaints', { userId: this.userId }, '')
            .subscribe((result) => {
            this.common.stopLoading();
            const res = result;
            if (res.status === 422 || res.status === '422') {
                let errMsgs = '';
                for (const x of res.errors) {
                    errMsgs += x + '</br>';
                }
                this.common.presentToast(errMsgs, 'danger');
                this.is_loaded = true;
            }
            else if (res.status === 200 || res.status === '200') {
                this.pageData = res.data;
                this.allComplaints = res.data;
                this.is_loaded = false;
                console.log(this.pageData);
            }
        }, (error) => {
            console.log(error);
        });
    }
};
ComplaintsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFooService },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ComplaintsPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInfiniteScroll, { static: true },] }]
};
ComplaintsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-complaints',
        template: _raw_loader_complaints_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complaints_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ComplaintsPage);



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

/***/ 45544:
/*!*************************************************!*\
  !*** ./src/app/complaints/complaints.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header:after {\n  display: none;\n}\nion-header ion-toolbar {\n  --border-width:0px;\n  --background:var(--ion-color-primarygradient)!important;\n  --ion-color-base:var(--ion-color-primarygradient)!important;\n}\nion-header ion-toolbar ion-title {\n  font-size: 18px;\n  color: var(--ion-color-white);\n  font-family: var(--ion-headfamily);\n}\nion-header ion-toolbar ion-buttons {\n  font-size: 22px;\n  color: var(--ion-color-white);\n  margin-right: 10px;\n}\nion-content [complaintsmain] {\n  padding-top: 0;\n  position: relative;\n}\nion-content [complaintsmain]:after {\n  content: \"\";\n  position: absolute;\n  background: var(--ion-color-primarygradient);\n  height: 50px;\n  width: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n}\nion-content [complaintsmain] ion-item {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n  --inner-padding-end:10px;\n  --padding-start:10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  margin-bottom: 15px;\n}\nion-content [complaintsmain] ion-item ion-avatar {\n  margin: 0;\n  width: 55px;\n  height: 55px;\n  border: 2px solid var(--ion-color-white);\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n}\nion-content [complaintsmain] ion-item ion-label {\n  margin-left: 10px;\n  white-space: normal;\n}\nion-content [complaintsmain] ion-item ion-label h2 {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--ion-color-black);\n  margin: 0px 0px 4px;\n}\nion-content [complaintsmain] ion-item ion-label p {\n  font-size: 11px;\n  font-weight: 400;\n  color: #9c9c9c;\n  line-height: 18px;\n  margin: 0px;\n}\nion-content [complaintsmain] ion-item ion-buttons {\n  margin-left: 10px;\n  width: 28px;\n  height: 28px;\n  border: 1px solid #067f0f;\n  color: #067f0f;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n}\nion-content ion-fab ion-fab-button {\n  --background: var(--ion-color-primarygradient);\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsYWludHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBRUEsYUFBQTtBQUZGO0FBSUU7RUFDQyxrQkFBQTtFQUNELHVEQUFBO0VBQ0EsMkRBQUE7QUFGRjtBQUdFO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0gsa0NBQUE7QUFERDtBQUdFO0VBRUUsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQVFBO0VBQ0MsY0FBQTtFQUNELGtCQUFBO0FBTEE7QUFNQTtFQUVDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFMRDtBQU9BO0VBQ0MsMkNBQUE7RUFDRCx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBTEE7QUFNQTtFQUNDLFNBQUE7RUFDRCxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EsMkNBQUE7QUFKQTtBQU1BO0VBQ0csaUJBQUE7RUFDRCxtQkFBQTtBQUpGO0FBS0U7RUFFQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBSkg7QUFNRTtFQUVDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFMSDtBQVFBO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQU5EO0FBWUc7RUFFQSw4Q0FBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBWEoiLCJmaWxlIjoiY29tcGxhaW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyXHJcbnsgXHJcbiAgJjphZnRlclxyXG4gIHtcclxuICBkaXNwbGF5Om5vbmU7XHJcbiAgfVxyXG4gIGlvbi10b29sYmFyXHJcbiAgey0tYm9yZGVyLXdpZHRoOjBweDtcclxuICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnlncmFkaWVudCkhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLXByaW1hcnlncmFkaWVudCkhaW1wb3J0YW50O1xyXG4gIGlvbi10aXRsZVxyXG4gIHsgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWhlYWRmYW1pbHkpO1xyXG4gIH1cclxuICBpb24tYnV0dG9uc1xyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICB9XHJcbn1cclxuaW9uLWNvbnRlbnRcclxue1xyXG5bY29tcGxhaW50c21haW5dXHJcbntwYWRkaW5nLXRvcDogMDtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbiY6YWZ0ZXJcclxue1xyXG4gY29udGVudDonJztcclxuIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeWdyYWRpZW50KTtcclxuIGhlaWdodDo1MHB4O1xyXG4gd2lkdGg6IDEwMCU7XHJcbiB0b3A6MDtcclxuIGxlZnQ6MDtcclxuIHJpZ2h0OjA7XHJcbn1cclxuaW9uLWl0ZW1cclxue2JveC1zaGFkb3c6MHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC4xMCk7XHJcbi0taW5uZXItcGFkZGluZy1lbmQ6MTBweDtcclxuLS1wYWRkaW5nLXN0YXJ0OjEwcHg7XHJcbi0tcGFkZGluZy10b3A6IDEwcHg7XHJcbi0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxuaW9uLWF2YXRhclxyXG57bWFyZ2luOiAwO1xyXG53aWR0aDo1NXB4O1xyXG5oZWlnaHQ6NTVweDtcclxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5ib3gtc2hhZG93OjBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuMTApO1xyXG59XHJcbmlvbi1sYWJlbFxyXG57ICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIHdoaXRlLXNwYWNlOm5vcm1hbDtcclxuICBoMlxyXG4gIHtcclxuICAgZm9udC1zaXplOjEycHg7XHJcbiAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcclxuICAgbWFyZ2luOjBweCAwcHggNHB4O1xyXG4gIH1cclxuICBwXHJcbiAge1xyXG4gICBmb250LXNpemU6MTFweDtcclxuICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICBjb2xvcjojOWM5YzljO1xyXG4gICBsaW5lLWhlaWdodDoxOHB4O1xyXG4gICBtYXJnaW46MHB4OyAgXHJcbiAgfVxyXG59XHJcbmlvbi1idXR0b25zXHJcbnttYXJnaW4tbGVmdDoxMHB4O1xyXG4gd2lkdGg6MjhweDtcclxuIGhlaWdodDoyOHB4O1xyXG4gYm9yZGVyOjFweCBzb2xpZCAjMDY3ZjBmO1xyXG4gY29sb3I6IzA2N2YwZjtcclxuIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4ganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxufVxyXG59XHJcbn1cclxuaW9uLWZhYlxyXG57XHJcbiAgIGlvbi1mYWItYnV0dG9uXHJcbiAgIHtcclxuICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeWdyYWRpZW50KTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICB9XHJcbn1cclxufSJdfQ== */");

/***/ }),

/***/ 95104:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/complaints/complaints.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"md\"> \n  <ion-toolbar class=\"primary\">\n    <ion-title class=\"ion-text-center\">Complaints</ion-title>\n\t<ion-buttons slot=\"end\">\n\t  <ion-icon name=\"search-outline\"></ion-icon>\n\t</ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<div complaintsmain  class=\"ion-padding\">\n  <div *ngIf=\"pageData\">\n    <ion-item lines=\"none\" *ngFor =\"let data of pageData\">\n      <ion-avatar>\n        <img src=\"{{ data.image }}\"/>\n      </ion-avatar>\n      <ion-label> \n        <h2>{{data.title}}</h2>\n        <p>{{ data.content.slice(0, 60) + (data.content.length > 60 ? '...' : '')}}</p>\n      </ion-label>\n      <ion-buttons routerLink=\"/complaintdetail/{{data.id}}\" slot=\"end\"><ion-icon name=\"eye-outline\"></ion-icon></ion-buttons>\n    </ion-item>\n    \n    <ion-infinite-scroll *ngIf=\"isMoreRecords\" threshold=\"100px\" (ionInfinite)=\"getComplaints($event,'1')\">\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n\n  <div *ngIf=\"is_loaded === true\" class=\"alert alert-danger\" role=\"alert\" style=\"color: red;font-size: 17px;text-align: center;font-weight: 600;\" >\n\t\tNo Compaints found!\n\t</div>\n\n  <!-- Skeleton screen -->\n  <div *ngIf=\"!pageData\">\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      \n      <ion-label> \n        <h2><ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text></h2>\n        <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n        <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n      </ion-label>\n      <ion-buttons slot=\"end\"><ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text></ion-buttons>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      \n      <ion-label> \n        <h2><ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text></h2>\n        <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n        <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n      </ion-label>\n       <ion-buttons slot=\"end\"><ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text></ion-buttons>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      \n      <ion-label> \n        <h2><ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text></h2>\n        <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n        <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n      </ion-label>\n       <ion-buttons slot=\"end\"><ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text></ion-buttons>\n    </ion-item>\n    \n  </div>\n\n</div>\n\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/addcomplaint\">\n  <ion-fab-button   size=\"small\"><ion-icon name=\"add\"></ion-icon></ion-fab-button>\n</ion-fab>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_complaints_complaints_module_ts.js.map