import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {IndexRoutingModule} from './index-routing.module';
import {IndexComponent} from './index.component';
import {TopsliderComponent} from './components/topslider/topslider.component';

import {SlickCarouselModule} from 'ngx-slick-carousel';
import {CommonModule} from "@angular/common";
import {TopcategoriesComponent} from './components/topcategories/topcategories.component';
import {FirstPostComponent} from './components/topcategories/components/first-post/first-post.component';
import {SmallpostComponent} from './components/topcategories/components/smallpost/smallpost.component';
import {GadgetsComponent} from './components/gadgets/gadgets.component';
import {IntandprogsComponent} from './components/intAndProgs/intandprogs/intandprogs.component'
import FilterForPipe from "../../pipes/filterFor.pipe";
import {HardwareComponent} from './components/hardware/hardware.component';
import {ArticlesComponent} from './components/articles/articles.component';
import {GamesComponent} from './components/games/games.component';
import {WorldandautoComponent} from './components/worldAuto/worldandauto.component';
import {SharedModule} from "../../shared/modules/shared-module/shared.module";
import {AnotherComponent} from './components/another/another/another.component';
import { NewsHourComponent } from './components/news-hour/news-hour.component';
import {SwiperModule} from "swiper/angular";

@NgModule({
    declarations: [
        IndexComponent,
        TopsliderComponent,
        TopcategoriesComponent,
        FirstPostComponent,
        SmallpostComponent,
        GadgetsComponent,
        IntandprogsComponent,
        FilterForPipe,
        HardwareComponent,
        ArticlesComponent,
        GamesComponent,
        WorldandautoComponent,
        AnotherComponent,
        NewsHourComponent,
    ],
    imports: [
        IndexRoutingModule,
        SlickCarouselModule,
        CommonModule,
        SharedModule,
        SwiperModule,
    ],
    exports: [
        IndexRoutingModule,
    ],
    providers: [],
    bootstrap: [IndexComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class IndexModule {
}
