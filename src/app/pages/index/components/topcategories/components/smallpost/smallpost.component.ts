import {Component, Input, OnInit} from '@angular/core';
import {TopPost} from "../../../../interfaces/TopPost";
import {BookmarksService} from "../../../../../../services/bookmarks.service";

@Component({
  selector: 'app-smallpost',
  templateUrl: './smallpost.component.html',
  styleUrls: ['./smallpost.component.scss']
})
export class SmallpostComponent implements OnInit {
    @Input() list:Array<TopPost> = []
    @Input() loading: boolean = true

  constructor(private bookmarks: BookmarksService) { }

  ngOnInit(): void {
  }

    addToFav(id: number, event:Event) {
        event.preventDefault()
        event.stopImmediatePropagation()
        this.bookmarks.bookmark.next(id)
    }
}
