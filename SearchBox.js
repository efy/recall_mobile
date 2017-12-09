
import React, { Component } from 'react'
import {TextInput, View, StyleSheet} from 'react-native'

export default class LinkList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  input: {
    height: 35,
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    padding: 10
  }
})
