"use strict";
var Pessoa = (function () {
    function Pessoa(cpf, nome, idade, endereco) {
        this.cpf = cpf;
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco
    }
    return Pessoa;
}());
exports.Pessoa = Pessoa;
//# sourceMappingURL=pessoa.model.js.map