import { all, call, put, takeLatest } from '@redux-saga/core/effects'

import AuthService from '../../domains/auth/AuthService'
import {authlogoutFailure, authlogoutSuccess } from './authActions'
import { AUTH_LOGOUT_REQUEST } from './authEnum'
import { showToast } from '../toast/toastActions'
import Toast from '../../domains/toast/ToastTypes'

let response: any

const logoutRequest = async (): Promise<any> => {
    let data: any
    try {
        data = await AuthService.logout();
        response = data
        return data
    } catch (error) {
        console.log(error)
    }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function* logoutData() {
    try {
        yield call(logoutRequest)
        const toast: Toast = {
            type: "success",
            title: "Logout bem-sucedido",
            message: "Você foi desconectado com sucesso!",
        };

        yield put(showToast(toast));
        yield put(authlogoutSuccess(response));
    } catch (error) {
        const toast: Toast = {
            type: "error",
            title: "Erro de Logout",
            message: "Ocorreu um erro ao fazer Logout.",
        };

        yield call(showToast, toast);

        yield put(authlogoutFailure(response));
    }
}

export const logoutSaga = all([takeLatest(AUTH_LOGOUT_REQUEST, logoutData)])