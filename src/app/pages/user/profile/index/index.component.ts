import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get(environment.restUrl+"/api/v1/user/profile")
            .subscribe(result => {
                console.log(result)
            })
    }

}
