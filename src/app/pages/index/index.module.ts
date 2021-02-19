import {NgModule} from '@angular/core';

import {IndexRoutingModule} from './index-routing.module';
import {LayoutComponent} from './../../layout/layout.component';
import {IndexComponent} from './index.component';
import {MainmenuComponent} from './../../layout/common/mainmenu/mainmenu.component';
import {TopsliderComponent} from './components/topslider/topslider.component';

import {SlickCarouselModule} from 'ngx-slick-carousel';
import {CommonModule} from "@angular/common";
import { TopcategoriesComponent } from './components/topcategories/topcategories.component';

@NgModule({
    declarations: [
        LayoutComponent,
        IndexComponent,
        MainmenuComponent,
        TopsliderComponent,
        TopcategoriesComponent
    ],
    imports: [
        IndexRoutingModule,
        SlickCarouselModule,
        CommonModule,
    ],
    exports: [IndexRoutingModule],
    providers: [],
    bootstrap: [IndexComponent]
})
export class IndexModule {
}
