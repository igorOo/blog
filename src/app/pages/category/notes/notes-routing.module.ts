import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotesComponent} from "./notes.component";
import {NotesAllComponent} from "./notes-all/notes-all.component";


const routes: Routes = [
    {path: "", component: NotesAllComponent},
    {path: "category", children: [
            {path:':translit', component: NotesComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [
    ],
    exports: [RouterModule]
})
export class NotesRoutingModule { }
