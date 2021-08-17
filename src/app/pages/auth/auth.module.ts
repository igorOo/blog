import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {SharedModule} from "../../shared/modules/shared-module/shared.module";
import {AuthRoutingModule} from "./auth-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';


@NgModule({
    declarations: [LoginComponent, RegisterComponent],
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
