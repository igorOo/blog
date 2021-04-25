export interface Comments{
    id: number
    author: string
    email? : string
    avatar: string
    text: string
    created_at: Date
    updated_at: Date
    reply?: Comments
    author_id: bigint
}
