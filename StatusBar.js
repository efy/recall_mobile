import React, {Component} from 'react'
import {View, Platform, StyleSheet} from 'react-native'

export default class StatusBar extends Component {
  render() {
    return(
      <View style={[styles.background, this.props.style || {}]}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    height: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: 'white'
  }
})
