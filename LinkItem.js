
import React, { Component } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

export default class LinkItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer }>
          <Image source={{uri: "https://cdn.css-tricks.com/apple-touch-icon.png"}} style={{width:16, height: 16, backgroundColor: "#ccc"}} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.url}>{this.props.url}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: "#eaeaea",
    padding: 10,
    flex: 1,
    flexDirection: "row"
  },
  iconContainer: {
    padding: 10,
  },
  infoContainer: {
  },
  title: {
    fontWeight: "bold",
  },
  url: {
    color: "#444"
  }
})
