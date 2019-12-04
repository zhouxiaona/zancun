/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import Parking from './components/Parking'
import Blog from './components/Blog'
import Setting from './components/Setting'
import Choice from './components/Choice'

export default class MySetting extends Component {
  constructor(props){
    super(props);
    this.state={
      defaultIndex:4
    }
  }
  _changeIndex(index){
    this.setState({
        defaultIndex:index
    });
  }
  render() {
    return (
      <View style={styles.container}>
          <TabBarIOS>
              <TabBarIOS.Item
                title={"停车"}
                icon={require("./img/t.png")}
                selected={this.state.defaultIndex==1}
                onPress={this._changeIndex.bind(this,1)}
              >
                <Parking/>
              </TabBarIOS.Item>

              <TabBarIOS.Item
                title={"精选"}
                icon={require("./img/j.png")}
                selected={this.state.defaultIndex==2}
                onPress={this._changeIndex.bind(this,2)}
              >
                <Blog/>
              </TabBarIOS.Item>

              <TabBarIOS.Item
                title={"博客"}
                icon={require("./img/y.png")}
                selected={this.state.defaultIndex==3}
                onPress={this._changeIndex.bind(this,3)}
              >
                <Choice/>
              </TabBarIOS.Item>

              <TabBarIOS.Item
                title={"设置"}
                icon={require("./img/s.png")}
                selected={this.state.defaultIndex==4}
                onPress={this._changeIndex.bind(this,4)}
              >
                <Setting/>
              </TabBarIOS.Item>
          </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

AppRegistry.registerComponent('MySetting', () => MySetting);
