import { InMemoryUserRepository } from "../../../../test/in-memory-userRepository";
import {beforeEach, describe, expect, it} from "vitest";
import { InMemoryAdminRepository } from "../../../../test/in-memory-adminRepository";
import { DeleteUserUseCase } from "./deleteUser";

let inMemoryUserRepository : InMemoryUserRepository
let inMemoryAdminRepository: InMemoryAdminRepository
let sut: DeleteUserUseCase

describe('Create User Use Case' ,() => {
    beforeEach(() => {
        inMemoryUserRepository = new InMemoryUserRepository()
        inMemoryAdminRepository = new InMemoryAdminRepository()
        sut = new DeleteUserUseCase(inMemoryUserRepository, inMemoryAdminRepository)
    })

    it('should be able to create a new user' , async () => {
        // primeiro criar o caso de uso para criação de um admin
    })
})


