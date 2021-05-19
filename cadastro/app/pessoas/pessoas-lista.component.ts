import {Component, OnInit} from '@angular/core';

import { Pessoa } from './pessoa.model';
import { PessoaService} from './pessoa.service';

@Component({
    moduleId: module.id,
    selector : 'pessoas-lista',
    templateUrl: 'pessoas-lista.component.html'
})
export class PessoasListaComponent implements OnInit {
    
    pessoas : Pessoa[] ;

    constructor(private pessoaService : PessoaService){}

    ngOnInit() : void {
        this.pessoaService.getPessoas()
        .then((pessoas : Pessoa[]) => {
            this.pessoas = pessoas;
        }).catch(err => console.log(err));
     }
}