type Role = ["USER", "EDITOR" ,"ADMINISTRATOR"]

type User = {
    id: string,
    email: string,
    password: string,
    created_at: Date,
    updated_at: Date,
    role: Role,
}