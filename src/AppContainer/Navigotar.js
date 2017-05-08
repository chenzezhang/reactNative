import React, { Component } from 'react'

import { Navigator, StyleSheet, Text, View } from 'react-native';
// import { Navigator } from 'react-navigation'

import pushPage from './../router/index'

import test from './../components/test/index'

export default class Navigators extends Component {
    render() {
        return (
            <View><Text>asdfasdf</Text>
            </View>    
        //     <Navigator
        //         style={styles.container}
        //         initialRoute={pushPage.aaa(NavigatorRN,'test',test)}
        //         renderScene={this.renderNav}
        //         configureScene={(pushPage, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump}
        //         navigationBar={
        //             <Navigator.NavigationBar
        //                 routeMapper={NavigationBarRouteMapper}
        //                 style={styles.navBar}
        //             />
        //         }   
        //   />
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});