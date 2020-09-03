import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';

const APP_ROUTES: Routes = [
    { path: 'users', component: ListaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'users' },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);