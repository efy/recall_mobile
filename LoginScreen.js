import React, { Component } from 'react';
import { TextInput, Text, StatusBar, StyleSheet, Button, View } from 'react-native';
import LinkList from './LinkList'
import SearchBox from './SearchBox'

export default class LoginScreen extends Component {
  auth() {
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />

        <View style={styles.centerContainer}>
          <Text style={styles.bigheader}>Recall</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Server Address</Text>
            <TextInput style={styles.input}/>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input}/>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.input}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button color="white" title="Login" onPress={this.auth}/>
          </View>
        </View>
      </View>
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
  label: {
    color: 'white',
    fontSize: 18
  },
  input: {
    height: 40,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    color: 'white',
    borderWidth: .5,
    borderColor: "#34495e"
  },
  inputGroup: {
    marginBottom: 10
  },
  buttonContainer: {
    backgroundColor: "#34495e",
    padding: 5
  }
});
