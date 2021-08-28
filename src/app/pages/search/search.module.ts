import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {NoteComponent} from "../note/note.component";
import {SearchRoutingModule} from "./search-routing.module";
import {SharedModule} from "../../shared/modules/shared-module/shared.module";


@NgModule({
    declarations: [
        SearchComponent,
    ],
    imports: [
        CommonModule,
        SearchRoutingModule,
        SharedModule,
    ],
    bootstrap: [NoteComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule {
}
