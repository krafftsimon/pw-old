webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/animations/contact-box.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contactBoxAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var contactBoxAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('contactBoxAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-20%)' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0)' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.3s cubic-bezier(0.215, 0.61, 0.355, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-20%)' })),
    ]),
]);


/***/ }),

/***/ "../../../../../src/app/animations/list.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var listAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('listAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ height: 0 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ height: '*' })),
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ height: '*' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(150, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ height: 0 })),
    ]),
]);


/***/ }),

/***/ "../../../../../src/app/animations/router-transition.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerTransitionAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var routerTransitionAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routerTransitionAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        transform: 'translateX(0)',
        opacity: 1
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('void => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(-50%)', opacity: 0 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.8s cubic-bezier(0.215, 0.61, 0.355, 1)'),
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.9s cubic-bezier(0.215, 0.61, 0.355, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(100%)', opacity: 0 })))
]);


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project1_component__ = __webpack_require__("../../../../../src/app/project1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project2_component__ = __webpack_require__("../../../../../src/app/project2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project3_component__ = __webpack_require__("../../../../../src/app/project3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project4_component__ = __webpack_require__("../../../../../src/app/project4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project5_component__ = __webpack_require__("../../../../../src/app/project5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__project6_component__ = __webpack_require__("../../../../../src/app/project6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project7_component__ = __webpack_require__("../../../../../src/app/project7.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__job_history_component__ = __webpack_require__("../../../../../src/app/job-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__skills_component__ = __webpack_require__("../../../../../src/app/skills.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] },
    { path: 'project1', component: __WEBPACK_IMPORTED_MODULE_3__project1_component__["a" /* Project1Component */] },
    { path: 'project2', component: __WEBPACK_IMPORTED_MODULE_4__project2_component__["a" /* Project2Component */] },
    { path: 'project3', component: __WEBPACK_IMPORTED_MODULE_5__project3_component__["a" /* Project3Component */] },
    { path: 'project4', component: __WEBPACK_IMPORTED_MODULE_6__project4_component__["a" /* Project4Component */] },
    { path: 'project5', component: __WEBPACK_IMPORTED_MODULE_7__project5_component__["a" /* Project5Component */] },
    { path: 'project6', component: __WEBPACK_IMPORTED_MODULE_8__project6_component__["a" /* Project6Component */] },
    { path: 'project7', component: __WEBPACK_IMPORTED_MODULE_9__project7_component__["a" /* Project7Component */] },
    { path: 'job-history', component: __WEBPACK_IMPORTED_MODULE_10__job_history_component__["a" /* JobHistoryComponent */] },
    { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_11__skills_component__["a" /* SkillsComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n  position: relative;\r\n  width: 96%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container {\r\n  height: 100vh;\r\n  margin: 0 auto;\r\n  border-left: 1px solid black;\r\n  border-right: 1px solid black;\r\n}\r\n\r\n.name {\r\n  text-align: center;\r\n}\r\n\r\n.test {\r\n  display: inline-block;\r\n}\r\nmd-sidenav-container {\r\n  height: 100%;\r\n  background-color: rgba(214,214,214, 1);\r\n}\r\n\r\nmd-sidenav {\r\n  width: 230px;\r\n  box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n\r\nfa:hover {\r\n  color: #afafaf;\r\n}\r\n\r\n#contact-div {\r\n  position: fixed;\r\n  top: 100px;\r\n  right: 25px;\r\n  z-index: 12;\r\n  width: 250px;\r\n  text-align: center;\r\n  margin: 0 130px 0 auto;\r\n  background-color: #68EFAD;\r\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.8);\r\n  border-radius: 8px;\r\n  padding: 20px 10px;\r\n  line-height: 40px;\r\n  color: black;\r\n}\r\n\r\n@media only screen and (max-width: 1332px) {\r\n  #contact-div {\r\n    top: 190px !important;\r\n    right: 25px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1020px) {\r\n  #contact-div {\r\n    top: 240px !important;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 470px) {\r\n  #contact-div {\r\n    top: 300px !important;\r\n    right: -60px;\r\n  }\r\n\r\n  .header {\r\n    position: static !important;\r\n  }\r\n}\r\n\r\n.contact-icon {\r\n  vertical-align: middle;\r\n}\r\n\r\n.header {\r\n  overflow: hidden;\r\n  background-color: #691A99;\r\n  padding: 20px;\r\n  top: 0px;\r\n  box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 1);\r\n  opacity: 1 !important;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  z-index: 11;\r\n}\r\n\r\nh2 {\r\n  margin: 20px;\r\n  cursor: pointer;\r\n  transition: all .2s ease-in-out;\r\n}\r\n\r\nh2:hover {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\n.title {\r\n  margin: 20px 1px;\r\n  font-size: 36px;\r\n  display: inline-block;\r\n}\r\n\r\n.selected {\r\n  border-right: 4px solid #68EFAD;\r\n}\r\n\r\nbutton {\r\n  margin: 30px 0;\r\n}\r\n\r\n.float-right {\r\n  float: right;\r\n}\r\n\r\n.example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <md-sidenav-container>\r\n    <md-sidenav #sidenav mode=\"side\" opened=\"true\">\r\n      <span class=\"name\"> <h2 routerLink=\"/home\"> Simon Krafft </h2> </span>\r\n      <md-divider></md-divider>\r\n      <md-nav-list>\r\n\r\n        <md-list-item (click)=\"toggleProjectsList()\">\r\n          <md-icon md-list-icon>build </md-icon>\r\n          <span> &nbsp; PROJECTS </span>\r\n          <span class=\"example-spacer\"></span>\r\n          <md-icon *ngIf=\"!projectsListActive\"> expand_more </md-icon>\r\n          <md-icon *ngIf=\"projectsListActive\"> expand_less </md-icon>\r\n        </md-list-item>\r\n\r\n        <ng-container *ngIf=\"projectsListActive\">\r\n          <md-list-item *ngFor=\"let project of projects\"\r\n                        class=\"sub-list\"\r\n                        [class.selected]=\"project === selectedItem\"\r\n                        (click)=\"onSelect(project)\"\r\n                        [@listAnimation]=\"''\"\r\n                        [routerLink]=\"project.link\">\r\n            <span> ○ {{project.name}} </span>\r\n          </md-list-item>\r\n        </ng-container>\r\n\r\n        <md-list-item [class.selected]=\"'job history' === selectedItem\"\r\n                      (click)=\"onSelect('job history')\"\r\n                      routerLink=\"/job-history\">\r\n          <md-icon md-list-icon>work</md-icon>\r\n          <span> &nbsp; JOB HISTORY </span>\r\n          <span class=\"example-spacer\"></span>\r\n        </md-list-item>\r\n\r\n        <md-list-item [class.selected]=\"'skills' === selectedItem\"\r\n                      (click)=\"onSelect('skills')\"\r\n                      routerLink=\"/skills\">\r\n          <md-icon md-list-icon>list</md-icon>\r\n          <span> &nbsp; SKILLS </span>\r\n          <span class=\"example-spacer\"></span>\r\n        </md-list-item>\r\n\r\n      </md-nav-list>\r\n    </md-sidenav>\r\n\r\n    <div class=\"header\">\r\n\r\n      <span class=\"title\">\r\n        <fa name=\"arrow-left\" *ngIf=\"sideNavActive\" (click)=\"sidenav.toggle(); sideNavIconToggle()\"></fa>\r\n        <fa name=\"arrow-right\" *ngIf=\"!sideNavActive\" (click)=\"sidenav.toggle(); sideNavIconToggle()\"></fa>\r\n        &nbsp; &nbsp; Computer Engineer | McGill University</span>\r\n      <span class=\"example-spacer\"></span>\r\n      <button md-button class=\"float-right\" (click)=\"openLinkedin()\">LINKEDIN</button>\r\n      <button md-button class=\"float-right\" (click)=\"openResume()\">RESUME</button>\r\n      <button md-button class=\"float-right\" (click)=\"toggleContactBox()\">CONTACT ME</button>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">       <!-- position relative, need to resize router outlet elements -->\r\n      <router-outlet></router-outlet>  <!-- position absolute -->\r\n    </div>\r\n\r\n  </md-sidenav-container>\r\n\r\n\r\n\r\n  <div id=\"contact-div\" *ngIf=\"contactBoxActive\" [@contactBoxAnimation]=\"''\">\r\n    <md-icon class=\"contact-icon\"> phone </md-icon><span> 914-620-7262 </span><br>\r\n    <md-icon class=\"contact-icon\"> email </md-icon><span> krafftsimon@gmail.com </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_list_animation__ = __webpack_require__("../../../../../src/app/animations/list.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_router_transition_animation__ = __webpack_require__("../../../../../src/app/animations/router-transition.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_contact_box_animation__ = __webpack_require__("../../../../../src/app/animations/contact-box.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppComponent = (function () {
    function AppComponent() {
        this.projectsListActive = false;
        this.contactBoxActive = false;
        this.sideNavActive = true;
        this.projects = [{ name: "Gym Progress Tracker", link: "/project1" },
            { name: "Java Mini Game", link: "/project2" },
            { name: "Pipelined Processor", link: "/project3" },
            { name: "RFID Tag", link: "/project4" },
            { name: "IoT", link: "/project5" },
            { name: "Fractal Renderer", link: "/project6" },
            { name: "Online Pong Game", link: "/project7" }];
    }
    AppComponent.prototype.toggleProjectsList = function () {
        this.projectsListActive = !this.projectsListActive;
        console.log(this.projectsListActive);
    };
    AppComponent.prototype.toggleContactBox = function () {
        this.contactBoxActive = !this.contactBoxActive;
    };
    AppComponent.prototype.sideNavIconToggle = function () {
        this.sideNavActive = !this.sideNavActive;
    };
    AppComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    AppComponent.prototype.openResume = function () {
        window.open("../assets/RESUME.pdf");
    };
    AppComponent.prototype.openLinkedin = function () {
        window.open("https://www.linkedin.com/in/simon-krafft-50611714a");
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_list_animation__["a" /* listAnimation */], __WEBPACK_IMPORTED_MODULE_2__animations_router_transition_animation__["a" /* routerTransitionAnimation */], __WEBPACK_IMPORTED_MODULE_3__animations_contact_box_animation__["a" /* contactBoxAnimation */]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project1_component__ = __webpack_require__("../../../../../src/app/project1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__project2_component__ = __webpack_require__("../../../../../src/app/project2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__project3_component__ = __webpack_require__("../../../../../src/app/project3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__project4_component__ = __webpack_require__("../../../../../src/app/project4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__project5_component__ = __webpack_require__("../../../../../src/app/project5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__project6_component__ = __webpack_require__("../../../../../src/app/project6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__project7_component__ = __webpack_require__("../../../../../src/app/project7.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__job_history_component__ = __webpack_require__("../../../../../src/app/job-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__skills_component__ = __webpack_require__("../../../../../src/app/skills.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__project1_component__["a" /* Project1Component */],
                __WEBPACK_IMPORTED_MODULE_10__project2_component__["a" /* Project2Component */],
                __WEBPACK_IMPORTED_MODULE_11__project3_component__["a" /* Project3Component */],
                __WEBPACK_IMPORTED_MODULE_12__project4_component__["a" /* Project4Component */],
                __WEBPACK_IMPORTED_MODULE_13__project5_component__["a" /* Project5Component */],
                __WEBPACK_IMPORTED_MODULE_14__project6_component__["a" /* Project6Component */],
                __WEBPACK_IMPORTED_MODULE_15__project7_component__["a" /* Project7Component */],
                __WEBPACK_IMPORTED_MODULE_16__job_history_component__["a" /* JobHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_17__skills_component__["a" /* SkillsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#divtext1 {\r\n  display: inline-block;\r\n  background-color: white;\r\n  max-width: 60%;\r\n  color: black;\r\n  padding: 1px 15px;\r\n  border-radius: 3px;\r\n  margin: 20px 10px;\r\n  text-align: justify;\r\n  vertical-align: top;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\n#divpic1 {\r\n  display: inline-block;\r\n  background-color: white;\r\n  padding: 10px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  max-width: 100px;\r\n  margin: 20px 10px;\r\n}\r\n\r\n#divpic2 {\r\n  display: inline-block;\r\n  background-color: white;\r\n  color: black;\r\n  border-radius: 3px;\r\n  max-width: 100px;\r\n  margin: 30px 20px 30px -10px;\r\n}\r\n\r\n#divtext2 {\r\n  vertical-align: top;\r\n  display: inline-block;\r\n  background-color: white;\r\n  max-width: 60%;\r\n  color: black;\r\n  padding: 1px 15px;\r\n  border-radius: 3px;\r\n  margin: 20px 10px;\r\n  text-align: justify;\r\n}\r\n\r\n#github-button {\r\n    font-weight: bold;\r\n    font-size: 16;\r\n}\r\n\r\n#divtextwrapper {\r\n  margin: 20px auto;\r\n  max-width: 650px;\r\n  vertical-align: top;\r\n  background-color: white;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n#div1 {\r\n  height: 100%;\r\n  vertical-align: middle;\r\n  max-width: 1300px;\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n#divpicwrapper {\r\n  margin: 20px auto;\r\n  max-width: 650px;\r\n  vertical-align: top;\r\n  background-color: white;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"div1\">\r\n\r\n  <div id=\"divtextwrapper\">\r\n    <div id=\"divtext1\">\r\n      <p> Hello, I recently graduated from McGill University with a bachelor's\r\n          degree in computer engineering. I am a French and American citizen currently located in New York,\r\n          and looking for an entry level job in software/computer engineering.\r\n      </p>\r\n    </div>\r\n    <div id=\"divpic1\">\r\n      <img src=\"../assets/pic9.jpg\" style=\"width:100%; height:auto;\">\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"divpicwrapper\">\r\n    <div id=\"divpic2\">\r\n      <img src=\"../assets/pic10.jpg\" style=\"width:120%; height:auto;\">\r\n    </div>\r\n\r\n    <div id=\"divtext2\">\r\n      <p> I have worked on several projects that involved many different engineering\r\n         topics. This includes electronic devices such as an AM Receiver and an Op-Amp, but also web applications using\r\n         Google's javascript framework: Angular 2. On this Website you'll find a description of some of the projects\r\n         I have worked on.\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__ = __webpack_require__("../../../../../src/app/animations/router-transition.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home',
            template: __webpack_require__("../../../../../src/app/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__["a" /* routerTransitionAnimation */]],
            host: { '[@routerTransitionAnimation]': "'true'",
                '[style.display]': "'block'",
                '[style.position]': "'absolute'",
                '[style.width]': "'100%'" }
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/job-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 1200px) {\r\n  .timeline-block .timeline-content {\r\n    float: right;\r\n  }\r\n\r\n  #timeline::before {\r\n    left: 5% !important;\r\n  }\r\n\r\n  .timeline-img {\r\n    left: 5% !important;\r\n  }\r\n\r\n  .timeline-content {\r\n    width: 78% !important;\r\n  }\r\n\r\n  .container {\r\n    max-width: 670px !important;\r\n  }\r\n}\r\n\r\n#timeline {\r\n  position: relative;\r\n  padding: 2em 0;\r\n  margin-top: 2em;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n#timeline::before {\r\n/* this is the vertical line */\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 4px;\r\n  background-color: #9B26AF;\r\n  left: 50%;\r\n  margin-left: -2px;\r\n}\r\n\r\n/*.container::after {\r\n  content: '';\r\n  display: table;\r\n  clear: both;\r\n}*/\r\n\r\n.container {\r\n  width: 90%;\r\n  max-width: 1170px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.timeline-block:first-child {\r\n  margin-top: 0;\r\n}\r\n\r\n.timeline-block {\r\n  position: relative;\r\n  margin: 4em 0;\r\n}\r\n\r\n.timeline-content {\r\n  color: black;\r\n  margin-left: 0;\r\n  width: 42%;\r\n  position: relative;\r\n  background: white;\r\n  border-radius: 0.25em;\r\n  padding: 1px 20px 10px 20px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  transition: all .2s ease-in-out;\r\n}\r\n\r\n.timeline-content:hover {\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\r\n  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.timeline-content .date {\r\n  position: absolute;\r\n  width: 100%;\r\n  left: 122%;\r\n  top: 6px;\r\n  font-size: 16px;\r\n  font-size: 1rem;\r\n}\r\n\r\n.timeline-block:nth-child(even) .timeline-content .date {\r\n  left: auto;\r\n  right: 122%;\r\n  text-align: right;\r\n}\r\n\r\n.timeline-block:nth-child(even) .timeline-content {\r\n  float: right;\r\n}\r\n\r\n.timeline-block:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.timeline-img {\r\n  width: 60px;\r\n  height: 60px;\r\n  left: 50%;\r\n  margin-left: -30px;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  background-color: #68EFAD;\r\n  z-index: 10;\r\n}\r\n\r\n.timeline-img img {\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n  position: relative;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin-left: -15px;\r\n  margin-top: -15px;\r\n}\r\n\r\nh2 {\r\n  margin-left: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/job-history.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"timeline\" class=\"container cssanimations\">\r\n  <div class=\"timeline-block\">\r\n    <div class=\"timeline-img\">\r\n      <img src=\"../assets/event-calendar2.png\" />\r\n    </div>\r\n    <div class=\"timeline-content\">\r\n      <h2>May 2017</h2>\r\n      <p> Graduated from McGill University with a bachelor's degree in computer engineering. </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"timeline-block\">\r\n    <div class=\"timeline-img\">\r\n      <img src=\"../assets/event-calendar2.png\" />\r\n    </div>\r\n    <div class=\"timeline-content\">\r\n      <h2>June - August 2013</h2>\r\n      <p> Started working at Christofle Silver Inc as an intern. </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"timeline-block\">\r\n    <div class=\"timeline-img\">\r\n      <img src=\"../assets/event-calendar2.png\" />\r\n    </div>\r\n    <div class=\"timeline-content\">\r\n      <h2>September 2012</h2>\r\n      <p> Began studying at McGill University in Canada. </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"timeline-block\">\r\n    <div class=\"timeline-img\">\r\n      <img src=\"../assets/event-calendar2.png\" />\r\n    </div>\r\n    <div class=\"timeline-content\">\r\n      <h2>May 2012</h2>\r\n      <p> French Baccalaureats - OIB </p>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/job-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__ = __webpack_require__("../../../../../src/app/animations/router-transition.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var JobHistoryComponent = (function () {
    function JobHistoryComponent() {
    }
    JobHistoryComponent.prototype.openPosterPresentation = function () {
        window.open("../assets/Poster_Presentation_Final_G15.pdf");
    };
    JobHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'job-history',
            template: __webpack_require__("../../../../../src/app/job-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/job-history.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__["a" /* routerTransitionAnimation */]],
            host: { '[@routerTransitionAnimation]': "'true'",
                '[style.display]': "'block'",
                '[style.position]': "'absolute'",
                '[style.width]': "'100%'" }
        })
    ], JobHistoryComponent);
    return JobHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#divtext1 {\r\n  background-color: white;\r\n  max-width: 100%;\r\n  color: black;\r\n  padding: 5px 25px;\r\n  border-radius: 3px;\r\n  margin: 20px 10px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  text-align: justify;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\n#divtext1 h4 {\r\n  text-align: center;\r\n}\r\n\r\n\r\n#divpic1 {\r\n  background-color: white;\r\n  padding: 10px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  max-width: 650px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  margin: 20px 10px;\r\n}\r\n\r\n.button {\r\n  font-weight: bold;\r\n  font-size: 16;\r\n  display: block;\r\n  margin: 25px 7px;\r\n}\r\n\r\n#divtextwrapper {\r\n  display: inline-block;\r\n  max-width: 400px;\r\n  vertical-align: top;\r\n}\r\n\r\n#div1 {\r\n  height: 100%;\r\n  vertical-align: middle;\r\n  max-width: 1300px;\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n#divpicwrapper {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project1.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"div1\">\r\n  <div id=\"divtextwrapper\">\r\n    <div id=\"divtext1\">\r\n      <h3>Web app to generate a lifting program and track your gym progress.</h3>\r\n      <p>Has an authentication system to allow user to register, log in, and save their progress.</p>\r\n      <p>Front-end was designed using Angular 4. The back-end uses nodejs and express.\r\n        The database used is mongoDB.</p>\r\n      <p>The server is hosted using a virtual machine rented from Google Compute Engine. </p>\r\n      <a md-raised-button color=\"accent\" target=\"_blank\" href='http://gainz-tracker.com' class=\"button\"> WEBSITE </a>\r\n      <a md-raised-button color=\"accent\" target=\"_blank\" href='https://github.com/krafftsimon/gainz-tracker' class=\"button\"> GITHUB </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"divpicwrapper\">\r\n    <div id=\"divpic1\">\r\n      <img src=\"../assets/pic1.jpg\" style=\"width:100%; height:auto;\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/project1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__ = __webpack_require__("../../../../../src/app/animations/router-transition.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Project1Component = (function () {
    function Project1Component() {
    }
    Project1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'proj1',
            template: __webpack_require__("../../../../../src/app/project1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project1.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__["a" /* routerTransitionAnimation */]],
            host: { '[@routerTransitionAnimation]': "'true'",
                '[style.display]': "'block'",
                '[style.position]': "'absolute'",
                '[style.width]': "'100%'" }
        })
    ], Project1Component);
    return Project1Component;
}());



/***/ }),

