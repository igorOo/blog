import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoteComponent} from "./note.component";


const routes: Routes = [
    {path: ':translit', component: NoteComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [
    ],
    exports: [RouterModule]
})
export class NoteRoutingModule { }
