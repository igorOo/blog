import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

    public form: FormGroup = new FormGroup({
        type: new FormControl("news", [Validators.required]),
        categoryId: new FormControl("", [Validators.required]),
        name: new FormControl("", [Validators.required]),
        preview: new FormControl("", [Validators.required]),
        text: new FormControl("", [Validators.required]),
      //  tags: new FormControl(""),
        image: new FormControl("")
    })

    constructor(private http: HttpClient) {
        this.loading = false
        this.typeBehavior.subscribe((data)=>{
            this.getCategoryByType()
        })
    }

    ngOnInit(): void {
    }

    getCategoryByType() {
        this.submenuList = []
        this.http.get(environment.restUrl+"/api/v1/submenu/"+this.form.get("type")?.value)
            .subscribe((result: any) => {
                result.map((item:any) => {
                    this.submenuList.push(item)
                })
            })
    }

    submitForm(event: Event){
        event.preventDefault()
        event.stopPropagation()
        event.stopImmediatePropagation()
        console.log(this.form)
    }
}
