export interface IState {
  signIn: {
    loading: boolean,
    response: object,
    error: object,
    success: boolean
  };
  signUp: {
    loading: boolean,
    response: object,
    error: object,
    success: boolean
  };
}
