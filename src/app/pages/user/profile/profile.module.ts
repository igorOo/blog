import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { IndexComponent } from './index/index.component';
import {SharedModule} from "../../../shared/modules/shared-module/shared.module";
import {ProfileRoutingModule} from "./profile-routing.module";
import { EditComponent } from './index/components/edit/edit.component';
import { MainComponent } from './index/components/main/main.component';
import { FavoriteComponent } from './index/components/favorite/favorite.component';
import {ProfileService} from "./index/components/ProfileService";
import {AvatarService} from "./index/service/AvatarService/avatar-service.service";


@NgModule({
    declarations: [IndexComponent, EditComponent, MainComponent, FavoriteComponent],
    imports: [
        CommonModule,
        SharedModule,
        ProfileRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [ProfileService, AvatarService],
    exports: [IndexComponent],
})
export class ProfileModule {
}
