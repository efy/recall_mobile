import React, { Component } from 'react';
import { AsyncStorage, KeyboardAvoidingView, Alert, TextInput, Text, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinkList from './LinkList'
import SearchBox from './SearchBox'

const login = (server, username, password) => {
  return new Promise((resolve, reject) => {
    let auth_token = btoa(username + ":" + password)
    fetch(server + "/api/auth", {
      method: "post",
      headers: new Headers({
        'Authorization': 'Basic ' + auth_token
      })
    }).then((res) => {
      if (res.status != 200) {
        res.text().then((text) => {
          let err = new Error(text)
          reject(err)
        })
      }
      return res.text()
    }).then((token) => {
      resolve(token)
    }).catch((err) => {
      reject(err)
    })
  })
}

const TOKEN_KEY = "auth"
const SERVER_KEY = "server"
const USER_KEY = "username"


export default class LoginScreen extends Component {
  constructor(props) {
    super(props)

    let self = this

    self.state = {
      server: '',
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    let self = this

    AsyncStorage.getItem(SERVER_KEY).then((val) => {
      if (val) {
        self.setState({server: val})
      }
    })

    AsyncStorage.getItem(USER_KEY).then((val) => {
      if (val) {
        self.setState({username: val})
      }
    })
  }

  auth() {
    let server = this.state.server
    let username = this.state.username
    let password = this.state.password

    login(server, username, password).then((token) => { 
      AsyncStorage.setItem(TOKEN_KEY, token)
      AsyncStorage.setItem(SERVER_KEY, server)
      AsyncStorage.setItem(USER_KEY, username)

      // Navigate to logged in section
    }).catch((err) => {
      console.log(err)
      Alert.alert("Authentication failed please check your credentials and try again")
    })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />

        <View style={styles.centerContainer}>
          <TextInput
            placeholder="Server address"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            value={this.state.server}
            onChangeText={(text) => { this.setState({server: text}) }} 
            onSubmitEditing={() => this.usernameInput.focus()}
            keyboardType="url"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput 
            placeholder="Username"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            value={this.state.username}
            onChangeText={(text) => { this.setState({username: text}) }}
            onSubmitEditing={() => this.passwordInput.focus()}
            ref={(input) => this.usernameInput = input}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="go"
            onChangeText={(text) => { this.setState({password: text}) }}
            ref={(input) => this.passwordInput = input}
            secureTextEntry={true} 
            style={styles.input}
          />
          <TouchableOpacity style={styles.buttonContainer} onPress={(e) => this.auth(e)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'space-around'
  },
  centerContainer: {
    padding: 20,
    justifyContent: 'space-around'
  },
  bigheader: {
    color: 'white',
    fontSize: 48,
    marginBottom: 48
  },
  input: {
    height: 40,
    marginBottom: 14,
    paddingLeft: 10,
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  buttonContainer: {
    backgroundColor: "#34495e",
    height: 40,
    justifyContent: 'space-around'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700'
  }
})
