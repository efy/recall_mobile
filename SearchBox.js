
import React, { Component } from 'react'
import {TextInput, View, StyleSheet} from 'react-native'

export default class LinkList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Search your library"
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
    borderWidth: 0.5,
    borderColor: "#eaeaea"
  }
})
