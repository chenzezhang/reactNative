import React, { Component } from 'react'

import { Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation'

// import pushPage from './../router/index'

import Test from './../components/test/index'

import Test1 from './../components/test1/index'

class Navigators extends Component {
    static navigationOptions = {
      tabBarLabel: 'Home'
    }
  
    render() {
      return (
          <Test Test1 = 'Test1' />
        );
    }
}


const MyApp = TabNavigator({
  Home: {
    screen: Navigators,
  },
  Test1: {
    screen: Test1,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
  });

export default MyApp;
