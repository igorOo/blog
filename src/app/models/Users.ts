export interface Users{
    id: bigint
    username: string
    email: string
    firstName?: string
    lastName?: string
    avatar?: string
    roles: Array<string>
    token: string
    expires: string

    FirstName?: string
    LastName?: string
    birthDate?: Date
    gender?: string
    lastVisit?: Date
    dateCreate?: Date
}
