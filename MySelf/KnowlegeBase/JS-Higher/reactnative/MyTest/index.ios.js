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
  NavigatorIOS,
  TabBarIOS,
  Image,
  WebView
} from 'react-native';

import FetchPost from './components/FetchPost'
import MyWebView from './components/MyWebView'

export default class MyTest extends Component {
  constructor(props){
      super(props);
      // this.state={
      //     bookData:""
      // }
  }

  render() {
    var url="http://localhost:63342/JS%E9%AB%98%E9%98%B6/reactnative/MyTest/img/webhtml.html?_ijt=6raf981bk1cjbq91lcf2e3csa3";
    return (<View style={{flex:1}}>
                {/*<FetchPost></FetchPost>*/}
                <MyWebView url={url}></MyWebView>
            </View>)
  }

  //请求数据，先是接口再是配置
  // 绝对地址
  // componentDidMount(){
  //     var url="https://api.douban.com/v2/book/1220562";
  //
  //     fetch(url,{}).then((res)=>{
  //         return res.json();
  //     }).then((res)=>{
  //         console.log("获取到的数据",res);
  //         this.setState({
  //             bookData:res
  //         });
  //
  //     }).catch((err)=>{
  //         console.log("请求错误信息",err);
  //     });
  //
  // }

}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('MyTest', () => MyTest);
