import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {CommonModule} from "@angular/common";

const routes: Routes = [{
    path: '', component: LayoutComponent, children: [
        {path: '', redirectTo: '/', pathMatch: 'full'},
        {path: '', loadChildren: () => import('./pages/index/index.module').then(module => module.IndexModule)},
        {path: 'new', loadChildren: () => import("./pages/new/new.module").then(module => module.NewModule)},
        {path: 'note', loadChildren: () => import("./pages/note/note.module").then(module => module.NoteModule)},
        {path: 'news', loadChildren: () => import("./pages/category/news/news.module").then(module => module.NewsModule)},
        {path: '', loadChildren: () => import("./pages/auth/auth.module").then(module=>module.AuthModule)}
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
