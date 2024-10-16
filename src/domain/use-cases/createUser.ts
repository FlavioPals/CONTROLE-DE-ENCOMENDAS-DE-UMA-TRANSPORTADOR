import { User } from "../entities/user"
import { IUserRepository } from "../repositories/userRepository"

interface ICreateUserUseCaseRequest {
     name: string
     cpf: string
     password: string
}

interface ICreateUserUseCaseResponse {
    user:User
}

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    // async execute: create me :)
}