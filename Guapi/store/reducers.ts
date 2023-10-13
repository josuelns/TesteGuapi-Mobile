import { combineReducers } from 'redux'
import { AuthReducer } from './auth/authReducer'
import toastReducer from './toast/toastReducer'

const rootReducer = combineReducers({
  auth: AuthReducer,
  toast: toastReducer
})

export default rootReducer