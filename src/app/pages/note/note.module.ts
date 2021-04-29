import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoteComponent} from './note.component';
import {NoteRoutingModule} from "./note-routing.module";
import {SharedModule} from "../../shared/modules/shared-module/shared.module";


@NgModule({
    declarations: [NoteComponent],
    imports: [
        CommonModule,
        NoteRoutingModule,
        SharedModule
    ],
    exports: [
        NoteRoutingModule
    ],
    bootstrap: [NoteComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NoteModule {
}
