import { User } from "../../entities/user"
import { IUserRepository } from "../../repositories/userRepository"

interface IUpdateUserUseCaseRequest{
    userId: string
    name: string
    password: string
}

interface IUpdateUserUseCaseResponse{
    user: User
}

export class UpdateUserUseCase {
    constructor(private userRepository: IUserRepository){}
    
    async execute({name, password, userId}: IUpdateUserUseCaseRequest):Promise<IUpdateUserUseCaseResponse> {
        const user = await this.userRepository.findById(userId)

        if(!user) {
            throw new Error('User not found')
        }
        
    }

}