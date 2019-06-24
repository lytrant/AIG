import React, {Component} from "react"
import {View} from "react-native"
import styles from "./styles"

export interface Props {
  loading: boolean;
  signUpSuccess: boolean;
}

interface State {
  userName: string;
  password: string;
  rePassword: string;
}

class SignUpScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      userName: "",
      password: "",
      rePassword: ""
    }
  }

  render() {
    return <View style={styles.container} />
  }
}

export default SignUpScreen
