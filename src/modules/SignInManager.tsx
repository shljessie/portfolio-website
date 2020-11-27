import {UserInfo} from "../shared/API";

const SAVE_USER_INFO = 'signInManager/SAVE_USER_INFO' as const

export const signInActions = {
  saveUserInfo: (props: UserInfo) => ({
    type: SAVE_USER_INFO,
    payload: props
  })
}

type SignInActions = ReturnType<typeof signInActions.saveUserInfo>

const initialState: UserInfo = {} as UserInfo

export default function signInReducer (
  state: UserInfo = initialState,
  action: SignInActions
): UserInfo {
  switch (action.type) {
    case SAVE_USER_INFO:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}