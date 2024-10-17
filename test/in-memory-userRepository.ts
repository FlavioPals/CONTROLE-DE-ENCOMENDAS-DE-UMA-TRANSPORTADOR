import { threadId } from "worker_threads";
import { User } from "../src/domain/entities/user";
import { IUserRepository } from "../src/domain/repositories/userRepository";

export class InMemoryUserRepository implements IUserRepository {
    public items: User[] = [];

    async create(user: User): Promise<void> {
        if(this.items.some(item => item.cpf === user.cpf)) {
            throw new Error('User already exists');
        }
        this.items.push(user);
    }

    async findById(id: string): Promise<User | null> {
        const user = this.items.find(item => item.id === id);
        if(!user) {
            return null;
        }
        return user
    }

    async detele(userId: string, adminId: string): Promise<void> {
        const user = this.findById(userId)
        const admin = this.findById(adminId)

        if(user === null) {
            throw new Error('User not found')
        }
        if(admin === null) {
            throw new Error('Admin not found')
        }
        const userIndex = this.items.findIndex((user) => user.id === userId);
        this.items.splice(userIndex, 1);
    }
}