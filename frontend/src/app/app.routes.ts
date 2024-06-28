import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/auth/register/register.component';
import { RegisterflyComponent } from './components/auth/registerfly/registerfly.component';
import { RegistercarComponent } from './components/auth/registercar/registercar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DeleteComponent } from './components/auth/delete/delete.component';

import { IndexadminComponent } from './components/auth/indexadmin/indexadmin.component';

import { IndexComponent } from './components/tourist/index/index.component';
import { ReserveflightComponent } from './components/tourist/reservefly/reservefly.component';
import { ReservecarComponent } from './components/tourist/reservecar/reservecar.component';

import { IndexComponent as IndexReception } from './components/reception/index/index.component';

export const routes: Routes = [
    {
        path: 'admin/register',
        component: RegistroComponent
    },
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }, 
    {
        path: 'admin/registerFly',
        component: RegisterflyComponent
    },
    {
        path: 'admin/registerCar',
        component: RegistercarComponent
    },
    {
        path: 'admin',
        component: IndexadminComponent
    },{
        path: 'admin/delete',
        component: DeleteComponent
    },{
        path: 'tourist',
        component: IndexComponent
    },{
        path: 'tourist/reserveFlight',
        component: ReserveflightComponent
    },{
        path: 'tourist/rentCar',
        component: ReservecarComponent
    },{
        path: 'reception',
        component: IndexReception
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }