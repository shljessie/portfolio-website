const UPDATE_SIGN_UP_STATE = 'signUpStateManager/UPDATE_SIGN_UP_STATE' as const

export type SignUpState = {
  isSignedUp: boolean,
  email: string
}

export const signUpActions = {
  updateSignUpState: (isSignedUp: boolean, email: string) => ({
    type: UPDATE_SIGN_UP_STATE,
    payload: {
      isSignedUp: isSignedUp,
      email: email
    }
  })
}

type SignUpActions = ReturnType<typeof signUpActions.updateSignUpState>

const initialState: SignUpState = {
  isSignedUp: false,
  email: ''
}

export default function signUpReducer (
  state: SignUpState = initialState,
  action: SignUpActions
): SignUpState {
  switch (action.type) {
    case UPDATE_SIGN_UP_STATE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}