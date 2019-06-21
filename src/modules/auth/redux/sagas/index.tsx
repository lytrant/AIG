import {takeLatest, put, call} from "redux-saga/effects"
import * as actions from "../actions"
import * as type from "../actions/type"
import * as service from "../service"

function* signIn(payload: type.SignIn) {
  const response = yield call(service.signIn, payload.payload)
  if (response.status === 200) {
    yield put(actions.signInSuccess(response.data))
  } else {
    yield put(actions.signInFailure(response.data))
  }
}

export function* watchAuth() {
  yield takeLatest(actions.ACTION_SIGN_IN_SUCCESS, signIn)
}
