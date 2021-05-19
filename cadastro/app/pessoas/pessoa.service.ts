import { Injectable } from '@angular/core';

import { Pessoa } from './pessoa.model';

@Injectable()
export class PessoaService{
    getPessoas() : Promise<Pessoa[]> {
       return Promise.resolve(PESSOAS);        
      }
}