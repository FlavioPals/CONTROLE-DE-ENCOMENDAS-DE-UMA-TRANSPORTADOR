import { randomUUID } from "crypto";
import { Admin } from "../../entities/admin";
import { IAdminRepository } from "../../repositories/adminRepository";

interface ICreateAdminUseCaseRequest {
    name: string
    email: string
    password: string
    id?: string
}

interface ICreateAdminUseCaseResponse {
    admin:Admin
}
export class CreateAdminUseCase {
    constructor(private adminRepository: IAdminRepository) {}

    async execute({email, name, password, id}: ICreateAdminUseCaseRequest):Promise<ICreateAdminUseCaseResponse> {
        const admin = new Admin({name, email, password, id: id ?? randomUUID()})

        await this.adminRepository.create(admin)

        return {admin}
    }
}