import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/auth-service.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Component({
    selector: 'app-confirm-email-reg',
    templateUrl: './confirm-email-reg.component.html',
    styleUrls: ['./confirm-email-reg.component.scss']
})
export class ConfirmEmailRegComponent implements OnInit {

    constructor(private auth: AuthService, private router: Router, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.post(environment.restUrl+"/api/v1/activate-account", {"code": ""})
    }

}
