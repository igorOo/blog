import {Component, OnInit} from '@angular/core';
import {BookmarksService} from "../../../services/bookmarks.service";

@Component({
    selector: 'app-mini-fav',
    templateUrl: './mini-fav.component.html',
    styleUrls: ['./mini-fav.component.scss']
})
export class MiniFavComponent implements OnInit {

    public favCount: number = 0

    constructor(private bookmarkService: BookmarksService) {
    }

    ngOnInit(): void {
        this.bookmarkService.bookmarkValue.subscribe((result:any) => {
            this.favCount = result
        })
    }

}
