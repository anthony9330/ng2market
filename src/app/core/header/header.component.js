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
var login_component_1 = require("../../auth/login/login.component");
var register_component_1 = require("../../auth/register/register.component");
var router_1 = require("@angular/router");
var auth_service_1 = require("../../auth/auth.service");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, route, router, authServcie) {
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.authServcie = authServcie;
    }
    HeaderComponent.prototype.openLogin = function () {
        console.log("login click");
        // this.router.navigate(['login']);
        // this.authServcie.modalTag("modal login");
        this.bsModalRef = this.modalService.show(login_component_1.LoginComponent);
        this.authServcie.emitModalTag(this.bsModalRef);
    };
    HeaderComponent.prototype.onProductsClick = function () {
        this.router.navigate(['products'], { relativeTo: this.route });
    };
    HeaderComponent.prototype.openRegister = function () {
        this.bsModalRef = this.modalService.show(register_component_1.RegisterComponent);
        this.authServcie.emitModalTag(this.bsModalRef);
        // this.router.navigate(['register'])
    };
    HeaderComponent.prototype.ngOnInit = function () {
        console.log("header init");
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        __metadata("design:paramtypes", [modal_1.BsModalService,
            router_1.ActivatedRoute,
            router_1.Router,
            auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map