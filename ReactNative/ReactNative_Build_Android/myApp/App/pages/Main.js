import React, {Component} from 'react'
import {
  Image,
} from 'react-native'

// 导入navigation
import {
  createAppContainer,
  createBottomTabNavigator,
  TabBarBottom,
} from 'react-navigation'

// 引入首页面组件
import HomeScreen from './Home'
import ProfileScreen from './Profile'

const TabStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions:{
        tabBarLabel:'Home',
        tabBarIcon:({focused, tintColor,horizontal})=>{
          return (
            <Image
              source={focused ? require('../img/homeS.png') : require('../img/home.png')}
            />
          )
        }
      }
    },
    Profile: {
      screen:ProfileScreen,
      navigationOptions:{
        tabBarLabel:'Profile',
        tabBarIcon:({focused, tintColor,horizontal})=>{
          return (
            <Image
              source={focused ? require('../img/setS.png') : require('../img/set.png')}
            />
          )
        }
      }
    },
  },
  {
    initialRouteName:'Home',
    headerMode:'screen',
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
    tabBarOptions: {
      activeTintColor: '#1296db',
      inactiveTintColor: 'gray',
      labelStyle:{
        fontSize: 12
      }
    },
    animationEnabled:true,
    swipeEnabled: true,
  },
)

// 导出
const MainScreen = createAppContainer(TabStack)
export default MainScreen
