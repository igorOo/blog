export interface Users{
    id: bigint
    username: String
    email: string
    firstName?: string
    lastName?: string
    roles: Array<string>
    token: string
    expires: string
}
