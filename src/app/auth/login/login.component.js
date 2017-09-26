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
var modal_1 = require("ngx-bootstrap/modal");
var auth_service_1 = require("../auth.service");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(modalService, authService, router) {
        this.modalService = modalService;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("login init");
        this.authService.openModal.subscribe(function (modal) {
            _this.bsModalRef = modal;
        });
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signin(email, password).subscribe(function (response) {
            console.log('from login component:');
            if (response.token != null) {
                if (_this.authService.isAdmin(response.token)) {
                    // console.log("is admin from login"+this.authService.isAdmin(response.token));
                    _this.router.navigate(['/adminpage']);
                    _this.bsModalRef.hide();
                }
                else {
                    _this.router.navigate(['/userpage']);
                    _this.bsModalRef.hide();
                }
            }
        }, function (error) {
            _this.login_text = error.json().error;
            _this.toggleLogin = 'fail';
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css', '.././auth-header/auth-header.component.css']
        }),
        __metadata("design:paramtypes", [modal_1.BsModalService,
            auth_service_1.AuthService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map