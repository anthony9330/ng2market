"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/Rx");
var Subject_1 = require("rxjs/Subject");
var angular2_jwt_1 = require("angular2-jwt");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.openModal = new Subject_1.Subject();
        this.token = localStorage.getItem("token");
        console.log("Token not expired" + angular2_jwt_1.tokenNotExpired());
    }
    AuthService.prototype.emitModalTag = function (modal) {
        this.openModal.next(modal);
    };
    AuthService.prototype.getModal = function () {
        return this.openModal.asObservable();
    };
    AuthService.prototype.signup = function (email, name, password, phone, location) {
        return this.http.post('http://ng2-market/public/api/user/signup', { email: email, name: name, password: password, phone: phone, location: location }, { headers: new http_1.Headers({ 'X-Requested-With': 'XMLHttpRequest' }) });
        // .map(
        //   (response)=>{
        //       return response.json();
        //    }
        //   );
    };
    AuthService.prototype.signin = function (email, password) {
        var _this = this;
        return this.http.post('http://ng2-market/public/api/user/signin', { email: email, password: password }, { headers: new http_1.Headers({ 'X-Requested-With': 'XMLHttpRequest' }) })
            .map(function (response) {
            var token = response.json().token;
            _this.isAdmin(token);
            return { token: token };
        })
            .do(function (tokenData) {
            _this.token = tokenData.token;
            localStorage.setItem("token", tokenData.token);
        });
    };
    AuthService.prototype.getToken = function () {
        //   FIX IN CASE IF TOKEN EXPIRED LOOK INTO RECIPEAPP
        // this.token= localStorage.getItem("token");
        // return localStorage.getItem("token");
        return this.token;
    };
    AuthService.prototype.logOut = function () {
        this.token = null;
        localStorage.removeItem("token");
    };
    AuthService.prototype.isAuthenticated = function () {
        // this.token= localStorage.getItem("token");
        console.log('isAuthenticated call' + this.token);
        return this.token != null;
    };
    AuthService.prototype.isAdmin = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        console.log(JSON.parse(window.atob(base64)));
        var user = JSON.parse(window.atob(base64));
        var user_id = user.sub;
        if (user_id == 1) {
            return true;
        }
        else
            return false;
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map