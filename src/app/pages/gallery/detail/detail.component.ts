import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Gallery} from "../../../models/Gallery";
import { saveAs } from 'file-saver';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    public loading: boolean = false
    public detail!: Gallery
    public resolutionHeigth: number = 0
    public resolutionWidth: number = 0

    constructor(
        private http: HttpClient,
        private router: ActivatedRoute,
        private thisRouter: Router
    ) {
    }

    ngOnInit(): void {
        this.loadData(false)
    }

    loadData(update: boolean = false){
        this.loading = true
        let obs = new Observable(sub => {
            this.http.get(environment.restUrl + "/api/v1/gallery/"   + this.router.snapshot.params["translit"],
                {
                    headers: {'Content-Type': 'application/json'}
                })
                .subscribe((result: any) => {
                    if (result !== undefined) {
                        this.detail = result
                        let resolution = this.detail.resolution.split("x")
                        this.resolutionWidth = Number.parseInt(resolution[0])
                        this.resolutionHeigth = Number.parseInt(resolution[1])
                    }
                    this.loading = false

                    if (update){
                        sub.next({status:"update"})
                        sub.complete()
                    }
                })
        })
        obs.subscribe((result:any) => {
            // if (result.status == "update"){
            //     this.lineposts.nativeElement.scrollIntoView({behavior: 'smooth'})
            //     // document.body.scrollTop = 0
            //     // document.documentElement.scrollTop = 0
            // }
            this.loading = false
        })
    }

    downloadImage(translit: string, event: Event) {
        event.stopImmediatePropagation()
        event.preventDefault()
        this.http.get(environment.restUrl+"/api/v1/download/"+translit+"/"+this.resolutionWidth+"x"+this.resolutionHeigth,{
            responseType: 'blob'})
            .subscribe(result => {
                let file = new File([result], this.randomString()+".jpg", {type: "image/jpg"})
                saveAs(file);
            })
    }

    randomString(){
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}
