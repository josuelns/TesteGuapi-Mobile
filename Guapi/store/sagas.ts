import { all } from 'redux-saga/effects'
import { authSaga } from './auth/authSaga'
import { logoutSaga } from './auth/logoutSaga'

export default function* rootSaga(): Generator<any> {
  return yield all([
    authSaga,
    logoutSaga
  ])
}