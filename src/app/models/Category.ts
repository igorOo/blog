export interface Category{
    id: bigint;
    image: string;
    name: string;
    parentCategory: Category | number;
    sort: number;
    translit: string;
    url: string
}
