import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {SubscribeComponent} from "../../components/subscribe/subscribe.component";
import {LoaderComponent} from "../../components/loader/loader.component";
import {BreadcrumbsComponent} from "../../components/breadcrumbs/breadcrumbs.component";
import {PaginatonComponent} from "../../components/paginaton/paginaton.component";

@NgModule({
    declarations: [
        SubscribeComponent,
        LoaderComponent,
        BreadcrumbsComponent,
        PaginatonComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        SubscribeComponent,
        LoaderComponent,
        BreadcrumbsComponent,
        PaginatonComponent
    ]
})
export class SharedModule {
}
