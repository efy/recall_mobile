import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import LinkList from './LinkList'
import SearchBox from './SearchBox'
import StatusBar from './StatusBar'

export default class AccountScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Account"
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
