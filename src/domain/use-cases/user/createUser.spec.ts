import { InMemoryUserRepository } from "../../../../test/in-memory-userRepository";
import {beforeEach, describe, expect, it} from "vitest";
import { CreateUserUseCase } from "./createUser";

let inMemoryUserRepository : InMemoryUserRepository
let sut: CreateUserUseCase

describe('Create User Use Case' ,() => {
    beforeEach(() => {
        inMemoryUserRepository = new InMemoryUserRepository()
        sut = new CreateUserUseCase(inMemoryUserRepository)
    })

    it('should be able to create a new user' , async () => {
        const {user} = await sut.execute({
            name: 'John Doe',
            cpf: '664.643.260-07',
            password: '123456',
            
        })
        console.log(user)

        expect(user.id).toEqual(expect.any(String))
        })   

    it('should not be able to create a user with invalid cpf', async () => {
        await expect(() => 
            sut.execute({
            name: 'John Doe',
            cpf: '11111111',
            password: '123456',
            userId: '123'
        })
        ).rejects.toBeInstanceOf(Error)
    })

    it('should not be able to create a user with same cpf', async () => {
        await sut.execute({
            name: 'John Doe',
            cpf: '664.643.260-07',
            password: '123456',
            userId: '123'
        })

        await expect(() => 
            sut.execute({
            name: 'John Doe',
            cpf: '664.643.260-07',
            password: '123456',
            userId: '123'
        })
        ).rejects.toBeInstanceOf(Error)
    }
)
    })


