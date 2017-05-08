/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Navigators from './src/AppContainer/Navigotar'

export default class reactNative extends Component {
  render() {
    return (
        <Navigators />
    );
  }
}

AppRegistry.registerComponent('reactNative', () => reactNative);
