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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var auth_service_1 = require("../auth/auth.service");
var UsersService = /** @class */ (function () {
    function UsersService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    UsersService.prototype.submitProduct = function (form, file) {
        console.log(form.value);
        var title = form.value.title;
        var categoryID = form.value.category;
        var description = form.value.description;
        var location = form.value.location;
        var price = form.value.price;
        var additionalFields = '';
        var formData = new FormData();
        formData.append('image', file);
        var objData = {
            title: title,
            categoryID: categoryID,
            description: description,
            location: location,
            price: price,
            additionalFields: additionalFields
        };
        formData.append('user_info', JSON.stringify(objData));
        console.log(this.getToken());
        console.log(file);
        return this.http.post('http://ng2-market/public/api/product?token=' + this.getToken(), formData, { headers: new http_1.Headers({ 'X-Requested-With': 'XMLHttpRequest' }) });
    };
    UsersService.prototype.uploadPhoto = function (imageUpload) {
        var input = new FormData();
        input.append("file", imageUpload);
        return this.http.post('http://ng2-market/public/api/imageload', input, { headers: new http_1.Headers({ 'Content-Type': undefined }) });
    };
    UsersService.prototype.getCategories = function () {
        return this.http.get('http://ng2-market/public/api/categories', { headers: new http_1.Headers({ 'X-Requested-With': 'XMLHttpRequest' }) });
    };
    UsersService.prototype.getToken = function () {
        return this.authService.getToken();
    };
    UsersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            auth_service_1.AuthService])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map