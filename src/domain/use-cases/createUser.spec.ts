import { User } from "../entities/user";
import { IUserRepository } from "../repositories/userRepository";
import{expect, test} from 'vitest'
import { CreateUserUseCase } from "./createUser";

const fakeAnswerRepository: IUserRepository = {
    create: async function (user: User): Promise<void> {
        return;
    }
}


test('create user', async () => {
    const useCase = new CreateUserUseCase(fakeAnswerRepository)

    const user = await useCase.execute({
        name: 'test',
        cpf: 'test',
        password: 'test'
    })

    expect(user).toBeTruthy()
    expect(user.user.id).toEqual(expect.any(String))
    expect(user.user.name).toEqual('test')
})

