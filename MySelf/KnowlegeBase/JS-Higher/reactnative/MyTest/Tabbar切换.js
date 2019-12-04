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
  TabBarIOS
} from 'react-native';

//es6的组件引入方式
import Mymovies from './components/Mymovies'
import Xiec from './components/Xiec'
import First from './components/First'
import Second from './components/Second'

//es5的组件引入方式写法（在此不可用）
// var First=require('./components/First')
// var Second=require('./components/Second')

export default class MyTest extends Component {
  constructor(props){
      super(props);
      this.state={
          selectedTab:"shouyeTab",
          defaultIndex:1
      }
  }
  //两种方法切换组件：
  changeTab(index){
      // alert(index);
      this.setState({defaultIndex:index})
  }

  render() {
    var movies=require('./components/movies');

    return (
      <View style={styles.container}>
        {/*<Xiec></Xiec>*/}

        <TabBarIOS>
            <TabBarIOS.Item
                title={"首页"}
                icon={require("./img/z.png")}
                onPress={this.changeTab.bind(this,1)}
                // onPress={()=>{
                //         this.setState({
                //             selectedTab:"shouyeTab"
                //         })
                //     }
                // }
                selected={this.state.defaultIndex===1}
                // selected={this.state.selectedTab==="shouyeTab"}
            >
                <NavigatorIOS
                    initialRoute={{
                        component:First,
                        title:"第一组件",
                        //  第一页隐藏，第二页显示
                        navigationBarHidden:true
                    }}
                    // 写在这个位置，两页都没有
                    // navigationBarHidden={true}
                    style={styles.navigatorStyle}>
                </NavigatorIOS>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                title={"电影"}
                icon={require("./img/m.png")}
                onPress={this.changeTab.bind(this,2)}
                // onPress={()=>{
                //         this.setState({
                //             selectedTab:"movieTab"
                //         })
                //     }
                // }
                selected={this.state.defaultIndex===2}
                // selected={this.state.selectedTab==="movieTab"}
            >
                <Mymovies  myData={movies}></Mymovies>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                title={"其他"}
                icon={require("./img/q.png")}
                onPress={this.changeTab.bind(this,3)}
                // onPress={()=>{
                //         this.setState({
                //             selectedTab:"qitaTab"
                //         })
                //     }
                // }
                selected={this.state.defaultIndex===3}
                // selected={this.state.selectedTab==="qitaTab"}
            >
                <Text>我是第三个Tab模块</Text>
            </TabBarIOS.Item>

        </TabBarIOS>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    navigatorStyle:{
      flex:1
    },
    container:{
      flex:1
    }
});

AppRegistry.registerComponent('MyTest', () => MyTest);
