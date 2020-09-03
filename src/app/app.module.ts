import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//rutas
import { APP_ROUTING } from './app.routes';
//services
import {UserService} from './services/users.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