/***/ "../../../../../src/app/project2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#divtext1 {\r\n  background-color: white;\r\n  max-width: 100%;\r\n  color: black;\r\n  padding: 1px 15px;\r\n  border-radius: 3px;\r\n  margin: 20px 10px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  text-align: justify;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\n#divpic1 {\r\n  background-color: white;\r\n  padding: 10px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  max-width: 400px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  margin: 20px 10px;\r\n}\r\n\r\n#divpic2 {\r\n  background-color: white;\r\n  padding: 10px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  max-width: 400px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  margin: 20px 10px;\r\n}\r\n\r\n#github-button {\r\n  font-weight: bold;\r\n  font-size: 16;\r\n  display: block;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n#divtextwrapper {\r\n  display: inline-block;\r\n  max-width: 400px;\r\n  vertical-align: top;\r\n}\r\n\r\n#div1 {\r\n  height: 100%;\r\n  vertical-align: middle;\r\n  max-width: 900px;\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n#divpicwrapper {\r\n  display: inline-block;\r\n  max-width: 400px;\r\n  vertical-align: top;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project2.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"div1\">\r\n  <div id=\"divtextwrapper\">\r\n    <div id=\"divtext1\">\r\n      <h3> Java Bomberman Mini Game </h3>\r\n      <p>Group project for a software engineering class.</p>\r\n      <p>Strong focus on all stages of software development. From communicating with\r\n        the client in order to understand the requirements, to testing.</p>\r\n      <p>Detailed documentation (Software Requirement Specification, and Software Architecture Document) is available on github</p>\r\n      <a md-raised-button color=\"accent\" target=\"_blank\" href='https://github.com/krafftsimon/Bomberman-Minigame' id=\"github-button\"> GITHUB </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"divpicwrapper\">\r\n    <div id=\"divpic1\">\r\n      <img src=\"../assets/pic2.jpg\" style=\"width:100%; height:auto;\">\r\n    </div>\r\n    <div id=\"divpic2\">\r\n      <img src=\"../assets/pic3.jpg\" style=\"width:100%; height:auto;\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/project2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__ = __webpack_require__("../../../../../src/app/animations/router-transition.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Project2Component = (function () {
    function Project2Component() {
    }
    Project2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'proj2',
            template: __webpack_require__("../../../../../src/app/project2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project2.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__["a" /* routerTransitionAnimation */]],
            host: { '[@routerTransitionAnimation]': "'true'",
                '[style.display]': "'block'",
                '[style.position]': "'absolute'",
                '[style.width]': "'100%'" }
        })
    ], Project2Component);
    return Project2Component;
}());



