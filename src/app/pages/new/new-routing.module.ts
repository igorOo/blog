import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewComponent} from './new.component';

const routes: Routes = [
    {path: ':translit', component: NewComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [
    ],
    exports: [RouterModule]
})
export class NewRoutingModule { }
