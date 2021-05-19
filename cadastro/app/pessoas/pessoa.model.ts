import { Endereco } from "./endereco.model";

export class Pessoa {

    constructor(
        public nome: string,
        public idade:number,
        public cpf : string,
        public endereco : Endereco
    ){}
}