import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"auth/login",
        pathMatch:"full"
    },
    // {
    //     path:"auth/login",
    //     component:LoginComponent
    // }
    {
        path: "auth",
        loadChildren: () => import('./components/auth/auth.routes').then(m => m.auth),     
    }
];
