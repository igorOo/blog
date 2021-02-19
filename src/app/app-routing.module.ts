import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {PostsComponent} from './pages/posts/posts.component';
import {CommonModule} from "@angular/common";

const routes: Routes = [{
    path: '', component: LayoutComponent, children: [
        {path: '', redirectTo: '/', pathMatch: 'full'},
        {path: '', loadChildren: () => import('./pages/index/index.module').then(module => module.IndexModule)},
        {path: 'posts', component: PostsComponent}
    ]
}];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabled'
        }),
        CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
