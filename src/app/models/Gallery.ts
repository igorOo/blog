import {Category} from "./Category";

export interface Gallery{
    id: bigint
    name: string
    translit: string
    resolution: string
    filename: string
    alt: string
    category: Category
    tags: string
    url?: string
}
