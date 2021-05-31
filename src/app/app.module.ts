import {LOCALE_ID, NgModule, NO_ERRORS_SCHEMA, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthInterceptor} from "./auth.interceptor";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "./shared/modules/shared-module/shared.module";
import {LayoutComponent} from "./layout/layout.component";
import {MainmenuComponent} from "./layout/common/mainmenu/mainmenu.component";
import {AuthService} from "./services/auth-service.service";
import {Users} from "./models/Users";
import {Router} from "@angular/router";
import {Role} from "./models/Role";
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru');

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
    providers: [
        httpInterceptorHandlers,
        AuthService,
        { provide: LOCALE_ID, useValue: 'ru' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {
    }

}
