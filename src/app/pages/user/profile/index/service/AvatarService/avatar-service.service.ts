import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()
export class AvatarService {
    private avatar = new Subject()

    avatarObservable$ = this.avatar.asObservable();

    constructor() {
    }

    changeAvatar(image: string){
        this.avatar.next(image)
    }

    getAvatar():Observable<any>{
        return this.avatar.asObservable()
    }
}
