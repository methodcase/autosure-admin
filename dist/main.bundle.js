webpackJsonp([0,3],{

/***/ 345:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 345;


/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(453);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/IBM_ADMIN/bluemix/autosure-admin/src/main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.models = [];
        this.makes = [];
        this.url = 'https://autosure.mybluemix.net/api/makes';
        this.url2 = 'https://autosure.mybluemix.net/api/models';
        this.url3 = 'https://autosure.mybluemix.net/api/compute';
        this.title = 'Autosure.me';
        this.year = 0;
        this.value = 0;
        this.computedValue = 0;
    }
    AppComponent.prototype.getMakes = function () {
        return this.http.get(this.url).map(function (x) { return x.json(); });
    };
    AppComponent.prototype.getModels = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var make = args[0];
        var data = { where: { makeId: make } };
        var where = (args.length > 0) ? "?filter=" + JSON.stringify(data) : '';
        return this.http.get(this.url2.concat(where)).map(function (x) { return x.json(); });
    };
    AppComponent.prototype.getCompute = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var year = args[0], value = args[1];
        var where = "{\"year\":\"" + year + "\",\"value\":\"" + value + "\"}";
        return this.http.get(this.url3.concat("?data=").concat(where)).map(function (x) { return x.json(); });
    };
    AppComponent.prototype.compute = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        this.getCompute(this.year, this.value).subscribe(function (items) { return _this.computedValue = items; });
    };
    AppComponent.prototype.selectMake = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var make = args[0];
        this.getModels(make).subscribe(function (items) {
            _this.models = items;
        });
    };
    AppComponent.prototype.selectModel = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var make = args[0];
        this.getCompute(this.year, make).subscribe(function (items) {
            _this.computedValue = items.value;
        });
    };
    AppComponent.prototype.selectYear = function (year) {
        this.year = year;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMakes().subscribe(function (items) {
            _this.makes = items;
        });
        this.getModels().subscribe(function (items) {
            _this.models = items;
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(613),
            styles: [__webpack_require__(610)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/IBM_ADMIN/bluemix/autosure-admin/src/app.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icon_icon_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quote_icon_quote_icon_component__ = __webpack_require__(455);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__icon_icon_component__["a" /* IconComponent */],
                __WEBPACK_IMPORTED_MODULE_6__quote_icon_quote_icon_component__["a" /* QuoteIconComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/IBM_ADMIN/bluemix/autosure-admin/src/app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconComponent = (function () {
    function IconComponent() {
    }
    IconComponent.prototype.ngOnInit = function () {
    };
    IconComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-icon',
            template: __webpack_require__(614),
            styles: [__webpack_require__(611)]
        }), 
        __metadata('design:paramtypes', [])
    ], IconComponent);
    return IconComponent;
}());
//# sourceMappingURL=C:/Users/IBM_ADMIN/bluemix/autosure-admin/src/icon.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteIconComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuoteIconComponent = (function () {
    function QuoteIconComponent() {
    }
    QuoteIconComponent.prototype.ngOnInit = function () {
    };
    QuoteIconComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-quote-icon',
            template: __webpack_require__(615),
            styles: [__webpack_require__(612)]
        }), 
        __metadata('design:paramtypes', [])
    ], QuoteIconComponent);
    return QuoteIconComponent;
}());
//# sourceMappingURL=C:/Users/IBM_ADMIN/bluemix/autosure-admin/src/quote-icon.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/IBM_ADMIN/bluemix/autosure-admin/src/environment.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/IBM_ADMIN/bluemix/autosure-admin/src/polyfills.js.map

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "h1 {\r\n        font-size: 10vw;\r\n    }\r\nhtml{\r\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#eab92d+0,c79810+100;Yellow+3D+%232 */\r\nbackground: #eab92d; /* Old browsers */ /* FF3.6-15 */\r\nbackground: -webkit-linear-gradient(top,  #eab92d 0%,#c79810 100%); /* Chrome10-25,Safari5.1-6 */\r\nbackground: linear-gradient(to bottom,  #eab92d 0%,#c79810 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eab92d', endColorstr='#c79810',GradientType=0 ); /* IE6-9 */\r\n\r\n}\r\n@media only screen and (min-width: 750px) {\r\n    h1 {\r\n        font-size:50px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1190px) {\r\n    h1 {\r\n        font-size:80px;\r\n    }\r\n}"

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = ".icon {\r\n  display: inline-block;\r\n  width: 1em;\r\n  height: 1em;\r\n  stroke-width: 0;\r\n  stroke: currentColor;\r\n  fill: currentColor;\r\n}"

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse bg-inverse\">\r\n  <div class=\"container d-flex justify-content-between\">\r\n    <a href=\"#\" class=\"navbar-brand\"><app-icon></app-icon> {{title}}</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  </div>\r\n</div>\r\n<section class=\"jumbotron text-center\">\r\n  <div class=\"container\">\r\n    <h1 class=\"jumbotron-heading\" class=\"hidden-xs-down\"> <app-icon></app-icon> Autosure.me</h1>\r\n    <p class=\"lead text-muted hidden-xs-down\">Get your auto insurace quotes in an instant.</p>    \r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col col-lg-4 col-sm-6 col-xs-6 col-12 \">My car is a \r\n          <select name=\"\" id=\"\" class=\"form-control\" (change)=selectYear($event.target.value)>\r\n            <option></option>\r\n            <option *ngFor=\"let year of [1,2,3,4,5,6]\"> 201{{year}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col col-lg-4 col-sm-6 col-12\">Make\r\n          <select name=\"\" id=\"\" class=\"form-control\" (change)=selectMake($event.target.value)>\r\n            <option [value]=\"\"></option>\r\n            <option *ngFor=\"let make of makes\" [value]=\"make.makeId\">{{make.car_make}}</option>\r\n          </select> \r\n        </div>\r\n        <div class=\"col col-lg-4 col-xs-12 col-12\">Model\r\n          <select name=\"\" id=\"\" class=\"form-control\" (change)=selectModel($event.target.value)>\r\n            <option></option>\r\n            <option [value]=\"model.value\" *ngFor=\"let model of models\">{{model.car_model}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\"><p class=\"lead text-muted\">Insured for:</p></div>\r\n        <div class=\"col-12\"><h2>PHP  {{computedValue.toLocaleString('ph-PH',{currency:'PHP'})}}</h2></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\"><button (click)=compute class=\"btn btn-primary btn-lg\">Get a quote</button></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      \r\n\r\n      <ul>\r\n        <li *ngFor=\"let model of models\">\r\n          {{model.car_model}} - {{model.value.toLocaleString('ph-PH',{currency:'PHP'})}} - {{model.modelId}}\r\n        </li>\r\n      </ul>\r\n\r\n      Year\r\n      <select name=\"\" id=\"\" (change)=selectYear($event.target.value)>\r\n        <option></option>\r\n        <option *ngFor=\"let year of [1,2,3,4,5,6]\"> 201{{year}}</option>\r\n      </select> Make\r\n            <select name=\"\" id=\"\" (change)=selectMake($event.target.value)>\r\n        <option [value]=\"\"></option>\r\n        <option *ngFor=\"let make of makes\" [value]=\"make.makeId\">{{make.car_make}}</option>\r\n      </select> Model\r\n      <select name=\"\" id=\"\" (change)=selectModel($event.target.value)>\r\n        <option></option>\r\n        <option [value]=\"model.value\" *ngFor=\"let model of models\">{{model.car_model}}</option>\r\n      </select>\r\n      <div>Insured value:\r\n        <h2> PHP {{computedValue.toLocaleString('ph-PH',{currency:'PHP'})}}</h2>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = "<svg class=\"icon\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\">\r\n    <path class=\"path1\" d=\"M24.832 11.445c-0.186-0.278-0.498-0.445-0.832-0.445h-1c-0.553 0-1 0.447-1 1v6c0 0.553 0.447 1 1 1h4c0.553 0 1-0.447 1-1v-1.5c0-0.197-0.059-0.391-0.168-0.555l-3-4.5zM27 18h-4v-6h1l3 4.5v1.5zM31.496 15.336l-4-6c-0.558-0.837-1.492-1.336-2.496-1.336h-4v-2c0-1.654-1.346-3-3-3h-15c-1.654 0-3 1.346-3 3v11c0 1.654 1.346 3 3 3v0 3c0 1.654 1.346 3 3 3h1.142c0.447 1.721 2 3 3.859 3 1.857 0 3.41-1.279 3.857-3h5.282c0.447 1.721 2 3 3.859 3 1.857 0 3.41-1.279 3.857-3h1.144c1.654 0 3-1.346 3-3v-6c0-0.594-0.174-1.17-0.504-1.664zM3 18c-0.552 0-1-0.447-1-1v-11c0-0.553 0.448-1 1-1h15c0.553 0 1 0.447 1 1v11c0 0.553-0.447 1-1 1h-15zM11.001 27c-1.105 0-2-0.896-2-2s0.895-2 2-2c1.104 0 2 0.896 2 2s-0.897 2-2 2zM24 27c-1.105 0-2-0.896-2-2s0.895-2 2-2c1.104 0 2 0.896 2 2s-0.896 2-2 2zM30 23c0 0.553-0.447 1-1 1h-1.143c-0.447-1.721-2-3-3.857-3-1.859 0-3.412 1.279-3.859 3h-5.282c-0.447-1.721-2-3-3.857-3-1.859 0-3.412 1.279-3.859 3h-1.143c-0.552 0-1-0.447-1-1v-3h13c1.654 0 3-1.346 3-3v-7h4c0.334 0 0.646 0.167 0.832 0.445l4 6c0.109 0.164 0.168 0.358 0.168 0.555v6z\"></path>\r\n</svg>"

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = "<svg class=\"icon\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\">\r\n  <path class=\"path1\" d=\"M31.414 7.585l-6-6c-0.375-0.375-0.885-0.585-1.414-0.585h-21c-1.654 0-3 1.345-3 3v24c0 1.654 1.346 3 3 3h26c1.654 0 3-1.346 3-3v-19c0-0.531-0.211-1.040-0.586-1.415zM30 28c0 0.553-0.447 1-1 1h-26c-0.553 0-1-0.447-1-1v-24c0-0.553 0.447-1 1-1h20v4h-0.002c0 1.657 1.344 3 3 3h4.002v18zM26.998 9h-1c-1.102 0-2-0.897-2-2h0.002v-4l6 6h-3.002zM15.5 8c-0.276 0-0.5-0.223-0.5-0.5s0.224-0.5 0.5-0.5h5c0.275 0 0.5 0.224 0.5 0.5s-0.225 0.5-0.5 0.5h-5zM15.5 11c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h5c0.275 0 0.5 0.224 0.5 0.5s-0.225 0.5-0.5 0.5h-5zM15 13.5c0-0.277 0.224-0.5 0.5-0.5h12c0.275 0 0.5 0.224 0.5 0.5s-0.225 0.5-0.5 0.5h-12c-0.276 0-0.5-0.224-0.5-0.5zM27.5 19c0.275 0 0.5 0.223 0.5 0.5 0 0.275-0.225 0.5-0.5 0.5h-23c-0.276 0-0.5-0.225-0.5-0.5 0-0.277 0.224-0.5 0.5-0.5h23zM27.5 22c0.275 0 0.5 0.223 0.5 0.5 0 0.275-0.225 0.5-0.5 0.5h-23c-0.276 0-0.5-0.225-0.5-0.5 0-0.277 0.224-0.5 0.5-0.5h23zM27.5 25c0.275 0 0.5 0.223 0.5 0.5 0 0.275-0.225 0.5-0.5 0.5h-23c-0.276 0-0.5-0.225-0.5-0.5 0-0.277 0.224-0.5 0.5-0.5h23zM27.5 16c0.275 0 0.5 0.224 0.5 0.5s-0.225 0.5-0.5 0.5h-23c-0.276 0-0.5-0.223-0.5-0.5s0.224-0.5 0.5-0.5h23zM5 14h7c0.553 0 1-0.447 1-1v-6c0-0.553-0.447-1-1-1h-7c-0.553 0-1 0.447-1 1v6c0 0.552 0.447 1 1 1zM6 8h5v4h-5v-4z\"></path>\r\n</svg>"

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ })

},[635]);
//# sourceMappingURL=main.bundle.map