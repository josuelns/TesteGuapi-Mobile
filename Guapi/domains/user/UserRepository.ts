import User from './UserTypes';

interface UserRepository {
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    create(user: User): Promise<void>;
    update(user: User): Promise<void>;
    delete(id: string): Promise<void>;
}

export default UserRepository;