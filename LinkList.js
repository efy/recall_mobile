
import React, { Component } from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import LinkItem from './LinkItem'

export default class LinkList extends Component {
  list() {
    let d = []
    for(let i = 0; i <= 20; i++) {
      var link = {
        key: "Link " + i,
        url: "http://link" + i + ".com",
        icon: ""
      }
      d.push(link)
    }
    return d
  }

  render() {
    return (
      <FlatList
        data={this.list()}
        renderItem={({item}) => <LinkItem title={item.key} url={item.url} icon={item.icon}></LinkItem>}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
})

