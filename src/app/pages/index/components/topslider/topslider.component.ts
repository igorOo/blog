import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Navigation, SwiperOptions} from 'swiper';
import {TopPost} from "../../interfaces/TopPost";

SwiperCore.use([Navigation])

@Component({
    selector: 'app-topslider',
    templateUrl: './topslider.component.html',
    styleUrls: ['./topslider.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TopsliderComponent implements OnInit {

    @Input() list: Map<String, Array<TopPost>> = new Map<String, Array<TopPost>>()
    public sliders: Map<String, Array<TopPost>> = new Map<String, Array<TopPost>>()

    public config: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 0,
        scrollbar: { draggable: true },
        loop: true,
        hashNavigation: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    };

    constructor() {
    }

    ngOnInit(): void {
        this.sliders = this.list
    }

}
