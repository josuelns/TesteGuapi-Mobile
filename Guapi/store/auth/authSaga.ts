import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { AuthParams } from '../../domains/auth/AuthTypes'
import AuthService from '../../domains/auth/AuthService'
import { authLoginFailure, authLoginSuccess } from './authActions'
import { AUTH_REQUEST } from './authEnum'
import { showToast } from '../toast/toastActions'
import Toast from '../../domains/toast/ToastTypes'

let response: any

const authRequest = async (params: AuthParams): Promise<any> => {
    let data: any
    try {
        data = await AuthService.login(params);
        response = data
        return data
    } catch (error) {
        console.log(error)
    }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function* authData(action: { type: string, payload: AuthParams }) {
    try {
        yield call(authRequest, action.payload)
        const toast: Toast = {
            type: "success",
            title: "Login bem-sucedido",
            message: "Você foi autenticado com sucesso!",
        };

        yield put(showToast(toast));
        yield put(authLoginSuccess(response));
    } catch (error) {
        const toast: Toast = {
            type: "error",
            title: "Erro de Login",
            message: "Ocorreu um erro ao fazer login. Verifique suas credenciais.",
        };

        yield call(showToast, toast);

        yield put(authLoginFailure(response));
    }
}

export const authSaga = all([takeLatest(AUTH_REQUEST, authData)])