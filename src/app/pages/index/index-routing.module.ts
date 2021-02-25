import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from 'src/app/layout/layout.component';
import { IndexComponent } from './index.component';

const routes: Routes = [
    {path: '', component: IndexComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [
    ],
    exports: [RouterModule]
})
export class IndexRoutingModule { }
