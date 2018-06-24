webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container-fluid\">\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_searchtalent_searchtalent_component__ = __webpack_require__("../../../../../src/app/components/searchtalent/searchtalent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_cdk_scrolling__ = __webpack_require__("../../../cdk/esm5/scrolling.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_scheduler_scheduler_component__ = __webpack_require__("../../../../../src/app/components/scheduler/scheduler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'searchtalent', component: __WEBPACK_IMPORTED_MODULE_12__components_searchtalent_searchtalent_component__["a" /* SearchtalentComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_searchtalent_searchtalent_component__["a" /* SearchtalentComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_scheduler_scheduler_component__["a" /* SchedulerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["r" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["k" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["h" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_cdk_scrolling__["a" /* ScrollDispatchModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["j" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["q" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["f" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["p" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["m" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["i" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["n" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["o" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["e" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["g" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["l" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_17__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_18__services_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\r\n    width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">DashBoard</h2>\r\n<mat-card>Welcome to Dashboard</mat-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (max-width: 600px) {\r\n    .column {\r\n        float: left;\r\n        width: 100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center container\">\r\n    <h1 class=\"display-3\"> TalentFinder </h1>\r\n    <form (submit)=\"onSearchSubmit()\">\r\n        <div class=\"row text-left\">\r\n            <div class=\"col-5 form-group\">\r\n                <label class=\"font-weight-bold \" for=\"skillInput\">SKILL</label>\r\n                <input type=\"text\" id=\"skillInput\" name=\"skillInput\" [(ngModel)]=\"skillInput\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"col-5 form-group\">\r\n                <label class=\"font-weight-bold\" for=\"whereInput\">WHERE</label>\r\n                <input type=\"text\" id=\"whereInput\" name=\"whereInput\" [(ngModel)]=\"whereInput\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"col-2 form-group\" style=\"bottom:-26px;\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Find Talent</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(router, flashMessage, validateService, authService, dataService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.authService = authService;
        this.dataService = dataService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.skillInput = "";
        this.whereInput = "";
    };
    HomeComponent.prototype.onSearchSubmit = function () {
        if (this.validateService.validateNotNull(this.whereInput)) {
            this.dataService.skillData = this.skillInput;
            this.dataService.whereData = this.whereInput;
            this.router.navigate(['searchtalent']);
        }
        else {
            this.flashMessage.show('Where has not been specified', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]) === "function" && _e || Object])
], HomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1 class=\"page-header\">Login</h1>\r\n    <form (submit)=\"onLoginSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label>Email Address :</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n        </div>\r\n        <input type=\"submit\" [disabled]=\"!validLogin()\" class=\"btn btn-block btn-primary\" value=\"Login\">\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage, validateService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
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
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
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
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n    <a class=\"navbar-brand\" href=\"#\">TalentFinder</a>\r\n    <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavBar\" aria-controls=\"myNavBar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" style=\"\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavBar\" style=\"\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/']\">Home</a></li>\r\n        </ul>\r\n        <ul class=\"navbar-nav right\">\r\n            <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">DashBoard</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\">\r\n                <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2 class=\"page-header\">Profile</h2>\r\n    <form (submit)=\"onUpdateProfile()\">\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col\">\r\n                <img class=\"img-thumbnail w-50\" src=\"http://i0.kym-cdn.com/photos/images/newsfeed/000/581/296/c09.jpg\">\r\n            </div>\r\n            <div class=\"col\">\r\n                <img class=\"img-thumbnail w-50 float-right\" src=\"https://www.patternfly.org/pattern-library/data-visualization/pie-chart/img/right-legend-pie-chart.png\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col\">\r\n                <label>First Name : </label>\r\n                <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"col\">\r\n                <label>Last Name : </label>\r\n                <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" class=\"form-control\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col\">\r\n                <label>Personal Summary : </label>\r\n                <textarea class=\"form-control\" rows=\"4\" name=\"description\" [(ngModel)]=\"description\" placeholder=\"Introduction/Description\"></textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col\">\r\n                <label>Skill : </label>\r\n                <input type=\"text\" [(ngModel)]=\"skill\" name=\"skill\" class=\"form-control\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col\">\r\n                <label>Past Experience : </label>\r\n                <textarea class=\"form-control\" rows=\"4\" placeholder=\"Past Experience\" name=\"experience\" [(ngModel)]=\"experience\"></textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col\">\r\n                <label>City : </label>\r\n                <input type=\"text\" [(ngModel)]=\"city\" name=\"city\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"col\">\r\n            <label>Province : </label>\r\n            <select [(ngModel)]=\"province\" name=\"province\" class=\"form-control custom-select\">\r\n                <option value=\"AB\">Alberta</option>\r\n                <option value=\"BC\">British Columbia</option>\r\n                <option value=\"MB\">Manitoba</option>\r\n                <option value=\"NB\">New Brunswick</option>\r\n                <option value=\"NL\">Newfoundland and Labrador</option>\r\n                <option value=\"NS\">Nova Scotia</option>\r\n                <option value=\"ON\">Ontario</option>\r\n                <option value=\"PE\">Prince Edward Island</option>\r\n                <option value=\"QC\">Quebec</option>\r\n                <option value=\"SK\">Saskatchewan</option>\r\n                <option value=\"NT\">Northwest Territories</option>\r\n                <option value=\"NU\">Nunavut</option>\r\n                <option value=\"YT\">Yukon</option>\r\n            </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col\">\r\n                <label>Certificates/Licenses : </label>\r\n                <input type=\"text\" [(ngModel)]=\"certificates\" name=\"certificates\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"col\">\r\n                <label>Awards : </label>\r\n                <input type=\"text\" [(ngModel)]=\"awards\" name=\"awards\" class=\"form-control\">\r\n            </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n            <input type=\"submit\" class=\"btn btn-block btn-primary\" value=\"Update\">\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
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
            _this.description = profile.user.description;
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
            description: this.description
        };
        this.authService.updateProfile(updateUser).subscribe(function (data) {
            _this.flashMessage.show("Profile Updated", {
                cssClass: 'alert-success',
                timeout: 5000
            });
            _this._id = data.user._id;
            _this.firstName = data.user.firstName;
            _this.lastName = data.user.lastName;
            _this.email = data.user.email;
            _this.skill = data.user.skill;
            _this.experience = data.user.experience;
            _this.volunteer = data.user.volunteer;
            _this.city = data.user.city;
            _this.description = data.user.description;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1 class=\"page-header\">Register</h1>\r\n    <form>\r\n        <fieldset>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col\">\r\n                    <label>Email Address :</label>\r\n                    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"email@something.com\" required>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col\">\r\n                    <label>Password :</label>\r\n                    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n                </div>\r\n            </div>\r\n            <div class=\"text-center\">\r\n                <input type=\"submit\" class=\"btn btn-block btn-primary\" value=\"Register\" (click)=\"onRegisterSubmit()\">\r\n            </div>\r\n        </fieldset>\r\n    </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            // name: this.name,
            email: this.email,
            // username: this.username,
            password: this.password
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Fill in required fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('please use valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.err) {
                _this.flashMessage.show('Something went wrong: ' + data.err, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
            _this.flashMessage.show('You are now registered and can log in', {
                cssClass: 'alert-success',
                timeout: 2000
            });
            _this.router.navigate(['/login']);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/scheduler/scheduler.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/scheduler/scheduler.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n        <div>\r\n            <button class=\"btn btn-primary\">Previous</button>\r\n            <button class=\"btn btn-secondary\">Today</button>\r\n            <button class=\"btn btn-primary\">Next</button>\r\n        </div>\r\n        <div>\r\n            <button class=\"btn btn-primary\">Previous</button>\r\n            <button class=\"btn btn-secondary\">Today</button>\r\n            <button class=\"btn btn-primary\">Next</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/scheduler/scheduler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SchedulerComponent = (function () {
    function SchedulerComponent() {
    }
    SchedulerComponent.prototype.ngOnInit = function () {
    };
    return SchedulerComponent;
}());
SchedulerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-scheduler',
        template: __webpack_require__("../../../../../src/app/components/scheduler/scheduler.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/scheduler/scheduler.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SchedulerComponent);

//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/scheduler.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/searchtalent/searchtalent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/searchtalent/searchtalent.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"container p-3\" (submit)=\"onSearchSubmit()\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-5 form-group\">\r\n            <label class=\"font-weight-bold \" for=\"skillInput\">SKILL</label>\r\n            <input type=\"text\" id=\"skillInput\" name=\"skillInput\" [(ngModel)]=\"skillInput\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"col-5 form-group\">\r\n            <label class=\"font-weight-bold\" for=\"whereInput\">WHERE</label>\r\n            <input type=\"text\" id=\"whereInput\" name=\"whereInput\" [(ngModel)]=\"whereInput\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"col-2 form-group\" style=\"bottom:-26px;\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Find Talent</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n<div class=\"\">\r\n    <div class=\"mt-5\">\r\n        <div *ngIf=\"viewArrayProfile==true\" class=\"\">\r\n            <ul class=\"list-group\" *ngFor=\"let data of dataArray\">\r\n                <button class=\"list-group-item list-group-item-action\" (click)=\"showProfile(data)\">\r\n                    <span>Name: {{data.firstName}} {{data.lastName}}</span>\r\n                    <br>\r\n                    <span>Email: {{data.email}}</span>\r\n                    <br>\r\n                    <span>Skill: {{data.skill}}</span>\r\n                    <br>\r\n                    <span>City: {{data.city}}</span>\r\n                </button>\r\n            </ul>\r\n            <div>\r\n                <ul class=\"pagination pagination-lg\">\r\n                    <button class=\"list-group-item list-group-item-action page-link\" *ngIf=\"currentPage>1\" (click)=\"onChangePageBack()\">\r\n                        <span>Previous</span>\r\n                    </button>\r\n                    <button class=\"list-group-item list-group-item-action page-link\" *ngIf=\"currentPage<numberOfPages\" (click)=\"onChangePage()\">\r\n                        <span>Next</span>\r\n                    </button>\r\n                </ul>\r\n            </div>\r\n            <div class=\"container\" *ngIf=\"dataArrayLength==0\">\r\n                <p class=\"lead\">No users found.</p>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"viewArrayProfile==false\" class=\"card border-primary\">\r\n            <div class=\"card-body\">\r\n                <h2>{{profile.firstName}} {{profile.lastName}}</h2>\r\n                <br>\r\n                <span>Email: {{profile.email}}</span>\r\n                <br>\r\n                <span>Skill: {{profile.skill}}</span>\r\n                <br>\r\n                <span>City: {{profile.city}}</span>\r\n                <br>\r\n                <span>Experience: {{profile.experience}}</span>\r\n                <br>\r\n                <span>Volunteer: {{profile.volunteer}}</span>\r\n                <br>\r\n                <button class=\"btn btn-secondary\" (click)=\"returnSearch()\">Return</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/searchtalent/searchtalent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchtalentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchtalentComponent = (function () {
    function SearchtalentComponent(router, flashMessage, validateService, authService, searchService, dataService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.authService = authService;
        this.searchService = searchService;
        this.dataService = dataService;
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
                    _this.flashMessage.show('success', {
                        cssClass: 'alert-success',
                        timeout: 2000
                    });
                    _this.searchData = data;
                    _this.dataArrayLength = data.documents.length;
                    _this.numberOfPages = Math.ceil(data.documents.length / 10);
                    _this.currentPage = 1;
                    _this.dataArray = data.documents.slice(_this.currentPage * 10 - 10, _this.currentPage * 10);
                    _this.viewArrayProfile = true;
                }
                else {
                    _this.flashMessage.show(data.msg, {
                        cssClass: 'alert-danger',
                        timeout: 2000
                    });
                }
            });
        }
        else {
            this.flashMessage.show('Where has not been specified', { cssClass: 'alert-danger', timeout: 3000 });
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
    return SearchtalentComponent;
}());
SearchtalentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-searchtalent',
        template: __webpack_require__("../../../../../src/app/components/searchtalent/searchtalent.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/searchtalent/searchtalent.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_search_service__["a" /* SearchService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */]) === "function" && _f || Object])
], SearchtalentComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/searchtalent.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
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
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user)); //local storage must be string
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateProfile = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put('/users/updateProfile', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
    }
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.searchUser = function (search) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/search', search, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/search.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.email == undefined || user.password == undefined) {
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
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Fenco/Projects/TalentFinder/angular-src/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map