import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {SubscribeComponent} from "../../components/subscribe/subscribe.component";
import {LoaderComponent} from "../../components/loader/loader.component";

@NgModule({
    declarations: [
        SubscribeComponent,
        LoaderComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        SubscribeComponent,
        LoaderComponent,
    ]
})
export class SharedModule {
}
