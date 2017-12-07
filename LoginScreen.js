import React, { Component } from 'react';
import { KeyboardAvoidingView, Alert, TextInput, Text, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinkList from './LinkList'
import SearchBox from './SearchBox'

const login = (server, username, password) => {
  return new Promise((resolve, reject) => {
    fetch(server + "/api/auth", {
      method: "post",
      headers: new Headers({
        'Username': username,
        'Password': password
      })
    }).then((res) => {
      return res.test()
    }).then((token) => {
      resolve(token)
    }).catch((err) => {
      reject(err)
    })
  })
}


export default class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      server: '',
      username: '',
      password: ''
    }
  }

  auth() {
    let server = this.state.server
    let username = this.state.username
    let password = this.state.password

    login(server, username, password).then((token) => {Alert.alert("Success") }).catch((err) => { Alert.alert("Failed") })
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
            returnKetType="next"
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
