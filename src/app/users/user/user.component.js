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
var users_service_1 = require("../users.service");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var UserComponent = /** @class */ (function () {
    function UserComponent(userService, http) {
        this.userService = userService;
        this.http = http;
        this.imgSrc = '';
        this.imageHeaders = new http_1.Headers({ 'X-Requested-With': 'XMLHttpRequest', 'Access-Control-Allow-Origin': '*', 'Authorization': localStorage.getItem('token') });
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCategories().subscribe(function (response) {
            if (response.json().categories != null && response.json().categories != undefined) {
                _this.categoriesList = response.json().categories;
            }
        }, function (error) {
            console.log(error);
        });
        console.log("token from user component" + this.userService.getToken());
    };
    UserComponent.prototype.imageFinishedUploading = function (file) {
        console.log(file);
        // console.log(JSON.stringify(file));
    };
    UserComponent.prototype.onSubmit = function (form) {
        this.userService.submitProduct(form, this.file).subscribe(function (response) { console.log(response.json()); }, function (error) { console.log("error" + error); });
    };
    UserComponent.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            this.file = fileList[0];
            var img = document.querySelector("#preview");
            var formData = new FormData();
            formData.append('image', this.file);
            console.log("form data");
            console.log(formData);
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.imgSrc = event.target.result;
            };
            reader.readAsDataURL(this.file);
            this.http.post('http://ng2-market/public/api/imageload?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6Ly9uZzItbWFya2V0L3B1YmxpYy9hcGkvdXNlci9zaWduaW4iLCJpYXQiOjE1MDU4NDYwMzUsImV4cCI6MTUwNTg0OTYzNSwibmJmIjoxNTA1ODQ2MDM1LCJqdGkiOiIwV2VOb1plYjVUMVVYWXVnIn0.zj_zLml48J92LPEedf2k2vUnH0dmdNx7odlRKlimG1U', formData)
                .subscribe(function (data) { return console.log(data.json()); }, function (error) { return console.log(error); });
        }
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        }),
        __metadata("design:paramtypes", [users_service_1.UsersService,
            http_2.Http])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map