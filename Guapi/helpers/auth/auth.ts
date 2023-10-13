import { AuthParams } from "../../domains/auth/AuthTypes";
import api from "../api/api";

class Auth {
    // Exemplo de método de login
    async login({email, password}:AuthParams ) {
        try {
            const response = await api.post('/login', { email, password });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            const response = await api.post('/logout');
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    
}

export default new Auth();