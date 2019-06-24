import {all} from "redux-saga/effects"
import {watchAuth} from "@src/modules/auth/redux/sagas"

export default function* rootSaga() {
  yield all([watchAuth()])
}
