import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../../shared/modules/shared-module/shared.module";
import {AddPostRoutingModule} from "./add-post-routing.module";
import {IndexComponent} from "./components/index/index.component";


@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AddPostRoutingModule
    ],
    exports: [IndexComponent]
})
export class AddPostModule {
}
