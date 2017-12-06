import React from 'react';
import {TabNavigator} from 'react-navigation'
import LibraryScreen from './LibraryScreen'
import AccountScreen from './AccountScreen'

export default App = TabNavigator({
  Home: { screen: LibraryScreen },
  Account: { screen: AccountScreen }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#000'
  }
})

