import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GalleryComponent} from "./gallery.component";
import {GalleryCategoryComponent} from "./gallery-category/gallery-category.component";


const routes: Routes = [
    {path: '', component: GalleryComponent},
    {path: "category", children: [
            {path:':translit', component: GalleryCategoryComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [
    ],
    exports: [RouterModule]
})
export class GalleryRoutingModule { }
