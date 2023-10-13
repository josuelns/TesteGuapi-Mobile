import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '../../helpers/auth/auth';
import { AuthData, AuthParams } from './AuthTypes';

class AuthRepository {
    async login(params: AuthParams): Promise<AuthData | null> {
        const user = await auth.login(params);

        if (user && user.token) {
            await AsyncStorage.setItem('auth_token', JSON.stringify(user.token));
        }

        return user
    }

    async logout(): Promise<any> {
        const logout = await auth.logout();

        return logout
    }
}

export default AuthRepository;