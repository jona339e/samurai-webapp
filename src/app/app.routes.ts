import { Routes } from '@angular/router';
import { HelloFellasComponent } from './Componenets/hello-fellas/hello-fellas.component';
import { SamuraiComponent } from './Componenets/samurai/samurai.component';

export const routes: Routes = [

    { path: 'fellas', component: HelloFellasComponent },
    { path: 'samurai', component: SamuraiComponent }
];
