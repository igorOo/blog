import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {SharedModule} from "../../shared/modules/shared-module/shared.module";
import {NewRoutingModule} from "./new-routing.module";
import {NewComponent} from "./new.component";
import {CommonModule} from "@angular/common";
import { RelatedPostsComponent } from './components/related-posts/related-posts.component';
import {CommentsComponent} from "../../shared/components/comments/comments.component";

@NgModule({
    declarations: [
        NewComponent,
        RelatedPostsComponent,
        CommentsComponent
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