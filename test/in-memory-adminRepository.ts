import { Admin } from "../src/domain/entities/admin";
import { IAdminRepository } from "../src/domain/repositories/adminRepository";

export class InMemoryAdminRepository implements IAdminRepository {

    public items: Admin[] = [];
    
    async create(admin: Admin): Promise<void> {
        if(this.items.some(item => item.email === admin.email)) {
            throw new Error('Admin already exists');
        }
        this.items.push(admin);
    }
   async  findById(id: string): Promise<Admin | null> {
        const admin = this.items.find(item => item.id === id);
        if(!admin) {
            return null;
        }
        return admin
    }
}