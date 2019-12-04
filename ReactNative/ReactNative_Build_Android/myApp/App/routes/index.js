import React, {Component} from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

// 导入navigation
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation'

// 引入页面组件
import MainScreen from '../pages/Main'
import MoviesScreen from '../pages/Movies'
import MyWebView from '../pages/MyWebView'
import WallPaper from '../pages/WallPaper'
import MoviesDetail from '../pages/MoviesDetail'
// 注册路由
const RootStack = createStackNavigator(
  {
    Home: {
      screen:MainScreen,
      navigationOptions:{
        header:null,
      }
    },
    Movies: MoviesScreen,
    MyWebView: MyWebView,
    WallPaper:WallPaper,
    MoviesDetail:MoviesDetail,
  },
  {
    initialRouteName:'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'lightblue',
      },
      headerTintColor: '#fff',
      headerTintStyle:{
        fontSize:12
      }
    },
    navigationOptions: {
    },
  },
)

// 导出
const AppContainer = createAppContainer(RootStack)
export default class Routes extends Component {
  constructor(props) {
    super(props)
   }
  render() {
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
      )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})
