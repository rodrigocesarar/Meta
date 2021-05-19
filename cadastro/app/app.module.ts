import {NgModule} from './pessoas/node_modules/@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { PessoasModule } from './pessoas/pessoas.module';

@NgModule({
    imports : [AppRoutingModule, BrowserModule, PessoasModule],
    declarations :[AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}