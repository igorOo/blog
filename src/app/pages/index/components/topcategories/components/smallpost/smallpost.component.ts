import {Component, Input, OnInit} from '@angular/core';
import {TopPost} from "../../../../interfaces/TopPost";

@Component({
  selector: 'app-smallpost',
  templateUrl: './smallpost.component.html',
  styleUrls: ['./smallpost.component.scss']
})
export class SmallpostComponent implements OnInit {
    @Input() list:Array<TopPost> = []
    @Input() loading: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
