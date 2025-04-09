import { IUser } from "@/models/User.model"

type Role = ["USER", "EDITOR" ,"ADMIN"]

type PublicUser = Pick<IUser, 'id' | 'name' | 'email'> &{
    id: string,
    created_at: Date,
    updated_at: Date,
    role: Role,
}