import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Gallery} from "../../../models/Gallery";
import { saveAs } from 'file-saver';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Cropper from 'cropperjs'

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
    public originalHeigth: number = 0
    public originalWidth: number = 0
    public customResolution: boolean = false

    public resWidth: number = 0
    public resHeigth: number = 0
    public boxWidth: number = 0
    public boxHeight: number = 0
    public x1: number = 0
    public y1: number = 0

    public form:FormGroup = new FormGroup({
        formWidth: new FormControl('', Validators.pattern(/\d+/)),
        formHeigth: new FormControl('', Validators.pattern(/\d+/)),
        formSelect: new FormControl("")
    })

    constructor(
        private http: HttpClient,
        private router: ActivatedRoute,
        private thisRouter: Router
    ) {
    }

    ngOnInit(): void {
        this.loadData(false)
        this.form.get("formSelect")?.valueChanges.subscribe(item => {
            if (item !== ''){
                let resolution: string[] = item.split("x")
                this.resolutionWidth = Number.parseInt(resolution[0])
                this.resolutionHeigth = Number.parseInt(resolution[1])
                this.customResolution = true
            }else{
                this.resolutionWidth = 0
                this.resolutionHeigth = 0
                this.customResolution = false
            }
        })
        this.form.get("formWidth")?.valueChanges.subscribe(item => {
            if (item !== ''){
                this.resolutionWidth = Number.parseInt(item)
                if (this.resolutionWidth > 0 && this.resolutionHeigth > 0){
                    this.customResolution = true
                }
            }else{
                this.resolutionWidth = 0
                this.customResolution = false
            }
        })
        this.form.get("formHeigth")?.valueChanges.subscribe(item => {
            if (item !== ''){
                this.resolutionHeigth = Number.parseInt(item)
                if (this.resolutionWidth > 0 && this.resolutionHeigth > 0){
                    this.customResolution = true
                }
            }else{
                this.resolutionHeigth = 0
                this.customResolution = false
            }
        })
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
                        this.originalWidth = Number.parseInt(resolution[0])
                        this.originalHeigth = Number.parseInt(resolution[1])
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

    activateCropMode(event: Event): void {
        event.stopImmediatePropagation()
        event.preventDefault()

        const image = document.querySelector(".image-prew")
        // @ts-ignore
        const cropper = new Cropper(image, {
            aspectRatio: 16 / 9,
            // @ts-ignore
            crop(event) {
                console.log(event.detail.x);
                console.log(event.detail.y);
                console.log(event.detail.width);
                console.log(event.detail.height);
                console.log(event.detail.rotate);
                console.log(event.detail.scaleX);
                console.log(event.detail.scaleY);
            },
        });
        console.log(cropper)
    }

    downloadImage(translit: string, event: Event, resolution?: string) {
        event.stopImmediatePropagation()
        event.preventDefault()
        var width:number = this.resolutionWidth
        var heigth:number = this.resolutionHeigth
        if (resolution !== undefined){
            let res: string[] = resolution.split("x")
            width = Number.parseInt(res[0])
            heigth = Number.parseInt(res[1])
        }
        this.http.post(environment.restUrl+"/api/v1/download/"+translit+"/"+width+"x"+heigth,{},{
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
