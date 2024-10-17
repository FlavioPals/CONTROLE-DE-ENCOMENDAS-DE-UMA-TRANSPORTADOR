import { User } from "../entities/user";

export interface IUserRepository {
    create(user: User): Promise<void>
    findById(id: string): Promise<User | null>
    detele(userId:string, adminId: string): Promise<void>
}