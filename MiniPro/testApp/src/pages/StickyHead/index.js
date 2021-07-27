import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import './index.scss'

export default class StickyHead extends Component {
  constructor (props) {
    super(props)
  }

  config = {
    navigationBarTitleText: 'StickyHead'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  // onScrollToUpper = (e) => {
  //   e.stopPropagation();
  //   console.log('我是onScrollToUpper方法',e)
  // }

  onScroll = (e) => {
    // e.stopPropagation()
    console.log('我是onScroll方法',e)
  }

  // onScrollToLower = (e) => {
  //   e.stopPropagation()
  //   console.log('我是onScrollToLower方法',e)
  // }

  render () {
    const arr = [...Array(300).keys()]
    var itemsList = arr.map((num) => {
      return (
        <View
          key={num}
        >
          我是第{num+1}个元素
        </View>
      )
    })
    return (
      <ScrollView
        className='container'
        scrollY
        scrollWithAnimation
        scrollTop='0'
        lowerThreshold='20'
        upperThreshold='20'
        onScrollToUpper={this.onScrollToUpper}
        onScroll={this.onScroll}
        onScrollToLower={this.onScrollToLower}
      >
        <View className='topHeader'></View>
        <View className='tabBar'>
          <View>LEFT</View>
          <View>RIGHT</View>
        </View>
        <View className='tabCont'>
          {itemsList}
        </View>
      </ScrollView>
    )
  }
}
