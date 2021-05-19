import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { PessoasListaComponent} from './pessoas-lista.component'
import { PessoaDetalheComponent} from './pessoa-detalhe.component'


const pessoaRoutes: Routes =[
  {
      path : 'pessoa',
      component: PessoasListaComponent
  },
  {
      path : 'pessoa/salvar',
      component: PessoaDetalheComponent
  }
]

@NgModule({
    imports: [
        RouterModule.forChild(pessoaRoutes)
    ],
    exports : [RouterModule]
})
export class PessoaRoutingModule {}