import {combineReducers} from "redux"
import auth from "@src/modules/auth/redux/reducers"

const allReducers = combineReducers({
  auth
})

export default allReducers
