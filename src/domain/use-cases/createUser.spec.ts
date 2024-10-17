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
        name: 'Flavio',
        cpf: '664.643.260-07',
        password: 'test'

    })

    expect(user).toBeTruthy()
    expect(user.user.id).toEqual(expect.any(String))
    expect(user.user.createdAt).toBeInstanceOf(Date)
})

