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
  TabBarIOS,
  NavigatorIOS

} from 'react-native';

import Mymovie from './components/Mymovie'
import Toilet from './components/Toilet'
import Navigator from './components/Navigator'
import Setting from './components/Setting'
import MyWebViews from './common/MyWebViews'

export default class MyClass extends Component {
  constructor(props){
    super(props);
    this.state={
      defaultIndex:2
    }
  }
  changeSelected(index){
    this.setState({defaultIndex:index});
  }
  render() {
    var data=require("./components/movies");
    return (
      <View style={styles.container}>
          <TabBarIOS>
              <TabBarIOS.Item
                title={"洗手间"}
                icon={require("./img/toilet.png")}
                selected={this.state.defaultIndex===1}
                onPress={this.changeSelected.bind(this,1)}
              >
                  {/*<Toilet/>*/}
                  <MyWebViews uri={"http://localhost:63342/JS%E9%AB%98%E9%98%B6/reactnative/MyClass/html/new.html?_ijt=3pe82tdsqv1dj31dkscjvb0op"}/>

              </TabBarIOS.Item>
              <TabBarIOS.Item
                title={"阅读"}
                icon={require("./img/read.png")}
                selected={this.state.defaultIndex===2}
                onPress={this.changeSelected.bind(this,2)}
              >
                <Navigator/>
              </TabBarIOS.Item>
              <TabBarIOS.Item
                title={"电影"}
                icon={require("./img/movie.png")}
                selected={this.state.defaultIndex===3}
                onPress={this.changeSelected.bind(this,3)}
              >
                  <NavigatorIOS
                      initialRoute={{
                          component:Mymovie,
                          title:'',
                          navigationBarHidden:true,
                          passProps:{
                              myData:data
                          }
                  }}
                      style={{flex:1}}
                  />
              </TabBarIOS.Item>
              <TabBarIOS.Item
                title={"设置"}
                icon={require("./img/set.png")}
                selected={this.state.defaultIndex===4}
                onPress={this.changeSelected.bind(this,4)}
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

AppRegistry.registerComponent('MyClass', () => MyClass);
