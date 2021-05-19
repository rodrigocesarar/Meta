"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var pessoas_lista_component_1 = require("./pessoas-lista.component");
var pessoa_detalhe_component_1 = require("./pessoa-detalhe.component");
var pessoa_routing_module_1 = require("./pessoa-routing.module");
var pessoa_service_1 = require("./pessoa.service");
var PessoasModule = (function () {
    function PessoasModule() {
    }
    return PessoasModule;
}());
PessoasModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            pessoa_routing_module_1.PessoaRoutingModule
        ],
        declarations: [
            pessoas_lista_component_1.PessoasListaComponent,
            pessoa_detalhe_component_1.PessoaDetalheComponent
        ],
        exports: [pessoas_lista_component_1.PessoasListaComponent],
        providers: [
            pessoa_service_1.PessoaService
        ]
    })
], PessoasModule);
exports.PessoasModule = PessoasModule;
//# sourceMappingURL=pessoas.module.js.map