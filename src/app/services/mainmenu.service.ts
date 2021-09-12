import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MainmenuService {
    public menu: ReplaySubject<any> = new ReplaySubject<any>()

    constructor() {
    }

    setMenu(menu: Object){
        this.menu.next(menu)
    }

    getMenu():Observable<any>{
        return this.menu.asObservable()
    }
}
