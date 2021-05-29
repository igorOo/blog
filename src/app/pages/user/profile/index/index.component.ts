import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Users} from "../../../../models/Users";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    public loading: boolean = true;
    public environment: any = environment
    public user!: Users

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get(environment.restUrl+"/api/v1/user/profile")
            // @ts-ignore
            .subscribe((result:Users) => {
                console.log(result)
                this.user = result
                this.loading = false
            })
    }

}
