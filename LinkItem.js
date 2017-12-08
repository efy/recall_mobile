
import React, { Component } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

export default class LinkItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer }>
          <Image source={{uri: this.props.icon}} style={{width:16, height: 16}} />
        </View>
        <View style={styles.infoContainer}>
          <Text numberOfLines={1} style={styles.title}>{this.props.title}</Text>
          <Text numberOfLines={1} style={styles.url}>{this.props.url}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: 0.5,
    borderColor: "#eaeaea",
    flex: 1,
    flexDirection: "row"
  },
  iconContainer: {
    padding: 5,
    justifyContent: 'space-around'
  },
  infoContainer: {
    padding: 5,
    flex: 1
  },
  title: {
    fontWeight: "bold",
  },
  url: {
    color: "#888"
  }
})
