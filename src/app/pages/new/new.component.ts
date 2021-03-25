import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {News} from "../../models/News";
import {environment} from "../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
    public post: News | undefined | any
    public loading: boolean = true
    public document:any = Document

    constructor(
        private http: HttpClient,
        private router: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.http.get(environment.restUrl+"/api/v1/new/"+this.router.snapshot.params["translit"],
            {
                headers: {'Content-Type':'application/json'}
            })
            .subscribe(response => {
                console.log(response)
                this.post = response
                this.loading = false

                let script = document.createElement('script');
                script.src = "https://yastatic.net/share2/share.js";
                document.body.append(script);
            })


    }

}
