import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsComponent} from "./news.component";
import {SharedModule} from "../../../shared/modules/shared-module/shared.module";
import {NewsRoutingModule} from "./news-routing.module";
import { NewsAllComponent } from './news-all/news-all.component';


@NgModule({
    bootstrap: [NewsComponent],
    declarations: [
        NewsComponent,
        NewsAllComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        NewsRoutingModule,
    ],
    exports: [
        SharedModule,
        NewsRoutingModule,
    ]
})
export class NewsModule {
}
