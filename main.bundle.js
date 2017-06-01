webpackJsonp([2,5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<div class=\"container text-center\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-4\">\r\n            <img class=\"img-responsive\" src=\"../assets/logotype.svg\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-4\">\r\n            <img class=\"img-responsive\" src=\"../assets/usapllogotrans_small.png\" />\r\n        </div>\r\n    </div>\r\n    <br />\r\n    <h1 class=\"text-center\">{{title}}</h1>\r\n    <label class=\"lead\">\r\n        {{instruction}}\r\n    </label>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 form-inline\">\r\n            <div class=\"col-xs-6 col-sm-5\">\r\n                <md-input-container  style=\"width:100%;\">\r\n                    <input [(ngModel)]=\"p1_text\" mdInput placeholder=\"Player 1\" [mdAutocomplete]=\"auto\" (ngModelChange)=\"SearchName(p1_text, 0)\">\r\n                </md-input-container>\r\n\r\n                <md-autocomplete #auto=\"mdAutocomplete\" [displayWith]=\"displayFn\" >\r\n                    <md-option *ngFor=\"let p of RatingResults[0]\" [value]=\"p\">\r\n                        <div (click)=\"SelectPlayer(p,0)\">{{ p.firstName + ' ' + p.lastName  }} | <b>{{ p.rating}}</b></div>\r\n                    </md-option>\r\n                </md-autocomplete>\r\n                <table *ngIf=\"players[0] && players[1]\" class=\"table table-responsive table-bordered table-hover\">\r\n                    <tr>\r\n                        <td><label>Long</label></td>\r\n                        <td>\r\n                            <label>Race-To</label>: {{service.calculateRace(1.0, players[0].rating, players[1].rating).raceToOne}}<br />\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><label>Short</label></td>\r\n                        <td>\r\n                            <label>Race-To</label>: {{service.calculateRace(.75, players[0].rating, players[1].rating).raceToOne}}<br />\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <div class=\"lead hidden-xs col-sm-2\">\r\n                &nbsp;&nbsp;VS&nbsp;&nbsp;\r\n            </div>\r\n            <div class=\"col-xs-6 col-sm-5\">\r\n                <md-input-container style=\"width:100%;\">\r\n                    <input [(ngModel)]=\"p2_text\" mdInput placeholder=\"Player 2\" [mdAutocomplete]=\"auto2\" (ngModelChange)=\"SearchName(p2_text, 1)\">\r\n                </md-input-container>\r\n\r\n                <md-autocomplete #auto2=\"mdAutocomplete\" [displayWith]=\"displayFn\" style=\"width:500px;\">\r\n                    <md-option *ngFor=\"let p of RatingResults[1]\" [value]=\"p\">\r\n                        <div (click)=\"SelectPlayer(p,1)\">{{ p.firstName + ' ' + p.lastName  }} | <b>{{ p.rating}}</b></div>\r\n                    </md-option>\r\n                </md-autocomplete>\r\n                <table *ngIf=\"players[0] && players[1]\" class=\"table table-responsive table-bordered table-hover\">\r\n                    <tr>\r\n                        <td ><label>Long</label></td>\r\n                        <td>\r\n                            <label>Race-To</label>: {{service.calculateRace(1.0, players[0].rating, players[1].rating).raceToTwo}}<br />\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><label>Short</label></td>\r\n                        <td>\r\n                            <label>Race-To</label>: {{service.calculateRace(.75, players[0].rating, players[1].rating).raceToTwo}}<br />\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <br />\r\n    <!--<div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <table class=\"table table-responsive table-bordered table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Id</th>\r\n                        <th>ReadableId</th>\r\n                        <th>First</th>\r\n                        <th>Last</th>\r\n                        <th>Location</th>\r\n                        <th>Rating</th>\r\n                        <th>Robustness</th>\r\n                        <th>Provisional Rating</th>\r\n                        <th>Membership #</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let p of results.value\">\r\n                        <td>{{p.id}}</td>\r\n                        <td>{{p.readableId}}</td>\r\n                        <td>{{p.firstName}}</td>\r\n                        <td>{{p.lastName}}</td>\r\n                        <td>{{p.location}}</td>\r\n                        <td>{{p.rating}}</td>\r\n                        <td>{{p.robustness}}</td>\r\n                        <td>{{p.provisionalRating}}</td>\r\n                        <td>{{p.membershipNumber}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>-->\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);


/***/ }),

