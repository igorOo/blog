import {BehaviorSubject, Subject} from "rxjs";
import {Users} from "../../../../../models/Users";

class User implements Users{
    email: string;
    expires: string;
    id: bigint;
    roles: Array<string>;
    token: string;
    username: string;

    constructor(email: string, expires: Date, id: number, roles: Array<string>, token: string, username: string) {
        this.email = email
        this.expires = expires.toString()
        this.id = BigInt(id)
        this.roles = roles
        this.token = token
        this.username = username
    }
}

export class ProfileService{
    user = new BehaviorSubject(new User('mail@mail.ru', new Date(), 1, ["ADMIN", "USER"], 'sdkjfhsdgfjhgsdjfhg', 'username'))
    result = new Subject()
}
