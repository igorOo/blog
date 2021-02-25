import {NgModule} from '@angular/core';

import {IndexRoutingModule} from './index-routing.module';
import {LayoutComponent} from './../../layout/layout.component';
import {IndexComponent} from './index.component';
import {MainmenuComponent} from './../../layout/common/mainmenu/mainmenu.component';
import {TopsliderComponent} from './components/topslider/topslider.component';

import {SlickCarouselModule} from 'ngx-slick-carousel';
import {CommonModule} from "@angular/common";
import { TopcategoriesComponent } from './components/topcategories/topcategories.component';
import { FirstPostComponent } from './components/topcategories/components/first-post/first-post.component';
import {LoaderComponent} from "../../shared/components/loader/loader.component";
import { SmallpostComponent } from './components/topcategories/components/smallpost/smallpost.component';
import { GadgetsComponent } from './components/gadgets/gadgets.component';
import { IntandprogsComponent } from './components/intAndProgs/intandprogs/intandprogs.component'
import FilterForPipe from "../../pipes/filterFor.pipe";

@NgModule({
    declarations: [
        LayoutComponent,
        IndexComponent,
        MainmenuComponent,
        TopsliderComponent,
        TopcategoriesComponent,
        FirstPostComponent,
        LoaderComponent,
        SmallpostComponent,
        GadgetsComponent,
        IntandprogsComponent,
        FilterForPipe,
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
