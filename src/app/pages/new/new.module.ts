import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/modules/shared-module/shared.module";
import {NewRoutingModule} from "./new-routing.module";
import {NewComponent} from "./new.component";

@NgModule({
    declarations: [
    ],
    imports: [
        NewRoutingModule,
        CommonModule,
        SharedModule,
    ],
    exports: [
        NewRoutingModule,
    ],
    providers: [],
    bootstrap: [NewComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewModule {
}