/***/ 84:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 84;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(100);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(34);
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
    function AppComponent(service) {
        this.service = service;
        this.title = 'Race-To Calculator';
        this.instruction = 'Enter the players names to calculate the match length.';
        this.p1RaceTo = 0;
        this.p2RaceTo = 0;
        this.p1_text = null;
        this.p2_text = null;
        this.calculateRace_Results = null;
        this.players = [];
        this.RatingResults = [];
        this.Ctrl1 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormControl */]();
        this.Ctrl2 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormControl */]();
    }
    AppComponent.prototype.SearchName = function (Name, index) {
        var _this = this;
        if (Name.length > 0 || Name != null || Name != "") {
            this.service.GetFargoRating(Name).then(function (data) {
                _this.RatingResults[index] = data.value;
            });
        }
    };
    AppComponent.prototype.selectedItemChange = function (req, item) {
        alert(JSON.stringify(item));
    };
    AppComponent.prototype.displayFn = function (player) {
        return player ? player.firstName + ' | ' + player.rating : player;
    };
    AppComponent.prototype.SelectPlayer = function (p, player) {
        this.players[player] = p;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(160),
        styles: [],
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* FargoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* FargoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* FargoService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FargoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FargoService = (function () {
    function FargoService(http) {
        this.http = http;
    }
    FargoService.prototype.GetFargoRating = function (q) {
        return this.http
            .get("http://dashboard-fr.azurewebsites.net/api/indexsearch?q=" + q)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FargoService.prototype.rhte = function (raceTo, placeToRound) {
        var fixed = placeToRound.toString().split('.').length < 2 ? 0 : placeToRound.toString().split('.')[1].length, numParts = {
            mvDec: (raceTo / placeToRound).toFixed(this.toString().length).toString().split('.'),
            wholeNum: function () { return parseInt(this.mvDec[0], 10); },
            dec: function () { return this.mvDec.length > 1 ? parseFloat('0.' + this.mvDec[1]) : 0; },
            oddEven: function () { return (this.wholeNum() % 2 === 1) ? 1 : 0; }
        };
        if (numParts.dec() !== 0.5) {
            return (numParts.dec() > 0.5) ? parseFloat(((numParts.wholeNum() + 1) * placeToRound).toFixed(fixed)) : parseFloat((numParts.wholeNum() * placeToRound).toFixed(fixed));
        }
        else {
            if (numParts.oddEven() === 1) {
                return parseFloat(((numParts.wholeNum() + 1) * placeToRound).toFixed(fixed));
            }
            else {
                return parseFloat((numParts.wholeNum() * placeToRound).toFixed(fixed));
            }
        }
    };
    ;
    FargoService.prototype.calculateRace = function (dampFactor, ratingOne, ratingTwo) {
        var p1Rating = parseInt(ratingOne);
        var p2Rating = parseInt(ratingTwo);
        var gp = (0.018 * ((p1Rating + p2Rating) / 2)) - 1.4;
        var delta = p1Rating - p2Rating;
        var p1WinPercent = 1 - (1 / (1 + Math.pow(2, delta / 100)));
        var p2WinPercent = 1 - p1WinPercent;
        var p1AvgPts = p1WinPercent * 14.0 + (p2WinPercent * (7.4 - 0.0062 * p2Rating));
        var p2AvgPts = p2WinPercent * 14.0 + (p1WinPercent * (7.4 - 0.0062 * p1Rating));
        var p1RaceTo = p1AvgPts * gp * dampFactor;
        var p2RaceTo = p2AvgPts * gp * dampFactor;
        var normalizedRace = this.normalizeRace(p1RaceTo, p2RaceTo, dampFactor === 0.75);
        p1RaceTo = normalizedRace.p1RaceTo;
        p2RaceTo = normalizedRace.p2RaceTo;
        return {
            raceToOne: this.rhte(p1RaceTo, 1),
            raceToTwo: this.rhte(p2RaceTo, 1)
        };
    };
    ;
    FargoService.prototype.normalizeRace = function (p1RaceTo, p2RaceTo, isShort) {
        var highClamp = 99.0, lowClamp = isShort ? 24.0 : 28.0;
        var p1RaceIsHigh = p1RaceTo >= p2RaceTo, highRace = Math.max(p1RaceTo, p2RaceTo), lowRace = Math.min(p1RaceTo, p2RaceTo);
        var highRaceClamped = highRace > highClamp ? highClamp : highRace;
        var lowRaceClamped = highRace > highClamp
            ? lowRace - (lowRace * ((highRace - highClamp) / highRace))
            : lowRace;
        highRaceClamped = Math.min(lowRace < lowClamp
            ? highRaceClamped + (highRaceClamped * ((lowClamp - lowRace) / lowRaceClamped))
            : highRaceClamped, highClamp);
        lowRaceClamped = Math.max(lowRaceClamped < lowClamp ? lowClamp : lowRaceClamped, lowClamp);
        return {
            p1RaceTo: p1RaceIsHigh ? highRaceClamped : lowRaceClamped,
            p2RaceTo: p1RaceIsHigh ? lowRaceClamped : highRaceClamped
        };
    };
    ;
    FargoService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return FargoService;
}());
FargoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FargoService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.bundle.js.map