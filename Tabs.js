import React from 'react';
import {TabNavigator} from 'react-navigation'
import LibraryScreen from './LibraryScreen'
import AccountScreen from './AccountScreen'

export default Tabs = TabNavigator({
  Library: {
    screen: LibraryScreen,
    navigationOptions: {
      title: 'Library'
    }
  },
  Account: {
    screen: AccountScreen,
    navigationOptions: {
      title: 'Account'
    }
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#000'
  }
})


