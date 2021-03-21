import {NgModule, NO_ERRORS_SCHEMA, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthInterceptor} from "./auth.interceptor";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "./shared/modules/shared-module/shared.module";
import {LayoutComponent} from "./layout/layout.component";
import {MainmenuComponent} from "./layout/common/mainmenu/mainmenu.component";


const httpInterceptorHandlers: Provider = [
    {
        provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
]


@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        MainmenuComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
    ],
    exports: [
        LayoutComponent,
        MainmenuComponent,
    ],
    providers: [httpInterceptorHandlers],
    bootstrap: [AppComponent]
})
export class AppModule {
}
