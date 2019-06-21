import React, {Component} from "react"
import {View} from "react-native"
import styles from "./styles"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {signIn} from "@src/modules/auth/redux/actions"

export interface Props {
  loading: boolean;
  signInSuccess: boolean;
  signIn(): void;
}

interface State {
  userName: string;
  password: string;
}

class SignInScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      userName: "",
      password: ""
    }
  }

  render() {
    console.log(this.props)
    return <View style={styles.container} />
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.signIn.loading,
    success: state.auth.signIn.success
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {
    signIn
  }
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen)
