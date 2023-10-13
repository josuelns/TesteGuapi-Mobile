import AuthRepository from './AuthRepository';
import { AuthData, AuthParams } from './AuthTypes';

class AuthService {
    constructor(private authRepository: AuthRepository) { }

    async login(params: AuthParams): Promise<AuthData | null> {
        const authData = await this.authRepository.login(params);
        return authData;
    }

    async logout(): Promise<void> {
        // Implemente a lógica de logout aqui
        await this.authRepository.logout();
    }
}

export default new AuthService(new AuthRepository());