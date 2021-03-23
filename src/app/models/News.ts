import {Users} from "./Users";
import {Category} from "./Category";

export interface News{
    id: number
    name: string
    translit: string
    main_image: string
    date_create: string
    type: number
    category: Category | string
    cat_translit: string
    first_name?: string
    last_name?: string
    category_id: number
    url: string
    author?: Users | string
    time_read?: string
    count_comment?: 0
    preview?: string
}
