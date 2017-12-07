import React from 'react';
import {TabNavigator} from 'react-navigation'
import LibraryScreen from './LibraryScreen'
import AccountScreen from './AccountScreen'

export default Tabs = TabNavigator({
  Home: { screen: LoginScreen },
  Account: { screen: AccountScreen }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#000'
  }
})


