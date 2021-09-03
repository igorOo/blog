import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ConfirmEmailRegComponent} from "./components/confirm-email-reg/confirm-email-reg.component";
import {UserConfirmMessageComponent} from "./components/user-confirm-message/user-confirm-message.component";
import {ResetPasswordMailComponent} from "./components/reset-password-mail/reset-password-mail.component";
import {ConfirmResetPasswordComponent} from "./components/confirm-reset-password/confirm-reset-password.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'user', children: [
            {path: "activate-account/:code", component: ConfirmEmailRegComponent},
            {path: "register-message", component: UserConfirmMessageComponent}
    ]},
    {path: 'reset-password', component: ResetPasswordMailComponent},
    {path: 'confirm-reset-password/:code', component: ConfirmResetPasswordComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
