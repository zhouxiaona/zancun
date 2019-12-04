/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//引入自己创建的组件Hello
import Hello from './components/Hello';
import Hello2 from './components/Hello2';
import Header from './components/Header';
import News from './components/News';
import News2 from './components/News2';
import MyInput from './components/MyInput';
import MyImage from './components/MyImage'
import MyScrollView from './components/MyScrollView'
import MyListView from './components/MyListView'
import Mymovies from './components/Mymovies'
import Xiec from './components/Xiec'

// var moviess=require('https://api.douban.com/v2/movie/in_theaters');
// console.log("电影数据是",moviess);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {

  render() {
    // var data=[{id:1,title:"习近平同党外人士座谈并共迎新春"},{id:2,title:"马尔代夫上演政治大戏 中国莫名“躺枪”"},{id:3,title:"最强运载火箭首飞 跑车将太空漂浮数十亿年最强运载火箭首飞 跑车将太空漂浮数十亿年最强运载火箭首飞 跑车将太空漂浮数十亿年最强运载火箭首飞 跑车将太空漂浮数十亿年最强运载火箭首飞 跑车将太空漂浮数十亿年"},{id:4,title:"最强运载火箭首飞 跑车将太空漂浮数十亿年"},{id:5,title:"最强运载火箭首飞 跑车将太空漂浮数十亿年最强运载火箭首飞 跑车将太空漂浮数十亿年最强运载火箭首飞 跑车将太空漂浮数十亿年最强运载火箭首飞 跑车将太空漂浮数十亿年"},{id:6,title:"最强运载火箭首飞 跑车将太空漂浮数十亿年"}];
    // console.log("???",data);
      var data=["第一条数据","第二条数据","第三条数据","第四条数据","第五条数据","第六条数据"];
      var movies=require('./components/movies');
    return (
          <View style={{flex:1}}>
              {/*<Header></Header>*/}
              {/*<News2 data={data}></News2>*/}
              {/*<MyInput></MyInput>*/}
              {/*<MyImage></MyImage>*/}
              {/*<MyScrollView myData={data}></MyScrollView>*/}
              {/*<MyListView myData={data}></MyListView>*/}
              {/*<Mymovies myData={movies}></Mymovies>*/}
              <Xiec></Xiec>
          </View>
    );
  }
}

const styles = StyleSheet.create({

});
