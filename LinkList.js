
import React, { Component } from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import LinkItem from './LinkItem'

export default class LinkList extends Component {
  _keyExtractor(item, index) {
    return item.id
  }

  render() {
    return (
      <FlatList
        data={this.props.links}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => <LinkItem title={item.title} url={item.url} icon={item.icon}></LinkItem>}
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

