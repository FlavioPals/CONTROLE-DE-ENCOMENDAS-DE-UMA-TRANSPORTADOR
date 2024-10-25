import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryAdminRepository } from "../../../../test/in-memory-adminRepository";
import { CreateAdminUseCase } from "./createAdmin";

let inMemoryAdminRepository: InMemoryAdminRepository
let sut: CreateAdminUseCase

describe('Create User Use Case', () => {
    beforeEach(() => {
        inMemoryAdminRepository = new InMemoryAdminRepository()
        sut = new CreateAdminUseCase(inMemoryAdminRepository)
    })

    it('should be able to create a new Admin', async () => {
        const {admin} = await sut.execute({
            email:'oVjv7@example.com',
            name: 'John Doe',
            password: '123456'
        })
        expect(admin.id).toEqual(expect.any(String))
    })

    it('should not be able to create a admin with same email', async () => {
        await sut.execute({
            email:'oVjv7@example.com',
            name: 'John Doe',
            password: '123456'
        })

        await expect(() => 
        sut.execute({
            email:'oVjv7@example.com',
            name: 'John Doe',
            password: '123456'
        })
    ).rejects.toBeInstanceOf(Error)
    })

    it('should not be able to create a admin with invalid email', async () => {
        await expect(() => 
            sut.execute({
                email:'john.doe.com',
                name: 'John Doe',
                password: '123456'
            })
        ).rejects.toBeInstanceOf(Error)
    })

    it('should not be able to create a admin with invalid password', async () => {
        await expect(() => 
            sut.execute({
                email:'oVjv7@example.com',
                name: 'John Doe',
                password: '12345'
            })
        ).rejects.toBeInstanceOf(Error)
    })
}
)


