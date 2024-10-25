import { InMemoryUserRepository } from "../../../../test/in-memory-userRepository";
import {beforeEach, describe, expect, it} from "vitest";
import { InMemoryAdminRepository } from "../../../../test/in-memory-adminRepository";
import { DeleteUserUseCase } from "./deleteUser";
import { CreateAdminUseCase } from "../admin/createAdmin";
import { CreateUserUseCase } from "./createUser";

let inMemoryUserRepository : InMemoryUserRepository
let inMemoryAdminRepository: InMemoryAdminRepository

let createAdminUseCase: CreateAdminUseCase
let createUserUseCase: CreateUserUseCase
let sut: DeleteUserUseCase

describe('Delete User Use Case' ,() => {
    beforeEach(() => {
        inMemoryUserRepository = new InMemoryUserRepository()
        inMemoryAdminRepository = new InMemoryAdminRepository()
        createAdminUseCase = new CreateAdminUseCase(inMemoryAdminRepository)
        createUserUseCase = new CreateUserUseCase(inMemoryUserRepository)

        sut = new DeleteUserUseCase(inMemoryUserRepository, inMemoryAdminRepository)
    })

    it('should be able to delete a user' , async () => {
        const {user} = await createUserUseCase.execute({
            name: 'John Doe',
            cpf: '664.643.260-07',
            password: '123456',
            userId: '123'
        })

        const {admin} = await createAdminUseCase.execute({
            email:'oVjv7@example.com',
            name: 'John Doe',
            password: '123456',
        })

        await sut.execute({adminId: admin.id, userId: user.id})
        expect(inMemoryUserRepository.items).toHaveLength(0)
    })
})


