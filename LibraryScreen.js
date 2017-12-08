import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Button, View } from 'react-native';
import LinkList from './LinkList'
import SearchBox from './SearchBox'
import StatusBar from './StatusBar'

export default class LibraryScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bookmarks: []
    }
  }

  componentDidMount() {
    this.fetchBookmarks()
  }

  fetchBookmarks() {
    let self = this
    AsyncStorage.getItem("auth").then((token) => {
      AsyncStorage.getItem("server").then((server) => {
        fetch(server + "/api/bookmarks", {
          method: "get",
          headers: new Headers({
            'Authorization': 'Bearer ' + token
          })
        }).then((res) => {
          return res.json()
        }).then((json) => {
          self.setState({bookmarks: json})
        }).catch((err) => {
          console.log(err)
        })
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar/>
        <SearchBox/>
        <LinkList links={this.state.bookmarks}/>
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
