import { User } from "../../entities/user"
import { IUserRepository } from "../../repositories/userRepository"

interface IGetUserUseCaseRequest {
    userId:string
}

interface IGetUserUseCaseResponse {
    user:User
}

export class GetUserUseCase {
    constructor(private userRepository: IUserRepository){}

    async execute({userId}:IGetUserUseCaseRequest):Promise<IGetUserUseCaseResponse>{
        const user = await this.userRepository.findById(userId)

        if(!user) {
            throw new Error('User not found')
        }
        return {user}

    }
}


