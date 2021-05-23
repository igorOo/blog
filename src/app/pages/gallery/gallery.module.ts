import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from './gallery.component';
import {SharedModule} from "../../shared/modules/shared-module/shared.module";
import {GalleryRoutingModule} from "./gallery-routing.module";
import { GalleryCategoryComponent } from './gallery-category/gallery-category.component';
import { DetailComponent } from './detail/detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';


@NgModule({
    bootstrap: [GalleryComponent],
    declarations: [GalleryComponent, GalleryCategoryComponent, DetailComponent, ImageCropperComponent],
    imports: [
        CommonModule,
        SharedModule,
        GalleryRoutingModule,
        ReactiveFormsModule,
    ],
    exports: [
        SharedModule,
        GalleryRoutingModule,
    ]
})
export class GalleryModule {
}
