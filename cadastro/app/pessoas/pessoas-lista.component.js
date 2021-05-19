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
var core_1 = require("@angular/core");
var pessoa_service_1 = require("./pessoa.service");
var PessoasListaComponent = (function () {
    function PessoasListaComponent(pessoaService) {
        this.pessoaService = pessoaService;
    }
    PessoasListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pessoaService.getPessoas()
            .then(function (pessoas) {
            _this.pessoas = pessoas;
        }).catch(function (err) { return console.log(err); });
    };
    return PessoasListaComponent;
}());
PessoasListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pessoas-lista',
        templateUrl: 'pessoas-lista.component.html'
    }),
    __metadata("design:paramtypes", [pessoa_service_1.PessoaService])
], PessoasListaComponent);
exports.PessoasListaComponent = PessoasListaComponent;
//# sourceMappingURL=pessoas-lista.component.js.map