"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var app_component_1 = require("./app.component");
var login_component_1 = require("./auth/login/login.component");
var register_component_1 = require("./auth/register/register.component");
var admin_component_1 = require("./users/admin/admin.component");
var user_component_1 = require("./users/user/user.component");
var modal_options_class_1 = require("ngx-bootstrap/modal/modal-options.class");
var auth_service_1 = require("./auth/auth.service");
var app_routing_module_1 = require("./app-routing.module");
var auth_header_component_1 = require("./auth/auth-header/auth-header.component");
var users_header_component_1 = require("./users/users-header/users-header.component");
var users_service_1 = require("./users/users.service");
var auth_guard_service_1 = require("./auth/auth-guard.service");
// import {BrowserAnimationsModule} from '@angular/animations';
// import {MdButtonModule, MdCheckboxModule} from '@angular/material';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                admin_component_1.AdminComponent,
                user_component_1.UserComponent, auth_header_component_1.AuthHeaderComponent, users_header_component_1.UsersHeaderComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ngx_bootstrap_1.BsDropdownModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
            ],
            providers: [modal_options_class_1.BsModalRef, auth_service_1.AuthService, users_service_1.UsersService, auth_guard_service_1.AuthGuard],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map