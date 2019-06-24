import * as actions from "../actions"
import {IState} from "./type"
import * as type from "../actions/type"

const initStateAuth: IState = {
  signIn: {
    loading: false,
    response: {},
    error: {},
    success: false
  },
  signUp: {
    loading: false,
    response: {},
    error: {},
    success: false
  }
}

const authReducers = (state = initStateAuth, action: type.action) => {
  switch (action.type) {
    case actions.ACTION_SIGN_IN:
      return {
        ...state,
        signIn: {
          loading: true,
          response: {},
          error: {},
          success: false
        }
      }
    case actions.ACTION_SIGN_IN_SUCCESS:
      return {
        ...state,
        signIn: {
          loading: false,
          response: action.payload,
          error: {},
          success: true
        }
      }
    case actions.ACTION_SIGN_IN_FAILURE:
      return {
        ...state,
        signIn: {
          loading: false,
          response: {},
          error: action.payload,
          success: false
        }
      }
    case actions.ACTION_SIGN_UP:
      return {
        ...state,
        signUp: {
          loading: true,
          response: {},
          error: {},
          success: false
        }
      }
    case actions.ACTION_SIGN_UP_SUCCESS:
      return {
        ...state,
        signUp: {
          loading: false,
          response: action.payload,
          error: {},
          success: true
        }
      }
    case actions.ACTION_SIGN_UP_FAILURE:
      return {
        ...state,
        signUp: {
          loading: false,
          response: {},
          error: action.payload,
          success: false
        }
      }
    default:
      return state
  }
}

export default authReducers
