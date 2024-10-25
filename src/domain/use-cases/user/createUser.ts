import { randomUUID } from "crypto"
import { User } from "../../entities/user"
import { IUserRepository } from "../../repositories/userRepository"

interface ICreateUserUseCaseRequest {
    userId?: string 
     name: string
     cpf: string
     password: string
}

interface ICreateUserUseCaseResponse {
    user:User
}

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute({name, cpf, password, userId}: ICreateUserUseCaseRequest):Promise<ICreateUserUseCaseResponse>{
        const user = new User({name, cpf, password, userId: userId ?? randomUUID()})

        await this.userRepository.create(user)

        return {user}
    }
}