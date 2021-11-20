import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './components/index/index.component';
import {SharedModule} from "../../shared/modules/shared-module/shared.module";
import {NotFoundRoutingModule} from "./not-found-routing.module";


@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        NotFoundRoutingModule
    ]
})
export class NotFoundModule {
}
