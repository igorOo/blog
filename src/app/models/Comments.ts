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

export class Comment implements Comments{

    public author!: string;
    public author_id!: bigint;
    public avatar!: string;
    public created_at!: Date;
    public email?: string;
    public id!: number;
    public reply?: Comments;
    public text!: string;
    public updated_at!: Date;


}
