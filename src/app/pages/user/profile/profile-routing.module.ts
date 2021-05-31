import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {EditComponent} from "./index/components/edit/edit.component";
import {MainComponent} from "./index/components/main/main.component";
import {EditAvatarComponent} from "./index/components/edit-avatar/edit-avatar.component";
import {FavoriteComponent} from "./index/components/favorite/favorite.component";

const routes: Routes = [
    {path: '', component: IndexComponent, children: [
            {path: '', component: MainComponent},
            {path: 'edit', component: EditComponent},
            {path: 'edit-avatar', component: EditAvatarComponent},
            {path: 'favorite', component: FavoriteComponent}
        ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [
    ],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