/***/ }),

/***/ "../../../../../src/app/project3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#divtext1 {\r\n  background-color: white;\r\n  max-width: 100%;\r\n  color: black;\r\n  padding: 1px 15px;\r\n  border-radius: 3px;\r\n  margin: 20px 10px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  text-align: justify;\r\n}\r\n\r\n#divpic1 {\r\n  background-color: white;\r\n  padding: 10px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  margin: 20px 10px;\r\n  max-width: 250px;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\n#divpic2 {\r\n  background-color: white;\r\n  padding: 10px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  margin: 10px 10px;\r\n}\r\n\r\n#github-button {\r\n  font-weight: bold;\r\n  font-size: 16;\r\n  display: block;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n#divtextwrapper {\r\n  display: inline-block;\r\n  max-width: 400px;\r\n  vertical-align: top;\r\n}\r\n\r\n#div1 {\r\n  height: 100%;\r\n  vertical-align: middle;\r\n  max-width: 1200px;\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n#divpicwrapper {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project3.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"div1\">\r\n  <div id=\"divtextwrapper\">\r\n    <div id=\"divtext1\">\r\n      <h3> 5 stage MIPS pipelined processor </h3>\r\n      <p>Group project for a computer architecture class.</p>\r\n      <p> The processor has five stages (IF, ID, EX, MEM, WB) and was designed in VHDL.\r\n          It supports branch prediction (1-bit or 2-bit), forwarding, and hazard detection.</p>\r\n      <p> The table on the right shows all the MIPS instructions implemented.</p>\r\n      <a md-raised-button color=\"accent\" target=\"_blank\" href='https://github.com/krafftsimon/ECSE425_GROUP5' id=\"github-button\"> GITHUB </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"divpicwrapper\">\r\n    <div id=\"divpic1\">\r\n      <img src=\"../assets/pic4.jpg\" style=\"width:100%; height:auto;\">\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"divpic2\">\r\n    <img src=\"../assets/pic5.jpg\" style=\"width:100%; height:auto;\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/project3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__ = __webpack_require__("../../../../../src/app/animations/router-transition.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Project3Component = (function () {
    function Project3Component() {
    }
    Project3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'proj3',
            template: __webpack_require__("../../../../../src/app/project3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project3.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__["a" /* routerTransitionAnimation */]],
            host: { '[@routerTransitionAnimation]': "'true'",
                '[style.display]': "'block'",
                '[style.position]': "'absolute'",
                '[style.width]': "'100%'" }
        })
    ], Project3Component);
    return Project3Component;
}());



