import React from 'react';
import {AsyncStorage} from 'react-native'
import LoginScreen from './LoginScreen'
import Tabs from './Tabs'
import { StackNavigator } from "react-navigation"

const LoggedOut = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
})

const isValidToken = (token) => {
  if (token != "" && token != null) {
    return true
  }
  return false
}

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      authenticated: false,
      checkedAuthentication: false
    }
  }

  componentWillMount() {
    let self = this
    AsyncStorage.getItem("auth").then((token) => {
      let valid = isValidToken(token)
      if(valid) {
        self.setState({authenticated: true})
      }
    })
  }

  render() {
    const authenticated = this.state.authenticated

    if (authenticated) {
      return <Tabs/>
    } else {
      return <LoggedOut/>
    }
  }
}
