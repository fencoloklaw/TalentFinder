(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(toastr) {
        this.toastr = toastr;
        this.title = 'app works!';
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_searchtalent_searchtalent_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/searchtalent/searchtalent.component */ "./src/app/components/searchtalent/searchtalent.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/scheduler/scheduler.component */ "./src/app/components/scheduler/scheduler.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _components_postjob_postjob_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/postjob/postjob.component */ "./src/app/components/postjob/postjob.component.ts");
/* harmony import */ var _components_searchjobs_searchjobs_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/searchjobs/searchjobs.component */ "./src/app/components/searchjobs/searchjobs.component.ts");
/* harmony import */ var _components_find_jobs_find_jobs_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/find-jobs/find-jobs.component */ "./src/app/components/find-jobs/find-jobs.component.ts");
/* harmony import */ var _components_company_profile_company_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/company-profile/company-profile.component */ "./src/app/components/company-profile/company-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'searchtalent', component: _components_searchtalent_searchtalent_component__WEBPACK_IMPORTED_MODULE_11__["SearchtalentComponent"] },
    { path: 'postjob', component: _components_postjob_postjob_component__WEBPACK_IMPORTED_MODULE_25__["PostjobComponent"] },
    { path: 'searchjobs', component: _components_searchjobs_searchjobs_component__WEBPACK_IMPORTED_MODULE_26__["SearchjobsComponent"] },
    { path: 'findjobs', component: _components_find_jobs_find_jobs_component__WEBPACK_IMPORTED_MODULE_27__["FindJobsComponent"] },
    { path: 'companyProfile', component: _components_company_profile_company_profile_component__WEBPACK_IMPORTED_MODULE_28__["CompanyProfileComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _components_searchtalent_searchtalent_component__WEBPACK_IMPORTED_MODULE_11__["SearchtalentComponent"],
                _components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_19__["SchedulerComponent"],
                _components_postjob_postjob_component__WEBPACK_IMPORTED_MODULE_25__["PostjobComponent"],
                _components_searchjobs_searchjobs_component__WEBPACK_IMPORTED_MODULE_26__["SearchjobsComponent"],
                _components_find_jobs_find_jobs_component__WEBPACK_IMPORTED_MODULE_27__["FindJobsComponent"],
                _components_company_profile_company_profile_component__WEBPACK_IMPORTED_MODULE_28__["CompanyProfileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollDispatchModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    closeButton: true
                }),
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_12__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _services_search_service__WEBPACK_IMPORTED_MODULE_15__["SearchService"], _services_data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"], _services_toaster_service__WEBPACK_IMPORTED_MODULE_23__["ToasterService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/company-profile/company-profile.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/company-profile/company-profile.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/company-profile/company-profile.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/company-profile/company-profile.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top:100px;\">\r\n  <form (submit)=\"onUpdateProfile()\">\r\n    <h2 class=\"page-header\">\r\n      <span>Company Profile</span>\r\n    </h2>\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-3\">\r\n        <img class=\"img-thumbnail\" src=\"http://i0.kym-cdn.com/photos/images/newsfeed/000/581/296/c09.jpg\">\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row mb-3\">\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" class=\"form-control\" placeholder=\"Last Name\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\" placeholder=\"First Name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row mb-3\">\r\n          <div class=\"col\">\r\n            <input type=\"text\" [(ngModel)]=\"city\" name=\"city\" class=\"form-control\" placeholder=\"City\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <label>Province/State :</label>\r\n            <select [(ngModel)]=\"region\" name=\"region\" class=\"form-control custom-select required\">\r\n              <option value=\"Alberta\">Alberta</option>\r\n              <option value=\"British Columbia\">British Columbia</option>\r\n              <option value=\"Manitoba\">Manitoba</option>\r\n              <option value=\"New Brunswick\">New Brunswick</option>\r\n              <option value=\"Newfoundland and Labrador\">Newfoundland and Labrador</option>\r\n              <option value=\"Nova Scotia\">Nova Scotia</option>\r\n              <option value=\"Ontario\">Ontario</option>\r\n              <option value=\"Prince Edward Island\">Prince Edward Island</option>\r\n              <option value=\"Quebec\">Quebec</option>\r\n              <option value=\"Saskatchewan\">Saskatchewan</option>\r\n              <option value=\"Northwest Territories\">Northwest Territories</option>\r\n              <option value=\"Nunavut\">Nunavut</option>\r\n              <option value=\"Yukon\">Yukon</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <img class=\"img-thumbnail float-right\" src=\"https://www.patternfly.org/pattern-library/data-visualization/pie-chart/img/right-legend-pie-chart.png\">\r\n      </div>\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col\">\r\n          <label><u>Skills</u></label>\r\n          <input type=\"text\" [(ngModel)]=\"skill\" name=\"skill\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col\">\r\n          <label><u>Summary</u></label>\r\n          <textarea class=\"form-control\" rows=\"4\" name=\"description\" [(ngModel)]=\"description\" placeholder=\"Introduction/Description\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col\">\r\n          <label><u>Work History</u></label>\r\n          <textarea class=\"form-control\" rows=\"4\" placeholder=\"Past Experience\" name=\"experience\" [(ngModel)]=\"experience\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col\">\r\n          <label><u>Certificates/Licenses</u></label>\r\n          <input type=\"text\" [(ngModel)]=\"certificates\" name=\"certificates\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"col\">\r\n          <label><u>Awards</u></label>\r\n          <input type=\"text\" [(ngModel)]=\"awards\" name=\"awards\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col\">\r\n          <label><u>Tests</u></label>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <input type=\"submit\" class=\"btn btn-block btn-primary\" value=\"Update\">\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/company-profile/company-profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/company-profile/company-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: CompanyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyProfileComponent", function() { return CompanyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyProfileComponent = /** @class */ (function () {
    function CompanyProfileComponent() {
    }
    CompanyProfileComponent.prototype.ngOnInit = function () {
    };
    CompanyProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-profile',
            template: __webpack_require__(/*! ./company-profile.component.html */ "./src/app/components/company-profile/company-profile.component.html"),
            styles: [__webpack_require__(/*! ./company-profile.component.css */ "./src/app/components/company-profile/company-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyProfileComponent);
    return CompanyProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2 class=\"page-header\">Dashboard</h2>\r\n    <mat-card>Welcome to Dashboard</mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")],
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/find-jobs/find-jobs.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/find-jobs/find-jobs.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/find-jobs/find-jobs.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/find-jobs/find-jobs.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center jumbotron\">\r\n  <div class=\"container\">\r\n    <form (submit)=\"onSearchSubmit()\">\r\n      <div class=\"row h1\">\r\n        <span class=\"mr-auto ml-auto\">EveryJob.ca</span>\r\n      </div>\r\n      <div class=\"row text-left\">\r\n        <div class=\" ml-auto col-sm-5 form-group w-100\">\r\n          <label class=\"font-weight-bold \" for=\"skillInput\">WHAT</label>\r\n          <input type=\"text\" id=\"skillInput\" name=\"skillInput\" [(ngModel)]=\"skillInput\" class=\"form-control form-rounded\">\r\n        </div>\r\n        <div class=\"mr-auto col-sm-5 form-group w-100\">\r\n          <label class=\"font-weight-bold\" for=\"whereInput\">WHERE</label>\r\n          <input type=\"text\" id=\"whereInput\" name=\"whereInput\" [(ngModel)]=\"whereInput\" class=\"form-control form-rounded\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row text-center\">\r\n        <div class=\"form-group mr-auto ml-auto\">\r\n          <button type=\"submit\" class=\"btn btn-primary\">Find Jobs</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div>\r\n      <div *ngIf=\"!authService.loggedIn()\" class=\"mt-5\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <button class=\"btn btn-secondary\" [routerLink]=\"['/']\">\r\n              <span>Upload a Resume</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/find-jobs/find-jobs.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/find-jobs/find-jobs.component.ts ***!
  \*************************************************************/
/*! exports provided: FindJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindJobsComponent", function() { return FindJobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FindJobsComponent = /** @class */ (function () {
    function FindJobsComponent(router, validateService, authService, dataService, searchService, toasterService) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.dataService = dataService;
        this.searchService = searchService;
        this.toasterService = toasterService;
    }
    FindJobsComponent.prototype.ngOnInit = function () {
        this.dataService.employee = true;
        this.whatInput = "";
        this.whereInput = "";
        this.whereInput = this.searchService.city;
        if (this.whereInput == "") {
            this.findLocation();
        }
    };
    FindJobsComponent.prototype.onSearchSubmit = function () {
        if (this.validateService.validateNotNull(this.whereInput)) {
            this.dataService.whatData = this.whatInput;
            this.dataService.whereData = this.whereInput;
            this.router.navigate(['searchjobs']);
        }
        else {
            this.toasterService.warning('Where field has no value');
        }
    };
    FindJobsComponent.prototype.findLocation = function () {
        var _this = this;
        this.searchService.getAddress()
            .subscribe(function (res) {
            if (res) {
                _this.whereInput = res.city;
                _this.searchService.setAddress(res);
            }
            else {
                return "";
            }
        });
    };
    FindJobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-find-jobs',
            template: __webpack_require__(/*! ./find-jobs.component.html */ "./src/app/components/find-jobs/find-jobs.component.html"),
            styles: [__webpack_require__(/*! ./find-jobs.component.css */ "./src/app/components/find-jobs/find-jobs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]])
    ], FindJobsComponent);
    return FindJobsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 600px) {\r\n    .column {\r\n        float: left;\r\n        width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center jumbotron\">\r\n    <div class=\"container\">\r\n        <form (submit)=\"onSearchSubmit()\">\r\n            <div class=\"row h1\">\r\n                <span class=\"mr-auto ml-auto\">EveryJob.ca</span>\r\n            </div>\r\n            <div class=\"row text-left\">\r\n                <div class=\" ml-auto col-sm-5 form-group w-100\">\r\n                    <label class=\"font-weight-bold \" for=\"skillInput\">EXPERTISE</label>\r\n                    <input type=\"text\" id=\"skillInput\" name=\"skillInput\" [(ngModel)]=\"skillInput\" class=\"form-control form-rounded\">\r\n                </div>\r\n                <div class=\"mr-auto col-sm-5 form-group w-100\">\r\n                    <label class=\"font-weight-bold\" for=\"whereInput\">WHERE</label>\r\n                    <input type=\"text\" id=\"whereInput\" name=\"whereInput\" [(ngModel)]=\"whereInput\" class=\"form-control form-rounded\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row text-center\">\r\n                <div class=\"form-group ml-auto mr-auto\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\">Find Talent</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div>\r\n            <div *ngIf=\"!authService.loggedIn()\" class=\"mt-5\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <button class=\"btn btn-secondary\" [routerLink]=\"['/']\">\r\n                            <span>Post a Job</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--<div *ngIf=\"authService.loggedIn()\" class=\"row mb-3 mt-5\">-->\r\n            <!--</div>-->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, validateService, authService, dataService, searchService, toasterService) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.dataService = dataService;
        this.searchService = searchService;
        this.toasterService = toasterService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.dataService.employee = false;
        // this.filteredOptions = this.myControl.valueChanges
        //     .pipe(
        //         startWith(''),
        //         map(value => this._filter(value))
        //     );
        this.skillInput = "";
        this.whereInput = "";
        this.whereInput = this.searchService.city;
        if (this.whereInput == "") {
            this.findLocation();
        }
    };
    // private _filter(value: string): string[] {
    //     const filterValue = value.toLowerCase();
    //
    //     return this.options.filter(option => option.toLowerCase().includes(filterValue));
    // }
    HomeComponent.prototype.onSearchSubmit = function () {
        if (this.validateService.validateNotNull(this.whereInput)) {
            this.dataService.skillData = this.skillInput;
            this.dataService.whereData = this.whereInput;
            this.router.navigate(['searchtalent']);
        }
        else {
            this.toasterService.warning('Where field has no value');
        }
    };
    HomeComponent.prototype.findLocation = function () {
        var _this = this;
        this.searchService.getAddress()
            .subscribe(function (res) {
            if (res) {
                _this.whereInput = res.city;
                _this.searchService.setAddress(res);
            }
            else {
                return "";
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1 class=\"page-header\">Login</h1>\r\n    <form (submit)=\"onLoginSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label>Email Address :</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Password :</label>\r\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n        </div>\r\n        <input type=\"submit\" [disabled]=\"!validLogin()\" class=\"btn btn-block btn-primary\" value=\"Login\">\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, validateService, toasterService) {
        this.authService = authService;
        this.router = router;
        this.validateService = validateService;
        this.toasterService = toasterService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.email = "";
        this.password = "";
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['dashboard']).then(function () {
                    _this.toasterService.success('You are now logged in');
                });
            }
            else {
                _this.router.navigate(['login']).then(function () {
                    _this.toasterService.warning(data.msg);
                });
            }
        });
    };
    LoginComponent.prototype.validLogin = function () {
        if ((this.email.length > 0) && (this.password.length > 0) && this.validateService.validateEmail(this.email)) {
            return true;
        }
        else {
            return false;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary floating-action-navbar\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">EveryJob.ca</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item text-right\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/findjobs']\">Find Job</a>\r\n            </li>\r\n            <li class=\"nav-item text-right\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/postjob']\">Post Job</a>\r\n            </li>\r\n            <li class=\"nav-item text-right\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/']\">Find Pro</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item text-right\" *ngIf=\"loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n            </li>\r\n            <li class=\"nav-item text-right\" *ngIf=\"loggedIn()&&employee()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\r\n            </li>\r\n            <li class=\"nav-item text-right\" *ngIf=\"loggedIn()&&!employee()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/companyProfile']\">Company Profile</a>\r\n            </li>\r\n            <li class=\"nav-item text-right\" *ngIf=\"!loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n            </li>\r\n            <li class=\"nav-item text-right\" *ngIf=\"!loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n            </li>\r\n            <li class=\"nav-item text-right\" *ngIf=\"loggedIn()\">\r\n                <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, toasterService, dataService) {
        this.authService = authService;
        this.router = router;
        this.toasterService = toasterService;
        this.dataService = dataService;
    }
    NavbarComponent.prototype.employee = function () {
        return this.dataService.employee;
    };
    NavbarComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        var _this = this;
        this.authService.logout();
        this.router.navigate(['/login']).then(function () {
            _this.toasterService.success('You are logged out');
        });
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/postjob/postjob.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/postjob/postjob.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/postjob/postjob.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/postjob/postjob.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"page-header\">Post a Job Post</h1>\r\n  <form>\r\n    <fieldset>\r\n      <div class=\"row mb-3 form-group required\">\r\n        <label class=\"control-label\">Company Name</label>\r\n        <input type=\"text\" [(ngModel)]=\"companyName\" name=\"companyName\" class=\"form-control\" required>\r\n      </div>\r\n      <div class=\"row mb-3 form-group required\">\r\n        <label class=\"control-label\">Expertise</label>\r\n        <input type=\"text\" [(ngModel)]=\"expertise\" name=\"expertise\" class=\"form-control\" required>\r\n      </div>\r\n      <div class=\"row mb-3 form-group required\">\r\n        <label class=\"control-label\">Estimated Frequency</label>\r\n        <input type=\"text\" [(ngModel)]=\"estimatedFrequency\" name=\"estimatedFrequency\" class=\"form-control\" required>\r\n      </div>\r\n      <div class=\"row form-group required\">\r\n        <label class=\"control-label\">Job Description</label>\r\n        <textarea rows=\"5\" [(ngModel)]=\"jobDescription\" name=\"jobDescription\" class=\"form-control\" maxlength=\"1000\" required>\r\n        </textarea>\r\n      </div>\r\n      <div class=\"row mb-3 form-group\">\r\n        <label class=\"control-label\">Optional Questions</label>\r\n        <input type=\"text\" [(ngModel)]=\"optionalQuestion1\" name=\"optionalQuestion1\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"row mb-3 form-group\">\r\n        <label class=\"control-label\">Optional Questions</label>\r\n        <input type=\"text\" [(ngModel)]=\"optionalQuestion2\" name=\"optionalQuestion2\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"row mb-3 form-group\">\r\n        <label class=\"control-label\">Optional Questions</label>\r\n        <input type=\"text\" [(ngModel)]=\"optionalQuestion3\" name=\"optionalQuestion3\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <input type=\"submit\" class=\"btn btn-block btn-primary\" value=\"Post Job\" (click)=\"onPostJobClick()\">\r\n      </div>\r\n    </fieldset>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/postjob/postjob.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/postjob/postjob.component.ts ***!
  \*********************************************************/
/*! exports provided: PostjobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostjobComponent", function() { return PostjobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostjobComponent = /** @class */ (function () {
    function PostjobComponent() {
    }
    PostjobComponent.prototype.ngOnInit = function () {
    };
    PostjobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postjob',
            template: __webpack_require__(/*! ./postjob.component.html */ "./src/app/components/postjob/postjob.component.html"),
            styles: [__webpack_require__(/*! ./postjob.component.css */ "./src/app/components/postjob/postjob.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostjobComponent);
    return PostjobComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top:100px;\">\r\n    <form (submit)=\"onUpdateProfile()\">\r\n        <h2 class=\"page-header\">\r\n            <span>Profile</span>\r\n        </h2>\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col-3\">\r\n                <img class=\"img-thumbnail\" src=\"http://i0.kym-cdn.com/photos/images/newsfeed/000/581/296/c09.jpg\">\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" class=\"form-control\" placeholder=\"Last Name\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\" placeholder=\"First Name\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" [(ngModel)]=\"city\" name=\"city\" class=\"form-control\" placeholder=\"City\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <label>Province/State :</label>\r\n                        <select [(ngModel)]=\"region\" name=\"region\" class=\"form-control custom-select required\">\r\n                            <option value=\"Alberta\">Alberta</option>\r\n                            <option value=\"British Columbia\">British Columbia</option>\r\n                            <option value=\"Manitoba\">Manitoba</option>\r\n                            <option value=\"New Brunswick\">New Brunswick</option>\r\n                            <option value=\"Newfoundland and Labrador\">Newfoundland and Labrador</option>\r\n                            <option value=\"Nova Scotia\">Nova Scotia</option>\r\n                            <option value=\"Ontario\">Ontario</option>\r\n                            <option value=\"Prince Edward Island\">Prince Edward Island</option>\r\n                            <option value=\"Quebec\">Quebec</option>\r\n                            <option value=\"Saskatchewan\">Saskatchewan</option>\r\n                            <option value=\"Northwest Territories\">Northwest Territories</option>\r\n                            <option value=\"Nunavut\">Nunavut</option>\r\n                            <option value=\"Yukon\">Yukon</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <img class=\"img-thumbnail float-right\" src=\"https://www.patternfly.org/pattern-library/data-visualization/pie-chart/img/right-legend-pie-chart.png\">\r\n            </div>\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col\">\r\n                    <label><u>Skills</u></label>\r\n                    <input type=\"text\" [(ngModel)]=\"skill\" name=\"skill\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col\">\r\n                    <label><u>Summary</u></label>\r\n                    <textarea class=\"form-control\" rows=\"4\" name=\"description\" [(ngModel)]=\"description\" placeholder=\"Introduction/Description\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col\">\r\n                    <label><u>Work History</u></label>\r\n                    <textarea class=\"form-control\" rows=\"4\" placeholder=\"Past Experience\" name=\"experience\" [(ngModel)]=\"experience\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col\">\r\n                    <label><u>Certificates/Licenses</u></label>\r\n                    <input type=\"text\" [(ngModel)]=\"certificates\" name=\"certificates\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"col\">\r\n                    <label><u>Awards</u></label>\r\n                    <input type=\"text\" [(ngModel)]=\"awards\" name=\"awards\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col\">\r\n                    <label><u>Tests</u></label>\r\n                </div>\r\n            </div>\r\n            <div class=\"text-center\">\r\n                <input type=\"submit\" class=\"btn btn-block btn-primary\" value=\"Update\">\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router, toasterService) {
        this.authService = authService;
        this.router = router;
        this.toasterService = toasterService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this._id = profile.user._id;
            _this.firstName = profile.user.firstName;
            _this.lastName = profile.user.lastName;
            _this.email = profile.user.email;
            _this.skill = profile.user.skill;
            _this.experience = profile.user.experience;
            _this.volunteer = profile.user.volunteer;
            _this.city = profile.user.city;
            _this.region = profile.user.region;
            _this.description = profile.user.description;
            _this.certificates = profile.user.certificates;
            _this.awards = profile.user.awards;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.onUpdateProfile = function () {
        var _this = this;
        var updateUser = {
            _id: this._id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            skill: this.skill,
            experience: this.experience,
            volunteer: this.volunteer,
            city: this.city,
            region: this.region,
            description: this.description,
            certificates: this.certificates,
            awards: this.awards
        };
        this.authService.updateProfile(updateUser).subscribe(function (data) {
            _this.toasterService.success('Profile Updated');
            _this._id = data.user._id;
            _this.firstName = data.user.firstName;
            _this.lastName = data.user.lastName;
            _this.email = data.user.email;
            _this.skill = data.user.skill;
            _this.experience = data.user.experience;
            _this.volunteer = data.user.volunteer;
            _this.city = data.user.city;
            _this.region = data.user.region;
            _this.description = data.user.description;
            _this.certificates = data.user.certificates;
            _this.awards = data.user.awards;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1 class=\"page-header\">Register</h1>\r\n    <form>\r\n        <fieldset>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col form-group required\">\r\n                    <label class=\"control-label\">Email Address</label>\r\n                    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"email@something.com\" required>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col form-group required\">\r\n                    <label class=\"control-label\">First Name</label>\r\n                    <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\" required>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col form-group required\">\r\n                    <label class=\"control-label\">Last Name</label>\r\n                    <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" class=\"form-control\" required>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col form-group required\">\r\n                    <label class=\"control-label\">Skills</label>\r\n                    <input type=\"text\" [(ngModel)]=\"skill\" name=\"skills\" class=\"form-control\" required>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col form-group required\">\r\n                    <label class=\"control-label\">City</label>\r\n                    <input type=\"text\" [(ngModel)]=\"city\" name=\"city\" class=\"form-control\" required>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col form-group required\">\r\n                    <label class=\"control-label\">Province/State</label>\r\n                    <select [(ngModel)]=\"region\" name=\"region\" class=\"form-control custom-select required\">\r\n                        <option value=\"Alberta\">Alberta</option>\r\n                        <option value=\"British Columbia\">British Columbia</option>\r\n                        <option value=\"Manitoba\">Manitoba</option>\r\n                        <option value=\"New Brunswick\">New Brunswick</option>\r\n                        <option value=\"Newfoundland and Labrador\">Newfoundland and Labrador</option>\r\n                        <option value=\"Nova Scotia\">Nova Scotia</option>\r\n                        <option value=\"Ontario\">Ontario</option>\r\n                        <option value=\"Prince Edward Island\">Prince Edward Island</option>\r\n                        <option value=\"Quebec\">Quebec</option>\r\n                        <option value=\"Saskatchewan\">Saskatchewan</option>\r\n                        <option value=\"Northwest Territories\">Northwest Territories</option>\r\n                        <option value=\"Nunavut\">Nunavut</option>\r\n                        <option value=\"Yukon\">Yukon</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col form-group required\">\r\n                    <label class=\"control-label\">Password</label>\r\n                    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n                </div>\r\n            </div>\r\n            <div class=\"text-center\">\r\n                <input type=\"submit\" class=\"btn btn-block btn-primary\" value=\"Register\" (click)=\"onRegisterSubmit()\">\r\n            </div>\r\n        </fieldset>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, router, searchService, toasterService) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.searchService = searchService;
        this.toasterService = toasterService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.city = this.searchService.city;
        this.region = this.searchService.region;
        if (this.city == "" || this.region == "") {
            this.findLocation();
        }
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            skill: this.skill,
            city: this.city,
            region: this.region,
            password: this.password
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.toasterService.warning('Fill in all required fields');
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.toasterService.warning('Invalid email');
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.err) {
                _this.router.navigate(['/register']).then(function () {
                    _this.toasterService.error('Something went wrong: ' + data.err);
                });
            }
            _this.router.navigate(['/login']).then(function () {
                _this.toasterService.success('You are now registered!');
            });
        });
    };
    RegisterComponent.prototype.findLocation = function () {
        var _this = this;
        this.searchService.getAddress().subscribe(function (res) {
            if (res) {
                _this.city = res.city;
                _this.region = res.region;
                _this.searchService.setAddress(res);
            }
            else {
                return "";
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/scheduler/scheduler.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/scheduler/scheduler.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/scheduler/scheduler.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/scheduler/scheduler.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n        <div>\r\n            <button class=\"btn btn-primary\">Previous</button>\r\n            <button class=\"btn btn-secondary\">Today</button>\r\n            <button class=\"btn btn-primary\">Next</button>\r\n        </div>\r\n        <div>\r\n            <button class=\"btn btn-primary\">Previous</button>\r\n            <button class=\"btn btn-secondary\">Today</button>\r\n            <button class=\"btn btn-primary\">Next</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/scheduler/scheduler.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/scheduler/scheduler.component.ts ***!
  \*************************************************************/
/*! exports provided: SchedulerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulerComponent", function() { return SchedulerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SchedulerComponent = /** @class */ (function () {
    function SchedulerComponent() {
    }
    SchedulerComponent.prototype.ngOnInit = function () {
    };
    SchedulerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scheduler',
            template: __webpack_require__(/*! ./scheduler.component.html */ "./src/app/components/scheduler/scheduler.component.html"),
            styles: [__webpack_require__(/*! ./scheduler.component.css */ "./src/app/components/scheduler/scheduler.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SchedulerComponent);
    return SchedulerComponent;
}());



/***/ }),

/***/ "./src/app/components/searchjobs/searchjobs.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/searchjobs/searchjobs.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/searchjobs/searchjobs.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/searchjobs/searchjobs.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <form class=\"p-3 d-inline\" (submit)=\"onSearchSubmit()\">\r\n    <div class=\"row container mr-auto text-left\">\r\n      <div class=\"col-5 form-group\">\r\n        <label class=\"font-weight-bold \" for=\"whatInput\">WHAT</label>\r\n        <input type=\"text\" id=\"whatInput\" name=\"whatInput\" [(ngModel)]=\"whatInput\" class=\"form-control form-rounded\">\r\n      </div>\r\n      <div class=\"col-5 form-group\">\r\n        <label class=\"font-weight-bold\" for=\"whereInput\">WHERE</label>\r\n        <input type=\"text\" id=\"whereInput\" name=\"whereInput\" [(ngModel)]=\"whereInput\" class=\"form-control form-rounded\">\r\n      </div>\r\n      <div class=\"col-2 form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-top:2.0rem !important;\">Find Jobs</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-2\">\r\n      <div>\r\n        <span><b>My Recent Search</b></span>\r\n      </div>\r\n      <div class=\"col\">\r\n        <label class=\"row\">Filter</label>\r\n        <div class=\"row\">\r\n          <button>filter1</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <label class=\"row\">Filter</label>\r\n        <div class=\"row\">\r\n          <button>filter2</button>\r\n        </div>\r\n        <div class=\"row\">\r\n          <button>filter3</button>\r\n        </div>\r\n        <div class=\"row\">\r\n          <button>filter4</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <div class=\"\">\r\n        <ul class=\"list-group\" *ngFor=\"let data of dataArray\">\r\n          <button class=\"list-group-item list-group-item-action\" (click)=\"showProfile(data)\">\r\n            <div>\r\n              <span>Name: {{data.lastName}}, {{data.firstName}}</span>\r\n            </div>\r\n            <div>\r\n              <span>Skill: {{data.skill}}</span>\r\n            </div>\r\n            <div>\r\n              <span>City: {{data.city}}</span>\r\n            </div>\r\n          </button>\r\n        </ul>\r\n        <div>\r\n          <ul class=\"pagination pagination-lg\">\r\n            <button class=\"list-group-item list-group-item-action page-link\" *ngIf=\"currentPage>1\" (click)=\"onChangePageBack()\">\r\n              <span>&laquo; Previous</span>\r\n            </button>\r\n            <button class=\"list-group-item list-group-item-action page-link\" *ngIf=\"currentPage<numberOfPages\" (click)=\"onChangePage()\">\r\n              <span>Next &raquo;</span>\r\n            </button>\r\n          </ul>\r\n        </div>\r\n        <div class=\"container\" *ngIf=\"dataArrayLength==0\">\r\n          <p class=\"lead\">No users found.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"viewArrayProfile==false\" class=\"col-4\">\r\n      <div class=\"card border-primary\">\r\n        <div class=\"card-body\" style=\"height:600px; max-height:600px;\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <h2>{{profile.lastName}}, {{profile.firstName}}</h2>\r\n            </div>\r\n            <div class=\"col\">\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"returnSearch()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <span>Status: </span>\r\n              <span>Online</span>\r\n            </div>\r\n            <div class=\"col\">\r\n              <button class=\"float-right btn btn-primary\">\r\n                <span>Contact Me</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <span>Email: {{profile.email}}</span>\r\n          </div>\r\n          <div>\r\n            <span>Skill: {{profile.skill}}</span>\r\n          </div>\r\n          <div>\r\n            <span>City: {{profile.city}}</span>\r\n          </div>\r\n          <div>\r\n            <span>Experience: {{profile.experience}}</span>\r\n          </div>\r\n          <div>\r\n            <span>Volunteer: {{profile.volunteer}}</span>\r\n          </div>\r\n          <div>\r\n            <span>Availability:</span>\r\n            <table></table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/searchjobs/searchjobs.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/searchjobs/searchjobs.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchjobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchjobsComponent", function() { return SearchjobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchjobsComponent = /** @class */ (function () {
    function SearchjobsComponent(router, validateService, authService, searchService, dataService, toasterService) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.searchService = searchService;
        this.dataService = dataService;
        this.toasterService = toasterService;
    }
    SearchjobsComponent.prototype.ngOnInit = function () {
        if ((this.validateService.validateNotNull(this.dataService.whatData)) && (this.validateService.validateNotNull(this.dataService.whereData))) {
            this.whatInput = this.dataService.whatData;
            this.whereInput = this.dataService.whereData;
            this.onSearchSubmit();
        }
        else if (this.validateService.validateNotNull(this.dataService.whereData)) {
            this.whatInput = "";
            this.whereInput = this.dataService.whereData;
            this.onSearchSubmit();
        }
        else if (this.validateService.validateNotNull(this.dataService.whatData)) {
            this.whatInput = this.dataService.whatData;
            this.whereInput = "";
        }
        else {
            this.whatInput = "";
            this.whereInput = "";
            if (this.whereInput == "") {
                this.findLocation();
            }
        }
        this.viewArrayProfile = true;
    };
    SearchjobsComponent.prototype.onSearchSubmit = function () {
        var _this = this;
        var search = {
            whatInput: this.whatInput,
            whereInput: this.whereInput
        };
        if (this.validateService.validateNotNull(this.whereInput)) {
            this.searchService.searchUser(search).subscribe(function (data) {
                if (data.success) {
                    _this.toasterService.success('Found Matches!');
                    _this.searchData = data;
                    _this.dataArrayLength = data.documents.length;
                    _this.numberOfPages = Math.ceil(data.documents.length / 10);
                    _this.currentPage = 1;
                    _this.dataArray = data.documents.slice(_this.currentPage * 10 - 10, _this.currentPage * 10);
                    _this.viewArrayProfile = true;
                }
                else {
                    _this.toasterService.warning(data.msg);
                }
            });
        }
        else {
            this.toasterService.warning('Where field has no value');
        }
    };
    SearchjobsComponent.prototype.onChangePage = function () {
        if (this.currentPage < this.numberOfPages) {
            this.currentPage++;
            this.dataArray = this.searchData.documents.slice(this.currentPage * 10 - 10, this.currentPage * 10);
        }
        else {
            //do not display next
        }
    };
    SearchjobsComponent.prototype.onChangePageBack = function () {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.dataArray = this.searchData.documents.slice(this.currentPage * 10 - 10, this.currentPage * 10);
        }
        else {
            //do not display next
        }
    };
    SearchjobsComponent.prototype.showProfile = function (data) {
        this.viewArrayProfile = false;
        this.profile = data;
    };
    SearchjobsComponent.prototype.returnSearch = function () {
        this.viewArrayProfile = true;
        this.dataArray = this.searchData.documents.slice(this.currentPage * 10 - 10, this.currentPage * 10);
        this.profile = "";
    };
    SearchjobsComponent.prototype.findLocation = function () {
        var _this = this;
        this.searchService.getAddress().subscribe(function (res) {
            if (res) {
                _this.whereInput = res.city;
                _this.searchService.setAddress(res);
            }
            else {
                return "";
            }
        });
    };
    SearchjobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchjobs',
            template: __webpack_require__(/*! ./searchjobs.component.html */ "./src/app/components/searchjobs/searchjobs.component.html"),
            styles: [__webpack_require__(/*! ./searchjobs.component.css */ "./src/app/components/searchjobs/searchjobs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]])
    ], SearchjobsComponent);
    return SearchjobsComponent;
}());



/***/ }),

/***/ "./src/app/components/searchtalent/searchtalent.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/searchtalent/searchtalent.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/searchtalent/searchtalent.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/searchtalent/searchtalent.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <form class=\"p-3 d-inline\" (submit)=\"onSearchSubmit()\">\r\n        <div class=\"row container mr-auto text-left\">\r\n            <div class=\"col-5 form-group\">\r\n                <label class=\"font-weight-bold \" for=\"skillInput\">EXPERTISE</label>\r\n                <input type=\"text\" id=\"skillInput\" name=\"skillInput\" [(ngModel)]=\"skillInput\" class=\"form-control form-rounded\">\r\n            </div>\r\n            <div class=\"col-5 form-group\">\r\n                <label class=\"font-weight-bold\" for=\"whereInput\">WHERE</label>\r\n                <input type=\"text\" id=\"whereInput\" name=\"whereInput\" [(ngModel)]=\"whereInput\" class=\"form-control form-rounded\">\r\n            </div>\r\n            <div class=\"col-2 form-group\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-top:2.0rem !important;\">Find Talent</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"row mt-5\">\r\n        <div class=\"col-2\">\r\n            <div>\r\n                <span><b>My Recent Search</b></span>\r\n            </div>\r\n            <div class=\"col\">\r\n                <label class=\"row\">Filter</label>\r\n                <div class=\"row\">\r\n                    <button>filter1</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <label class=\"row\">Filter</label>\r\n                <div class=\"row\">\r\n                    <button>filter2</button>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <button>filter3</button>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <button>filter4</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"\">\r\n                <ul class=\"list-group\" *ngFor=\"let data of dataArray\">\r\n                    <button class=\"list-group-item list-group-item-action\" (click)=\"showProfile(data)\">\r\n                        <div>\r\n                            <span>Name: {{data.lastName}}, {{data.firstName}}</span>\r\n                        </div>\r\n                        <div>\r\n                            <span>Skill: {{data.skill}}</span>\r\n                        </div>\r\n                        <div>\r\n                            <span>City: {{data.city}}</span>\r\n                        </div>\r\n                    </button>\r\n                </ul>\r\n                <div>\r\n                    <ul class=\"pagination pagination-lg\">\r\n                        <button class=\"list-group-item list-group-item-action page-link\" *ngIf=\"currentPage>1\" (click)=\"onChangePageBack()\">\r\n                            <span>&laquo; Previous</span>\r\n                        </button>\r\n                        <button class=\"list-group-item list-group-item-action page-link\" *ngIf=\"currentPage<numberOfPages\" (click)=\"onChangePage()\">\r\n                            <span>Next &raquo;</span>\r\n                        </button>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"container\" *ngIf=\"dataArrayLength==0\">\r\n                    <p class=\"lead\">No users found.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"viewArrayProfile==false\" class=\"col-4\">\r\n            <div class=\"card border-primary\">\r\n                <div class=\"card-body\" style=\"height:600px; max-height:600px;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <h2>{{profile.lastName}}, {{profile.firstName}}</h2>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"returnSearch()\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <span>Status: </span>\r\n                            <span>Online</span>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <button class=\"float-right btn btn-primary\">\r\n                                <span>Contact Me</span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                        <span>Email: {{profile.email}}</span>\r\n                    </div>\r\n                    <div>\r\n                        <span>Skill: {{profile.skill}}</span>\r\n                    </div>\r\n                    <div>\r\n                        <span>City: {{profile.city}}</span>\r\n                    </div>\r\n                    <div>\r\n                        <span>Experience: {{profile.experience}}</span>\r\n                    </div>\r\n                    <div>\r\n                        <span>Volunteer: {{profile.volunteer}}</span>\r\n                    </div>\r\n                    <div>\r\n                        <span>Availability:</span>\r\n                        <table></table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/searchtalent/searchtalent.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/searchtalent/searchtalent.component.ts ***!
  \*******************************************************************/
/*! exports provided: SearchtalentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchtalentComponent", function() { return SearchtalentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchtalentComponent = /** @class */ (function () {
    function SearchtalentComponent(router, validateService, authService, searchService, dataService, toasterService) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.searchService = searchService;
        this.dataService = dataService;
        this.toasterService = toasterService;
    }
    SearchtalentComponent.prototype.ngOnInit = function () {
        if ((this.validateService.validateNotNull(this.dataService.skillData)) && (this.validateService.validateNotNull(this.dataService.whereData))) {
            this.skillInput = this.dataService.skillData;
            this.whereInput = this.dataService.whereData;
            this.onSearchSubmit();
        }
        else if (this.validateService.validateNotNull(this.dataService.whereData)) {
            this.skillInput = "";
            this.whereInput = this.dataService.whereData;
            this.onSearchSubmit();
        }
        else if (this.validateService.validateNotNull(this.dataService.skillData)) {
            this.skillInput = this.dataService.skillData;
            this.whereInput = "";
        }
        else {
            this.skillInput = "";
            this.whereInput = "";
            if (this.whereInput == "") {
                this.findLocation();
            }
        }
        this.viewArrayProfile = true;
    };
    SearchtalentComponent.prototype.onSearchSubmit = function () {
        var _this = this;
        var search = {
            skillInput: this.skillInput,
            whereInput: this.whereInput
        };
        if (this.validateService.validateNotNull(this.whereInput)) {
            this.searchService.searchUser(search).subscribe(function (data) {
                if (data.success) {
                    _this.toasterService.success('Found Matches!');
                    _this.searchData = data;
                    _this.dataArrayLength = data.documents.length;
                    _this.numberOfPages = Math.ceil(data.documents.length / 10);
                    _this.currentPage = 1;
                    _this.dataArray = data.documents.slice(_this.currentPage * 10 - 10, _this.currentPage * 10);
                    _this.viewArrayProfile = true;
                }
                else {
                    _this.toasterService.warning(data.msg);
                }
            });
        }
        else {
            this.toasterService.warning('Where field has no value');
        }
    };
    SearchtalentComponent.prototype.onChangePage = function () {
        if (this.currentPage < this.numberOfPages) {
            this.currentPage++;
            this.dataArray = this.searchData.documents.slice(this.currentPage * 10 - 10, this.currentPage * 10);
        }
        else {
            //do not display next
        }
    };
    SearchtalentComponent.prototype.onChangePageBack = function () {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.dataArray = this.searchData.documents.slice(this.currentPage * 10 - 10, this.currentPage * 10);
        }
        else {
            //do not display next
        }
    };
    SearchtalentComponent.prototype.showProfile = function (data) {
        this.viewArrayProfile = false;
        this.profile = data;
    };
    SearchtalentComponent.prototype.returnSearch = function () {
        this.viewArrayProfile = true;
        this.dataArray = this.searchData.documents.slice(this.currentPage * 10 - 10, this.currentPage * 10);
        this.profile = "";
    };
    SearchtalentComponent.prototype.findLocation = function () {
        var _this = this;
        this.searchService.getAddress().subscribe(function (res) {
            if (res) {
                _this.whereInput = res.city;
                _this.searchService.setAddress(res);
            }
            else {
                return "";
            }
        });
    };
    SearchtalentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchtalent',
            template: __webpack_require__(/*! ./searchtalent.component.html */ "./src/app/components/searchtalent/searchtalent.component.html"),
            styles: [__webpack_require__(/*! ./searchtalent.component.css */ "./src/app/components/searchtalent/searchtalent.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]])
    ], SearchtalentComponent);
    return SearchtalentComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    AuthService.prototype.tokenGetter = function () {
        return localStorage.getItem('access_token');
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl + '/users/register', user);
    };
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl + '/users/authenticate', user);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('access_token', token);
        localStorage.setItem('user', JSON.stringify(user)); //local storage must be string
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.tokenGetter());
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl + '/users/profile', { headers: headers });
    };
    AuthService.prototype.updateProfile = function (user) {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.tokenGetter());
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl + '/users/updateProfile', user, { headers: headers });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('access_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        var refreshToken = this.tokenGetter();
        return refreshToken != null && !this.jwtHelper.isTokenExpired(refreshToken);
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.city = "";
        this.region = "";
    }
    SearchService.prototype.searchUser = function (search) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + '/users/search', search, { headers: headers });
    };
    SearchService.prototype.getRecommendedJobs = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + '/users/search', '', { headers: headers });
    };
    SearchService.prototype.getAddress = function () {
        return this.http.get('https://ipinfo.io/geo');
    };
    SearchService.prototype.setAddress = function (res) {
        this.city = res.city;
        this.region = res.region;
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/services/toaster.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/toaster.service.ts ***!
  \*********************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToasterService = /** @class */ (function () {
    function ToasterService(toastr) {
        this.toastr = toastr;
    }
    ToasterService.prototype.success = function (message) {
        this.toastr.success(message);
    };
    ToasterService.prototype.info = function (message) {
        this.toastr.info(message);
    };
    ToasterService.prototype.warning = function (message) {
        this.toastr.warning(message);
    };
    ToasterService.prototype.error = function (message) {
        this.toastr.error(message);
    };
    ToasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.email == undefined || user.password == undefined || user.lastName == undefined || user.firstName == undefined || user.skill == undefined || user.city == undefined || user.region == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateNotNull = function (value) {
        if (value == undefined || value == "") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    serverUrl: "http://localhost:8080"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workspace\TalentFinder\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map