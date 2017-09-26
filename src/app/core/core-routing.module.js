"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_component_1 = require("./core.component");
var products_component_1 = require("../products/products.component");
var home_component_1 = require("./home/home.component");
var coreRoutes = [
    { path: '', component: core_component_1.CoreComponent, children: [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'products', component: products_component_1.ProductsComponent },
        ] }
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(coreRoutes),
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());
exports.CoreRoutingModule = CoreRoutingModule;
//# sourceMappingURL=core-routing.module.js.map