/***/ }),

/***/ "../../../../../src/app/project4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#divtext1 {\r\n  background-color: white;\r\n  max-width: 100%;\r\n  color: black;\r\n  padding: 1px 15px;\r\n  border-radius: 3px;\r\n  margin: 20px 10px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\np {\r\n  text-align: justify;\r\n}\r\n\r\nbutton {\r\n  margin: 20px auto;\r\n  font-weight: bold;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\n#divpic1 {\r\n  background-color: white;\r\n  padding: 10px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  margin: 20px 10px;\r\n}\r\n\r\n#divpic2 {\r\n  background-color: white;\r\n  padding: 10px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  margin: 20px 10px;\r\n}\r\n\r\n#divtext2 {\r\n  background-color: white;\r\n  padding: 20px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  margin: 20px 10px;\r\n  max-width: 100%;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n#divtextwrapper {\r\n  display: inline-block;\r\n  max-width: 550px;\r\n  vertical-align: top;\r\n}\r\n\r\n#div1 {\r\n  height: 100%;\r\n  vertical-align: middle;\r\n  max-width: 1200px;\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n#divpicwrapper {\r\n  display: inline-block;\r\n  max-width: 600px;\r\n  vertical-align: top;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project4.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"div1\">\r\n  <div id=\"divtextwrapper\">\r\n    <div id=\"divtext1\">\r\n      <h3> Humidity Sensing Low Cost Passive Chipless RFID Tag </h3>\r\n      <p> Group design project. The goal was to design a radio-frequency identification device that is easy\r\n          to manufacture (low cost), with no internal power source (passive), that does not require a microchip (chipless),\r\n          and that can detect changes in humidity. </p>\r\n      <p> The first picture shows our experimental results for different\r\n          levels of humidity. Our design process is illustrated by the second picture. The third picture is a high level\r\n          block diagram of the system.</p>\r\n      <button md-raised-button color=\"accent\" (click)=\"openPosterPresentation()\">POSTER PRESENTATION</button>\r\n    </div>\r\n    <div id=\"divtext2\">\r\n      <img src=\"../assets/pic8.jpg\" style=\"width:100%; height:auto;\">\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"divpicwrapper\">\r\n    <div id=\"divpic1\">\r\n      <img src=\"../assets/pic6.jpg\" style=\"width:100%; height:auto;\">\r\n    </div>\r\n    <div id=\"divpic2\">\r\n      <img src=\"../assets/pic7.jpg\" style=\"width:100%; height:auto;\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/project4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__ = __webpack_require__("../../../../../src/app/animations/router-transition.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Project4Component = (function () {
    function Project4Component() {
    }
    Project4Component.prototype.openPosterPresentation = function () {
        window.open("../assets/Poster_Presentation_Final_G15.pdf");
    };
    Project4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'proj4',
            template: __webpack_require__("../../../../../src/app/project4.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project4.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__["a" /* routerTransitionAnimation */]],
            host: { '[@routerTransitionAnimation]': "'true'",
                '[style.display]': "'block'",
                '[style.position]': "'absolute'",
                '[style.width]': "'100%'" }
        })
    ], Project4Component);
    return Project4Component;
}());



