import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ConfirmEmailRegComponent} from "./components/confirm-email-reg/confirm-email-reg.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'user', children: [
            {path: "activate-account", component: ConfirmEmailRegComponent}
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
