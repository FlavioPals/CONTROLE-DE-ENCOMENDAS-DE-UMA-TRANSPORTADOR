import { InMemoryUserRepository } from "../../../../test/in-memory-userRepository";
import { beforeEach, describe, expect, it } from "vitest";
import { CreateUserUseCase } from "./createUser";
import { GetUserUseCase } from "./getUser";

let inMemoryUserRepository: InMemoryUserRepository
let createUserUseCase: CreateUserUseCase
let sut: GetUserUseCase

describe('Get User Use Case', () => {
    beforeEach(() => {
        inMemoryUserRepository = new InMemoryUserRepository()

        createUserUseCase = new CreateUserUseCase(inMemoryUserRepository)
        sut = new GetUserUseCase(inMemoryUserRepository)
    })

    it('should be able to get a user', async () => {
        const {user} = await createUserUseCase.execute({
            cpf: '664.643.260-07',
            name: 'John Doe',
            password: '123456',
            userId: '123'
        })
     const result = await sut.execute({userId: user.id})

        expect(result.user).toEqual(user)
    }
    )
}
)