/***/ }),

/***/ "../../../../../src/app/project5.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#divtext1 {\r\n  background-color: white;\r\n  max-width: 100%;\r\n  color: black;\r\n  padding: 1px 15px;\r\n  border-radius: 3px;\r\n  margin: 20px 10px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  text-align: justify;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\nh4 {\r\n  margin-bottom: 10px;\r\n  margin-top: 5px;\r\n}\r\n\r\n#divpic1 {\r\n  background-color: white;\r\n  padding: 10px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  max-width: 650px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  margin: 20px 10px;\r\n}\r\n\r\n#divpic2 {\r\n  background-color: white;\r\n  padding: 10px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  max-width: 400px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  margin: 20px 10px;\r\n}\r\n\r\n#divtext2 {\r\n  background-color: white;\r\n  padding: 20px 20px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  margin: 20px 10px;\r\n  max-width: 100%;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n#github-button {\r\n    font-weight: bold;\r\n    font-size: 16;\r\n}\r\n\r\n#divtextwrapper {\r\n  display: inline-block;\r\n  max-width: 400px;\r\n  vertical-align: top;\r\n}\r\n\r\n#div1 {\r\n  height: 100%;\r\n  vertical-align: middle;\r\n  max-width: 1300px;\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n#divpicwrapper {\r\n  max-width: 400px;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project5.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"div1\">\r\n  <div id=\"divtextwrapper\">\r\n    <div id=\"divtext1\">\r\n      <h3>Sensor Data Management From Hardware To Cloud.</h3>\r\n      <p>The goal of the project is to understand how data can flow between a number of different devices </p>\r\n      <p>Using the accelerometer on the F4 Discovery microcontroller we read a few seconds of data.\r\n        This data is then sent over to the Nucleo board. Once it is received it is transfered\r\n        to a mobile device using Bluetooth Low Energy (BLE). This device then communicates with\r\n        Amazon Web Service (AWS) and stores the data into an S3 bucket. A lambda function is then used to\r\n        convert the acceleration data into the pitch and roll of the F4 Discovery board. </p>\r\n      <p> The diagram illustrates the entire process. The second picture is the STM32F4 Discovery board. </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"divpicwrapper\">\r\n    <div id=\"divpic1\">\r\n      <img src=\"../assets/pic11.jpg\" style=\"width:100%; height:auto;\">\r\n    </div>\r\n    <div id=\"divpic2\">\r\n      <img src=\"../assets/pic12.jpg\" style=\"width:100%; height:auto;\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/project5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__ = __webpack_require__("../../../../../src/app/animations/router-transition.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Project5Component = (function () {
    function Project5Component() {
    }
    Project5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'proj5',
            template: __webpack_require__("../../../../../src/app/project5.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project5.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__["a" /* routerTransitionAnimation */]],
            host: { '[@routerTransitionAnimation]': "'true'",
                '[style.display]': "'block'",
                '[style.position]': "'absolute'",
                '[style.width]': "'100%'" }
        })
    ], Project5Component);
    return Project5Component;
}());



