import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {SharedModule} from "../../shared/modules/shared-module/shared.module";
import {NewRoutingModule} from "./new-routing.module";
import {NewComponent} from "./new.component";
import {CommonModule} from "@angular/common";
import { RelatedPostsComponent } from './components/related-posts/related-posts.component';
import {CommentsComponent} from "../../shared/components/comments/comments.component";
import { TopReadersComponent } from './components/top-readers/top-readers.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import { RandomImagePostsComponent } from './components/random-image-posts/random-image-posts.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        NewComponent,
        RelatedPostsComponent,
        CommentsComponent,
        TopReadersComponent,
        RandomImagePostsComponent
    ],
    imports: [
        NewRoutingModule,
        CommonModule,
        SharedModule,
        SlickCarouselModule,
        ReactiveFormsModule
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
