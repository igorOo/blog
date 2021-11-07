import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {CommonModule} from "@angular/common";
import {AuthGuardGuard} from "./guards/auth-guard.guard";

const routes: Routes = [{
    path: '', component: LayoutComponent, children: [
        {path: '', redirectTo: '/', pathMatch: 'full'},
        {path: '', loadChildren: () => import('./pages/index/index.module').then(module => module.IndexModule)},
        {path: 'new', loadChildren: () => import("./pages/new/new.module").then(module => module.NewModule)},
        {path: 'note', loadChildren: () => import("./pages/note/note.module").then(module => module.NoteModule)},
        {path: 'news', loadChildren: () => import("./pages/category/news/news.module").then(module => module.NewsModule)},
        {path: 'notes', loadChildren: () => import("./pages/category/notes/notes.module").then(module => module.NotesModule)},
        {path: 'gallery', loadChildren: () => import("./pages/gallery/gallery.module").then(module => module.GalleryModule)},
        {
            path: 'profile',
            loadChildren: () => import("./pages/user/profile/profile.module").then(module => module.ProfileModule),
            canActivate: [AuthGuardGuard],
            canActivateChild: [AuthGuardGuard],
        },
        {path:"search", loadChildren: () => import("./pages/search/search.module").then(module => module.SearchModule)},
        {
            path: "add-post",
            loadChildren: () => import("./pages/add-post/add-post.module").then(module => module.AddPostModule),
            canActivate: [AuthGuardGuard],
            canActivateChild: [AuthGuardGuard],
        },
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
