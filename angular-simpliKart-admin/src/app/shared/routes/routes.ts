import { Routes } from "@angular/router";

export const content: Routes = [
    {
        path: '',
         loadChildren: () => import('../../components/dashboard/dashboard.routes').then(r => r.dashboardRoutes)
    },
    {
        path:'',
        loadChildren: () => import('../../components/layout/layout.routes').then(r => r.layoutRoutes)
    }

    
]