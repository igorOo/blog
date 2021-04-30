import {Post} from "./interfaces/Post";
import {Users} from "./Users";
import {Category} from "./Category";

export class Note implements Post{
    author!: Users | string;
    cat_translit!: string;
    category!: Category;
    category_id!: number;
    count_comment?: number = 0;
    date_create!: string;
    first_name!: string;
    id!: number;
    last_name!: string;
    main_image!: string;
    name!: string;
    text!: string;
    time_read!: string;
    translit!: string;
    type!: number;
    url!: string;

}
