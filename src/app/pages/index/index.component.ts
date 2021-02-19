import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import TopCategoriesInterface from "./interfaces/TopCategoriesInterface";
import {TopCategoriesListInterface} from "./interfaces/TopCategoriesListInterface";
import { Observable } from 'rxjs';


@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    public tops: any = null;
    public categList: TopCategoriesListInterface[] =[];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.tops = this.http.get("http://techno.loc/api/v1/posts/mainpage");
            
    }

}
