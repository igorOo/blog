import {Component, Input, OnInit} from '@angular/core';
import {TopPost} from "../../../../interfaces/TopPost";


@Component({
  selector: 'app-first-post',
  templateUrl: './first-post.component.html',
  styleUrls: ['./first-post.component.scss']
})
export class FirstPostComponent implements OnInit {
    @Input() firstPost!: TopPost;
    @Input() loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
