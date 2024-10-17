import { Admin } from "../entities/admin"

export interface IAdminRepository {
    create(admin: Admin): Promise<void>
    findById(id: string): Promise<Admin | null>
}