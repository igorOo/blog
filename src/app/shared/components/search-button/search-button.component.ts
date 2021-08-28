import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";

@Component({
    selector: 'app-search-button',
    templateUrl: './search-button.component.html',
    styleUrls: ['./search-button.component.scss']
})
export class SearchButtonComponent implements OnInit {
    showSearch: boolean = false
    searchString: string = ""

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {
    }

    showSearchForm() {
        this.showSearch = !this.showSearch
    }

    submitForm() {
        this.router.navigateByUrl("/search?s="+this.searchString)
    }
}
