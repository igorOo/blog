import {LOCALE_ID, NgModule, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthInterceptor} from "./auth.interceptor";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "./shared/modules/shared-module/shared.module";
import {LayoutComponent} from "./layout/layout.component";
import {MainmenuComponent} from "./layout/common/mainmenu/mainmenu.component";
import {AuthService} from "./services/auth-service.service";
import {Router} from "@angular/router";
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';
import {MiniFavComponent} from "./shared/components/mini-fav/mini-fav.component";
import {SearchButtonComponent} from "./shared/components/search-button/search-button.component";

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
        MiniFavComponent,
        SearchButtonComponent,
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
