import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  loadMore():void{
      alert("Хуй тебе, а не лоад море")
  }
}
