import * as type from "./type"

const ACTION_SIGN_IN = `[AUTH] SIGN_IN`
const signIn = (payload: type.SignInParams): type.SignIn => ({type: ACTION_SIGN_IN, payload})

const ACTION_SIGN_IN_SUCCESS = `[AUTH] SIGN_IN_SUCCESS`
const signInSuccess = (payload: type.SignInResponse) => ({type: ACTION_SIGN_IN_SUCCESS, payload})

const ACTION_SIGN_IN_FAILURE = `[AUTH] SIGN_IN_FAILURE`
const signInFailure = (payload: type.SignInError) => ({type: ACTION_SIGN_IN_FAILURE, payload})

const ACTION_SIGN_UP = `[AUTH] SIGN_UP`
const signUp = (payload: type.SignUpParams) => ({type: ACTION_SIGN_UP, payload})

const ACTION_SIGN_UP_SUCCESS = `[AUTH] SIGN_UP_SUCCESS`
const signUpSuccess = (payload: type.SignUpResponse) => ({type: ACTION_SIGN_UP_SUCCESS, payload})

const ACTION_SIGN_UP_FAILURE = `[AUTH] SIGN_UP_FAILURE`
const signUpFailure = (payload: type.SignInError) => ({type: ACTION_SIGN_UP_FAILURE, payload})

export {
  //SignIn
  ACTION_SIGN_IN,
  ACTION_SIGN_IN_SUCCESS,
  ACTION_SIGN_IN_FAILURE,
  signIn,
  signInSuccess,
  signInFailure,
  //SignUp
  ACTION_SIGN_UP,
  ACTION_SIGN_UP_SUCCESS,
  ACTION_SIGN_UP_FAILURE,
  signUp,
  signUpSuccess,
  signUpFailure
}
