import { AuthParams } from "../../domains/auth/AuthTypes"
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS, AUTH_LOGOUT_REQUEST, AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAILURE } from "./authEnum"

export interface AuthState {
  params: AuthParams
  loading: boolean
  error: string
}

const initialState: AuthState = {
  params: {} as AuthParams,
  loading: false,
  error: ''
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const AuthReducer = (
  state = initialState,
  action: {
    type: string
    payload: AuthParams
  }
) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        params: action.payload,
        error: ''
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        params: action.payload,
        error: ''
      }
    case AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case AUTH_LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        params: action.payload,
        error: ''
      }
    case AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        params: action.payload,
        error: ''
      }
    case AUTH_LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default: return state
  }
}