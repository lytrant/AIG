export interface SignInParams {
  userName: string;
  password: string;
}
export interface SignIn {
  type: string;
  payload: SignInParams;
}
export interface SignInResponse {}
export interface SignInSuccess {
  type: string;
  payload: SignInResponse;
}
export interface SignInError {}
export interface SignInFailure {
  type: string;
  payload: SignInError;
}

export interface SignUpParams {
  userName: string;
  password: string;
  rePassword: string;
}
export interface SignUp {
  type: string;
  payload: SignUpParams;
}
export interface SignUpResponse {}
export interface SignUpSuccess {
  type: string;
  payload: SignUpResponse;
}
export interface SignUpError {}
export interface SignUpFailure {
  type: string;
  payload: SignUpError;
}

export type action = SignIn | SignInSuccess | SignInFailure | SignUp | SignUpSuccess | SignUpFailure
