import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news.component';

const routes: Routes = [
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
