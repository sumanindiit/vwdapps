(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts-src_app_services_common_service_ts"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
            },
            {
                path: 'complaints',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts-src_app_services_common_service_ts"), __webpack_require__.e("src_app_complaints_complaints_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../complaints/complaints.module */ 60678)).then(m => m.ComplaintsPageModule)
            },
            {
                path: 'complaints/:refresh',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts-src_app_services_common_service_ts"), __webpack_require__.e("src_app_complaints_complaints_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../complaints/complaints.module */ 60678)).then(m => m.ComplaintsPageModule)
            },
            {
                path: 'chat',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts-src_app_services_common_service_ts"), __webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js-src_app_services_globalFooService_ser-b7f263"), __webpack_require__.e("src_app_chat_chat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../chat/chat.module */ 20818)).then(m => m.ChatPageModule)
            },
            {
                path: 'notifications',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts-src_app_services_common_service_ts"), __webpack_require__.e("src_app_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../notifications/notifications.module */ 89182)).then(m => m.NotificationsPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts-src_app_services_common_service_ts"), __webpack_require__.e("src_app_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../settings/settings.module */ 27075)).then(m => m.SettingsPageModule)
            },
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 97665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 24427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 24427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-tab-bar {\n  border: none;\n  contain: initial !important;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n}\nion-tab-bar ion-tab-button[home] {\n  --background: transparent;\n}\nion-tab-bar ion-tab-button[home] span {\n  width: 45px;\n  height: 45px;\n  background: var(--ion-color-secondarygradient);\n  min-height: 45px;\n  max-height: 45px;\n  min-width: 45px;\n  max-width: 45px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-tab-bar ion-tab-button[home] span img {\n  height: 22px;\n}\nion-tab-bar ion-tab-button img {\n  height: 20px;\n}\nion-tab-bar ion-tab-button img[active] {\n  display: none;\n}\nion-tab-bar ion-tab-button img[inactive] {\n  display: block;\n}\nion-tab-bar ion-tab-button.tab-selected img[active] {\n  display: block;\n}\nion-tab-bar ion-tab-button.tab-selected img[inactive] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUFZLDJCQUFBO0VBQ2IsMkNBQUE7QUFFQTtBQUNLO0VBRUgseUJBQUE7QUFBRjtBQUNFO0VBRUMsV0FBQTtFQUNDLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUNFO0VBR0EsWUFBQTtBQURGO0FBT0k7RUFFSCxZQUFBO0FBTkQ7QUFPRTtFQUVBLGFBQUE7QUFORjtBQVFFO0VBRUEsY0FBQTtBQVBGO0FBY0U7RUFFQSxjQUFBO0FBYkY7QUFlRTtFQUVBLGFBQUE7QUFkRiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWItYmFyXG57Ym9yZGVyOm5vbmU7Y29udGFpbjppbml0aWFsIWltcG9ydGFudDtcbmJveC1zaGFkb3c6MHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC4xMCk7XG4gIGlvbi10YWItYnV0dG9uXG4gIHtcbiAgICAgJltob21lXVxuXHQgeyBcblx0IC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdCBzcGFuXG5cdCB7XG5cdCAgd2lkdGg6NDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeWdyYWRpZW50KTsgXG4gICAgbWluLWhlaWdodDogNDVweDtcbiAgICBtYXgtaGVpZ2h0OiA0NXB4O1xuICAgIG1pbi13aWR0aDogNDVweDtcbiAgICBtYXgtd2lkdGg6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRpbWdcblx0XHR7XG5cdFx0XG5cdFx0aGVpZ2h0OiAyMnB4O1xuXHRcdH1cbiBcblx0IH1cblx0IH1cbiAgXG4gICAgaW1nXG5cdHtcblx0aGVpZ2h0OiAyMHB4O1xuXHQgJlthY3RpdmVdXG5cdCB7XG5cdCBkaXNwbGF5Om5vbmU7XG5cdCB9XG5cdCAmW2luYWN0aXZlXVxuXHQge1xuXHQgZGlzcGxheTpibG9jaztcblx0IH1cblx0fVxuICAgJi50YWItc2VsZWN0ZWRcbiAgIHtcbiAgICBpbWdcblx0e1xuXHQgJlthY3RpdmVdXG5cdCB7XG5cdCBkaXNwbGF5OmJsb2NrO1xuXHQgfVxuXHQgJltpbmFjdGl2ZV1cblx0IHtcblx0IGRpc3BsYXk6bm9uZTtcblx0IH1cblx0fVxuICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 97665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"complaints\">\n     <img inactive src=\"assets/img/tabicon1.png\">\n      <img active src=\"assets/img/tabicon1-1.png\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"chat\">\n       <img inactive src=\"assets/img/tabicon2.png\">\n      <img active src=\"assets/img/tabicon2-1.png\">     \n    </ion-tab-button>\n    <ion-tab-button tab=\"home\" home>\n      <span>\n      <img src=\"assets/img/tabicon3.png\">\n      </span>\n    </ion-tab-button>\n    <ion-tab-button tab=\"notifications\">\n      <img inactive src=\"assets/img/tabicon4.png\">\n      <img active src=\"assets/img/tabicon4-1.png\">    \n    </ion-tab-button>\n\t<ion-tab-button tab=\"settings\">\n      <img inactive src=\"assets/img/tabicon5.png\">\n      <img active src=\"assets/img/tabicon5-1.png\">    \n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map