import signUpReducer, {SignUpState} from "./signUpStateManager"

import {UserInfo} from "../shared/API";
import {combineReducers} from "redux";
import signInReducer from "./SignInManager";

export type RootState = {
  signUp: SignUpState
  signIn: UserInfo
}

const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer
})

export default rootReducer

