import { AUTH_FAILURE, AUTH_LOGOUT_REQUEST, AUTH_REQUEST, AUTH_SUCCESS } from "./authEnum";


// Tipos de ação para login
interface AuthLoginAction {
  type: typeof AUTH_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

interface AuthLoginSuccessAction {
  type: typeof AUTH_SUCCESS;
  payload: {
    user: User; // Substitua User pelo tipo de dados do seu usuário
  };
}

interface AuthLoginFailureAction {
  type: typeof AUTH_FAILURE;
  payload: {
    error: string;
  };
}

interface AuthLogoutAction {
  type: typeof AUTH_LOGOUT_REQUEST;
}

interface AutLogoutSuccessAction {
  type: typeof AUTH_SUCCESS;
  payload: {
    success: string; 
  };
}

interface AutLogoutFailureAction {
  type: typeof AUTH_FAILURE;
  payload: {
    error: string;
  };
}

// Definição do tipo para o usuário
interface User {
  id: string;
  name: string;
  email: string;
  // Adicione outras propriedades do usuário aqui
}

// Ação para login do usuário
export function authLogin(email: string, password: string): AuthLoginAction {
  return {
    type: AUTH_REQUEST,
    payload: {
      email,
      password,
    },
  };
}

// Ação para login bem-sucedido
export function authLoginSuccess(user: User): AuthLoginSuccessAction {
  return {
    type: AUTH_SUCCESS,
    payload: {
      user,
    },
  };
}

// Ação para falha no login
export function authLoginFailure(error: string): AuthLoginFailureAction {
  return {
    type: AUTH_FAILURE,
    payload: {
      error,
    },
  };
}

// Ação para logout do usuário
export function authLogout(): AuthLogoutAction {
  return {
    type: AUTH_LOGOUT_REQUEST,
  };
}

// Ação para login bem-sucedido
export function authlogoutSuccess(payload: string): AutLogoutSuccessAction {
  return {
    type: AUTH_SUCCESS,
    payload: {
      success: payload
    },
  };
}

// Ação para falha no logout
export function authlogoutFailure(error: string): AutLogoutFailureAction {
  return {
    type: AUTH_FAILURE,
    payload: {
      error,
    },
  };
}

// Exportando todos os tipos de ações
export type AuthActionTypes =
  | AuthLoginAction
  | AuthLoginSuccessAction
  | AuthLoginFailureAction
  | AuthLogoutAction
  | AutLogoutSuccessAction
  | AutLogoutFailureAction;