import React, { Component, PropTypes } from 'react'

import { StyleSheet, Text, View, Button } from 'react-native';

class Test extends Component {

    static PropTypes = {
        Test1: PropTypes.string
    }    

    render() {

        return (
            <View style={style.container}>
                <View style={style.viewItem1}>
                    <Text>欢迎来到这里，点击dfsfsdfsdf按钮前往下一页</Text>    
                </View>
                <View style={style.viewItem2}>
                    <Text>欢迎来到这里，点sdssssss击按钮前往下一页</Text>  
                </View>
                <View style={style.viewItem3}>
                    <Button style={style.welcome}
                        onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}  
                    title="一页"
                    />  
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  viewItem1:{
    flex:1,
    flexDirection:'row',
    height:50,
  },
  viewItem2:{
    flex:1,
    flexDirection:'row',
    height:50,
    marginTop:15,
  },
  viewItem3:{
    flex:1,
    flexDirection:'row',
    height:20,
  },
});



export default Test;