import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news.component';
import {NewsAllComponent} from "./news-all/news-all.component";

const routes: Routes = [
    {path: "", component: NewsAllComponent},
    {path: "category", children: [
            {path:':translit', component: NewsComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [
    ],
    exports: [RouterModule]
})
export class NewsRoutingModule { }
