import { NgModule } from './pessoas/node_modules/@angular/core';
import { RouterModule, Routes} from './pessoas/node_modules/@angular/router'

const appRoutes : Routes = [ 
    {
        path: '',
        redirectTo: '/pessoa',
        pathMatch: 'full'
    }
]

@NgModule({
     imports : [
         RouterModule.forRoot(appRoutes)
     ],
     exports: [
         RouterModule
     ]
})
export class AppRoutingModule {}