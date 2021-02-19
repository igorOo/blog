import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-topslider',
  templateUrl: './topslider.component.html',
  styleUrls: ['./topslider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopsliderComponent implements OnInit {

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 4,
    "autoplay": true,
    "prevArrow": '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></div>',
    "nextArrow": '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></div>'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
