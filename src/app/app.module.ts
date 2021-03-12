import {NgModule, NO_ERRORS_SCHEMA, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthInterceptor} from "./auth.interceptor";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "./shared/modules/shared-module/shared.module";



const httpInterceptorHandlers: Provider = [
    {
        provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
]


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule,
        HttpClientModule,
    ],
    exports: [
    ],
    providers: [httpInterceptorHandlers],
    bootstrap: [AppComponent]
})
export class AppModule {
}