/***/ }),

/***/ "../../../../../src/app/project6.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#divtext1 {\r\n  background-color: white;\r\n  max-width: 100%;\r\n  color: black;\r\n  padding: 1px 15px;\r\n  border-radius: 3px;\r\n  margin: 20px 10px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  text-align: justify;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\nh4 {\r\n  margin-bottom: 10px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.button {\r\n  font-weight: bold;\r\n  font-size: 16;\r\n  display: block;\r\n  margin: 25px 15px;\r\n}\r\n\r\n#divpic1 {\r\n  background-color: white;\r\n  padding: 10px;\r\n  color: black;\r\n  border-radius: 3px;\r\n\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  margin: 20px 10px;\r\n}\r\n\r\n#divpic2 {\r\n  background-color: white;\r\n  padding: 10px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  margin: 20px 10px;\r\n}\r\n\r\n#github-button {\r\n    font-weight: bold;\r\n    font-size: 16;\r\n}\r\n\r\n#divtextwrapper {\r\n  display: inline-block;\r\n  max-width: 400px;\r\n  vertical-align: top;\r\n}\r\n\r\n#div1 {\r\n  height: 100%;\r\n  vertical-align: middle;\r\n  max-width: 1300px;\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n#divpicwrapper {\r\n  max-width: 500px;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.equation {\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project6.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"div1\">\r\n  <div id=\"divtextwrapper\">\r\n    <div id=\"divtext1\">\r\n      <h3>Mandelbrot Set Renderer</h3>\r\n      <p> The MandelBrot Set represents all the points on the complex plane that remain bounded\r\n          when plugged into the following recurrence relation:</p>\r\n      <p class=\"equation\">Z<sub>n+1</sub> = Z<sub>n</sub><sup>2</sup> + c  </p>\r\n      <p>Where: </p>\r\n      <p class=\"equation\"> Z<sub>0</sub> = c = x + iy </p>\r\n      <p> For efficiency purposes we select a threshold (usually 2) and we assume that if this threshold is\r\n          exceeded, then the sequence for that specific number diverges to infinity. As a result we color this point\r\n          based on the number of iterations it took to go over the limit. If after a certain number of iterations,\r\n          the threshold is not reached, we color the point in black.</p>\r\n      <p> The renderer allows the user change the maximum number of iterations, the threshold, the light coefficient\r\n          and the color scheme. The user can also zoom in and out. </p>\r\n      <a md-raised-button color=\"accent\" target=\"_blank\" href='http://fractal.krafftsimon.com' class=\"button\"> WEBSITE </a>\r\n      <a md-raised-button color=\"accent\" target=\"_blank\" href='https://github.com/krafftsimon/fractal-renderer' class=\"button\"> GITHUB </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"divpicwrapper\">\r\n    <div id=\"divpic1\">\r\n      <img src=\"../assets/pic13.jpg\" style=\"width:100%; height:auto;\">\r\n    </div>\r\n    <div id=\"divpic2\">\r\n      <img src=\"../assets/pic14.jpg\" style=\"width:100%; height:auto;\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/project6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project6Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__ = __webpack_require__("../../../../../src/app/animations/router-transition.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Project6Component = (function () {
    function Project6Component() {
    }
    Project6Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'proj6',
            template: __webpack_require__("../../../../../src/app/project6.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project6.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__["a" /* routerTransitionAnimation */]],
            host: { '[@routerTransitionAnimation]': "'true'",
                '[style.display]': "'block'",
                '[style.position]': "'absolute'",
                '[style.width]': "'100%'" }
        })
    ], Project6Component);
    return Project6Component;
}());



