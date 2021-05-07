import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotesComponent} from './notes.component';
import {SharedModule} from "../../../shared/modules/shared-module/shared.module";
import {NotesRoutingModule} from "./notes-routing.module";
import { NotesAllComponent } from './notes-all/notes-all.component';


@NgModule({
    declarations: [NotesComponent, NotesAllComponent],
    bootstrap: [NotesComponent],
    imports: [
        CommonModule,
        SharedModule,
        NotesRoutingModule,
    ],
    exports: [
        SharedModule,
        NotesRoutingModule,
    ]
})
export class NotesModule {
}
