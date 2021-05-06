import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {SubscribeComponent} from "../../components/subscribe/subscribe.component";
import {LoaderComponent} from "../../components/loader/loader.component";
import {BreadcrumbsComponent} from "../../components/breadcrumbs/breadcrumbs.component";
import {PaginatonComponent} from "../../components/paginaton/paginaton.component";
import {RelatedPostsComponent} from "../../components/related-posts/related-posts.component";
import {CommentsComponent} from "../../components/comments/comments.component";
import {NextprevComponent} from "../../components/nextprev/nextprev.component";
import {TopReadersComponent} from "../../components/top-readers/top-readers.component";
import {SlickCarouselModule} from "ngx-slick-carousel";


@NgModule({
    declarations: [
        SubscribeComponent,
        LoaderComponent,
        BreadcrumbsComponent,
        PaginatonComponent,
        RelatedPostsComponent,
        CommentsComponent,
        NextprevComponent,
        TopReadersComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SlickCarouselModule,
    ],
    exports: [
        SubscribeComponent,
        LoaderComponent,
        BreadcrumbsComponent,
        PaginatonComponent,
        RelatedPostsComponent,
        CommentsComponent,
        NextprevComponent,
        TopReadersComponent,
    ]
})
export class SharedModule {
}
