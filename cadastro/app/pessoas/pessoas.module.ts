import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasListaComponent } from './pessoas-lista.component';
import { PessoaDetalheComponent } from './pessoa-detalhe.component';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaService } from './pessoa.service';

@NgModule({ 
    imports : [ 
        CommonModule,
        PessoaRoutingModule       
    ],
     declarations : [
         PessoasListaComponent,
         PessoaDetalheComponent
     ],
     exports : [ PessoasListaComponent],
     providers: [
         PessoaService
     ]
})
export class PessoasModule {}