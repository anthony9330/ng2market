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
var modal_options_class_1 = require("ngx-bootstrap/modal/modal-options.class");
var auth_service_1 = require("../auth.service");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(bsModalRef, authService) {
        this.bsModalRef = bsModalRef;
        this.authService = authService;
        this.toggleStatus = '';
    }
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form);
        var email = form.value.email;
        var name = form.value.name;
        var password = form.value.password;
        var phone = form.value.phone;
        var location = form.value.location;
        this.authService.signup(email, name, password, phone, location).subscribe(function (response) {
            if (response.status == 201) {
                _this.register_text = response.json().message;
                _this.toggleStatus = 'success';
                console.log(response);
            }
        }, function (error) {
            _this.register_text = "Unable to register";
            _this.toggleStatus = 'fail';
            console.log(error);
        });
    };
    RegisterComponent.prototype.checkSubscribe = function () {
        this.authService.openModal.next('from register');
    };
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("register init");
        this.authService.getModal().subscribe(function (modal) {
            _this.bsModalRef = modal;
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css', '.././auth-header/auth-header.component.css']
        }),
        __metadata("design:paramtypes", [modal_options_class_1.BsModalRef,
            auth_service_1.AuthService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map