/***/ }),

/***/ "../../../../../src/app/project7.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#divtext1 {\r\n  background-color: white;\r\n  max-width: 100%;\r\n  color: black;\r\n  padding: 1px 15px;\r\n  border-radius: 3px;\r\n  margin: 20px 10px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  text-align: justify;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\nh4 {\r\n  margin-bottom: 10px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.button {\r\n  font-weight: bold;\r\n  font-size: 16;\r\n  display: block;\r\n  margin: 25px 15px;\r\n}\r\n\r\n#divpic1 {\r\n  background-color: white;\r\n  padding: 10px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  margin: 20px 10px;\r\n}\r\n\r\n#divpic2 {\r\n  background-color: white;\r\n  padding: 10px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  margin: 20px 10px;\r\n}\r\n\r\n#divpic3 {\r\n  background-color: white;\r\n  padding: 10px;\r\n  color: black;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  margin: 20px 10px;\r\n}\r\n\r\n#github-button {\r\n    font-weight: bold;\r\n    font-size: 16;\r\n}\r\n\r\n#divtextwrapper {\r\n  display: inline-block;\r\n  max-width: 600px;\r\n  vertical-align: top;\r\n}\r\n\r\n#div1 {\r\n  height: 100%;\r\n  vertical-align: middle;\r\n  max-width: 1300px;\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n#divpicwrapper {\r\n  max-width: 500px;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project7.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"div1\">\r\n  <div id=\"divtextwrapper\">\r\n    <div id=\"divtext1\">\r\n      <h3>Online Multiplayer Pong game</h3>\r\n      <p> This mini-game was created using the JavaScript library Socket.io, which enables\r\n          realtime communication between the clients and the server.</p>\r\n      <p> It is structured using the Authoritative Server approach. This means that the client tells the\r\n          server what it wishes to do, and the server decides how to change the game state. The client can never\r\n          directly modify the state of the game. The main purpose of this architecture is to make cheating a lot harder.\r\n          In this game for example, the client cannot cheat by teleporting its racket right under the ball, it can only\r\n          tell the server which keys were pressed. Upon receving the inputs, the server will apply those inputs and send the new position\r\n          to all the clients.</p>\r\n      <p> To hide the latency from the players and make the game more enjoyable, three techniques were used; Client-Side Prediction,\r\n          Server Reconciliation, and Interpolation.</p>\r\n      <p> Client-Side Prediction consists in showing the player, the result of their actions without waiting for the server. Once the client\r\n          receives the true state of the game it can either correct the position of the player (incorrect prediction) or\r\n          do nothing (correct prediction). </p>\r\n      <p> Server Reconciliation is used to solve the synchronization issues between the server and the client when using Client-Side Prediction.</p>\r\n      <p> Since the server sends updates to the clients only once every 100 ms, the enemy players will jump to the new position on every\r\n          new update, instead of smoothly moving there. Interpolation solves this problem (to some extent), by showing the player what happens in between.\r\n          Say at t = 100, the client receives data. Since the client knows the\r\n          position at t = 0, from t = 100 to t = 200, it can show what the player did from t = 0 to t = 100. The only downside\r\n          is that the movements will be a bit late.\r\n      <a md-raised-button color=\"accent\" target=\"_blank\" href='http://pong.krafftsimon.com' class=\"button\"> WEBSITE </a>\r\n      <a md-raised-button color=\"accent\" target=\"_blank\" href='https://github.com/krafftsimon/mp-pong-game' class=\"button\"> GITHUB </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"divpicwrapper\">\r\n    <div id=\"divpic1\">\r\n      <img src=\"../assets/pic15.jpg\" style=\"width:100%; height:auto;\">\r\n    </div>\r\n    <div id=\"divpic2\">\r\n      <img src=\"../assets/pic16.jpg\" style=\"width:100%; height:auto;\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/project7.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project7Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__ = __webpack_require__("../../../../../src/app/animations/router-transition.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Project7Component = (function () {
    function Project7Component() {
    }
    Project7Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'proj7',
            template: __webpack_require__("../../../../../src/app/project7.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project7.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__["a" /* routerTransitionAnimation */]],
            host: { '[@routerTransitionAnimation]': "'true'",
                '[style.display]': "'block'",
                '[style.position]': "'absolute'",
                '[style.width]': "'100%'" }
        })
    ], Project7Component);
    return Project7Component;
}());



