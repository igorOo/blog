import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from './gallery.component';
import {SharedModule} from "../../shared/modules/shared-module/shared.module";
import {GalleryRoutingModule} from "./gallery-routing.module";


@NgModule({
    bootstrap: [GalleryComponent],
    declarations: [GalleryComponent],
    imports: [
        CommonModule,
        SharedModule,
        GalleryRoutingModule,
    ],
    exports: [
        SharedModule,
        GalleryRoutingModule,
    ]
})
export class GalleryModule {
}
