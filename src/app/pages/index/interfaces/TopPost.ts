export interface TopPost{
    id: number
    name: string
    translit: string
    main_image: string
    date_create: string
    type: number
    category: string
    cat_translit: string
    first_name?: string
    last_name?: string
    category_id: number
    url: string
    author?: string
    time_read?: string
    count_comment?: 0
    preview?: string
}