/***/ }),

/***/ "../../../../../src/app/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 1038px) {\r\n  .container {\r\n    display: inline !important;\r\n  }\r\n\r\n  .left {\r\n    width: 100% !important;\r\n  }\r\n\r\n  .right {\r\n    width: 100% !important;\r\n  }\r\n}\r\n\r\n.container {\r\n  margin: 50px 0 0 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.star {\r\n  color: gold;\r\n}\r\n\r\n.empty-star {\r\n  color: black;\r\n}\r\n\r\n.skill-box {\r\n  background-color: white;\r\n  border-radius: 3px;\r\n  margin: 30px 30px;\r\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\r\n  color: black;\r\n  min-height: 60px;\r\n  line-height: 55px;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  font-size: 20px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  transition: all .2s ease-in-out;\r\n}\r\n\r\n.skill-box:hover {\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\r\n  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n\r\n.left {\r\n  width: 40%;\r\n}\r\n\r\n.right {\r\n  width: 40%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"left\">\r\n    <div *ngFor=\"let skill of skillsLeft\" class=\"skill-box\">\r\n      {{skill.name}}\r\n      <span class=\"star\">{{skill.star}}<span class=\"empty-star\">{{skill.emptyStar}}</span></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"right\">\r\n    <div *ngFor=\"let skill of skillsRight\" class=\"skill-box\">\r\n      {{skill.name}}\r\n      <span class=\"star\">{{skill.star}}<span class=\"empty-star\">{{skill.emptyStar}}</span></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__ = __webpack_require__("../../../../../src/app/animations/router-transition.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SkillsComponent = (function () {
    function SkillsComponent() {
        this.skillsLeft = [{ name: "HTML", star: "★★★", emptyStar: "☆" },
            { name: "JavaScript", star: "★★★", emptyStar: "☆" },
            { name: "Angular 2+", star: "★★★", emptyStar: "☆" },
            { name: "Redux", star: "★★", emptyStar: "☆☆" },
            { name: "Express.js", star: "★★", emptyStar: "☆☆" },
            { name: "Java", star: "★★", emptyStar: "☆☆" },
            { name: "C++", star: "★★", emptyStar: "☆☆" },
            { name: "Python", star: "★★", emptyStar: "☆☆" },
            { name: "English", star: "★★★★", emptyStar: "" }];
        this.skillsRight = [{ name: "CSS", star: "★★★", emptyStar: "☆" },
            { name: "TypeScript", star: "★★", emptyStar: "☆☆" },
            { name: "React", star: "★★", emptyStar: "☆☆" },
            { name: "Node.js", star: "★★", emptyStar: "☆☆" },
            { name: "Socket.io", star: "★★", emptyStar: "☆☆" },
            { name: "VHDL", star: "★★", emptyStar: "☆☆" },
            { name: "ARM Assembly", star: "★★", emptyStar: "☆☆" },
            { name: "French", star: "★★★★", emptyStar: "" }];
    }
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'skills',
            template: __webpack_require__("../../../../../src/app/skills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_router_transition_animation__["a" /* routerTransitionAnimation */]],
            host: { '[@routerTransitionAnimation]': "'true'",
                '[style.display]': "'block'",
                '[style.position]': "'absolute'",
                '[style.width]': "'100%'" }
        })
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map