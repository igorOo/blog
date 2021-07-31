import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, CompletionObserver, Subject} from "rxjs";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth-service.service";
import {Users} from "../models/Users";


@Injectable({
    providedIn: "root"
})
export class BookmarksService{

    bookmark = new Subject()
    static bookmarkCount = 0
    bookmarkValue = new BehaviorSubject(BookmarksService.bookmarkCount)
    private user: Users | null = null

    constructor(private http: HttpClient, public authService: AuthService) {
        this.bookmark.subscribe((post_id:any) => {
            this.add(post_id)
        })
        authService.currentUser.subscribe(user => {
            this.user = user
        })
        this.getCount()
    }

    public add(post_id: number): void{
        if (this.user == null){
            return
        }

        this.http.post(environment.restUrl+"/api/v1/bookmarks/toggle/"+post_id+"/"+this.user.id,{})
            .subscribe((result: any) => {
                BookmarksService.bookmarkCount = result.count
                this.bookmarkValue.next(BookmarksService.bookmarkCount)
            })
    }

    public getCount(): void{
        if (this.user == null){
            return
        }
        this.http.post(environment.restUrl+"/api/v1/bookmarks/get-count/"+this.user.id,{})
            .subscribe((result: any) => {
                BookmarksService.bookmarkCount = result.count
                this.bookmarkValue.next(BookmarksService.bookmarkCount)
            })
    }
}
