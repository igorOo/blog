import {Users} from "./Users";
import {Category} from "./Category";
import {Post} from "./interfaces/Post";

export class News implements Post{
    id!: number
    name!: string
    translit!: string
    main_image!: string
    date_create!: string
    type!: number
    category!: Category | string
    cat_translit!: string
    first_name?: string
    last_name?: string
    category_id!: number
    url!: string
    author?: Users | string
    time_read?: string
    count_read!: number;
    count_comment?: number = 0
    preview?: string
}
