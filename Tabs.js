import React from 'react';
import {TabNavigator} from 'react-navigation'
import LibraryScreen from './LibraryScreen'
import AccountScreen from './AccountScreen'

export default Tabs = TabNavigator({
  Library: {
    screen: LibraryScreen,
    navigationOptions: {
      title: 'Library',
      headerTitle: 'Library'
    }
  },
  Account: {
    screen: AccountScreen,
    navigationOptions: {
      title: 'Account',
      headerTitle: 'Account Settings'
    }
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#000'
  }
})


