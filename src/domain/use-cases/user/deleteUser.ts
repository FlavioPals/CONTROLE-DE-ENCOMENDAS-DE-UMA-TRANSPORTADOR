import { IAdminRepository } from "../../repositories/adminRepository";
import { IUserRepository } from "../../repositories/userRepository";

interface IDeleteUserUseCaseRequest {
    userId:string
    adminId: string
}




export class DeleteUserUseCase {
    constructor(private userRepository: IUserRepository, private adminRepository: IAdminRepository){}

    async execute ({userId, adminId}: IDeleteUserUseCaseRequest){
        const user = await this.userRepository.findById(userId)
        const admin = await this.adminRepository.findById(adminId)

        if(!user) {
            throw new Error('User not found')
        }
        if(!admin) {
            throw new Error('Not allowed Error')
        }

        await this.userRepository.detele(userId, adminId)

    }
}