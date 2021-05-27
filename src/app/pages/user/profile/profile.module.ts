import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { IndexComponent } from './index/index.component';
import {SharedModule} from "../../../shared/modules/shared-module/shared.module";
import {ProfileRoutingModule} from "./profile-routing.module";


@NgModule({
    declarations: [IndexComponent],
    imports: [
        CommonModule,
        SharedModule,
        ProfileRoutingModule,
    ],
    exports: [IndexComponent],
})
export class ProfileModule {
}
