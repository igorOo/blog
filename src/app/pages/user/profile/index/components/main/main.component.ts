import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProfileService} from "../ProfileService";
import {Users} from "../../../../../../models/Users";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges {

    public user!: Users
    public loading: boolean = true

    constructor(private profileService: ProfileService) {
    }

    ngOnChanges(changes: SimpleChanges) {

    }

    ngOnInit(): void {
        this.profileService.user.subscribe(user => {
            console.log(user)
            // @ts-ignore
            this.user = user
            this.loading = false
        })
    }

}
