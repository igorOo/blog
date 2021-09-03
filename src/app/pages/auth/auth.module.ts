import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {SharedModule} from "../../shared/modules/shared-module/shared.module";
import {AuthRoutingModule} from "./auth-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { ConfirmEmailRegComponent } from './components/confirm-email-reg/confirm-email-reg.component';
import { UserConfirmMessageComponent } from './components/user-confirm-message/user-confirm-message.component';
import { ResetPasswordMailComponent } from './components/reset-password-mail/reset-password-mail.component';
import { ConfirmResetPasswordComponent } from './components/confirm-reset-password/confirm-reset-password.component';


@NgModule({
    declarations: [LoginComponent, RegisterComponent, ConfirmEmailRegComponent, UserConfirmMessageComponent, ResetPasswordMailComponent, ConfirmResetPasswordComponent],
    imports: [
        CommonModule,
        SharedModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ],
    exports: [
        AuthRoutingModule
    ]
})
export class AuthModule {
}
