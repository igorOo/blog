import {Component, OnInit} from '@angular/core';
import SwiperCore, {Navigation, SwiperOptions} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {HttpClient} from "@angular/common/http";
import {News} from "../../../../models/News";
import {environment} from "../../../../../environments/environment";

SwiperCore.use([Navigation])
@Component({
    selector: 'app-news-hour',
    templateUrl: './news-hour.component.html',
    styleUrls: ['./news-hour.component.scss']
})
export class NewsHourComponent implements OnInit {

    public list: Array<News> = new Array<News>()
    public config: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 25,
        pagination: true,
        scrollbar: { draggable: true },
        navigation: {
            nextEl: '.sh-carousel-next',
            prevEl: '.sh-carousel-prev',
        },
    };

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {

        this.http.get(environment.restUrl + "/api/v1/hot-news")
            .subscribe((result:any) => {
                if (result.status == "success"){
                    this.list = result.data
                }
            })
    }
}
