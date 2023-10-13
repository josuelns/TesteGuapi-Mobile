import User from './UserTypes';
import UserRepository from './UserRepository';

class UserService {
    constructor(private userRepository: UserRepository) { }

    async createUser(user: User): Promise<void> {
        // Implemente a lógica para criar um usuário
    }

    async updateUser(user: User): Promise<void> {
        // Implemente a lógica para atualizar um usuário
    }

    async deleteUser(id: string): Promise<void> {
        // Implemente a lógica para excluir um usuário
    }
}

export default UserService;