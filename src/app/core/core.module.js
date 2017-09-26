"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var header_component_1 = require("./header/header.component");
var home_component_1 = require("./home/home.component");
var footer_component_1 = require("./footer/footer.component");
var products_component_1 = require("../products/products.component");
var product_single_component_1 = require("../products/product-single/product-single.component");
var core_component_1 = require("./core.component");
var core_routing_module_1 = require("./core-routing.module");
var common_1 = require("@angular/common");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            declarations: [
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                footer_component_1.FooterComponent,
                products_component_1.ProductsComponent,
                product_single_component_1.ProductSingleComponent,
                core_component_1.CoreComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ngx_bootstrap_1.BsDropdownModule.forRoot(),
                //  ModalModule.forRoot(),
                core_routing_module_1.CoreRoutingModule,
                ngx_bootstrap_1.CarouselModule.forRoot()
            ],
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map