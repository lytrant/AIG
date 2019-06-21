import React from "react"
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import {composeWithDevTools} from "redux-devtools-extension"

import allReducers from "./src/redux/reducers"

// redux saga
import createSagaMiddleware from "redux-saga"
import rootSaga from "./src/redux/sagas"

const sagaMiddleware = createSagaMiddleware()

let store = createStore(allReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))

console.disableYellowBox = true
import SignInScreen from "@src/modules/auth/screens/signIn"

sagaMiddleware.run(rootSaga)

const App = () => (
  <Provider store={store}>
    <SignInScreen />
  </Provider>
)

export default App
