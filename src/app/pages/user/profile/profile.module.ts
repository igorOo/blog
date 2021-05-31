import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { IndexComponent } from './index/index.component';
import {SharedModule} from "../../../shared/modules/shared-module/shared.module";
import {ProfileRoutingModule} from "./profile-routing.module";
import { EditComponent } from './index/components/edit/edit.component';
import { MainComponent } from './index/components/main/main.component';
import { EditAvatarComponent } from './index/components/edit-avatar/edit-avatar.component';
import { FavoriteComponent } from './index/components/favorite/favorite.component';
import {ProfileService} from "./index/components/ProfileService";


@NgModule({
    declarations: [IndexComponent, EditComponent, MainComponent, EditAvatarComponent, FavoriteComponent],
    imports: [
        CommonModule,
        SharedModule,
        ProfileRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [ProfileService],
    exports: [IndexComponent],
})
export class ProfileModule {
}
