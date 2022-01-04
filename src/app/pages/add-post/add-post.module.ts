import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../../shared/modules/shared-module/shared.module";
import {AddPostRoutingModule} from "./add-post-routing.module";
import {IndexComponent} from "./components/index/index.component";
import {EditorModule} from "@tinymce/tinymce-angular";
import {TagsInputComponent} from "../../shared/components/tags-input/tags-input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CropperComponent} from "../../shared/components/cropper/cropper.component";
import {ImageCropperModule} from "ngx-image-cropper";

@NgModule({
    declarations: [
        IndexComponent,
        TagsInputComponent,
        CropperComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AddPostRoutingModule,
        EditorModule,
        ReactiveFormsModule,
        ImageCropperModule,
        FormsModule,
    ],
    exports: [IndexComponent]
})
export class AddPostModule {
}
