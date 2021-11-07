import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    public pageName: string = "новости"
    public loading: boolean = true
    public typeBehavior: BehaviorSubject<string> = new BehaviorSubject<string>("news")
    public submenuList: Array<any> = new Array<any>()

    public form: any = {
        type: "news"
    }

    constructor(private http: HttpClient) {
        this.loading = false
        this.typeBehavior.subscribe((data)=>{
            console.log(data)
            this.form.type = data
        })
    }

    ngOnInit(): void {
        this.getCategoryByType()
    }

    getCategoryByType() {
        this.http.get(environment.restUrl+"/api/v1/submenu/"+this.form.type)
            .subscribe((result: any) => {
                result.map((item:any) => {
                    this.submenuList.push(item)
                })
            })
    }
}
