import { Routes } from '@angular/router';
import { authguardGuard } from './authguard-guard';

export const routes: Routes = [
{path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', loadComponent:()=>import('./login/login').then(m=>m.Login)},

    {path:'home', loadComponent:()=>import('./home/home').then(m=>m.Home),canActivate:[authguardGuard]}
];
