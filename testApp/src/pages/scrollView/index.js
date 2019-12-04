import Taro, { Component } from '@tarojs/taro'
import { View, Button, ScrollView } from '@tarojs/components'
import './index.scss'

export default class Other extends Component {
  constructor (props) {
    super(props)
  }

  config = {
    navigationBarTitleText: '其他'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  onScrollToUpper = (e) => {
    e.stopPropagation();
    console.log('我是onScrollToUpper方法')
  }

  onScroll = (e) => {
    e.stopPropagation()
    console.log('我是onScroll方法')
  }

  onScrollToLower = (e) => {
    e.stopPropagation()
    console.log('我是onScrollToLower方法')
  }

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
      <View>
        <ScrollView
          className='scrollView'
          scrollY
          // style='height:300px;'
          scrollWithAnimation
          scrollTop='0'
          lowerThreshold='20'
          upperThreshold='20'
          onScrollToUpper={this.onScrollToUpper}
          onScroll={this.onScroll}
          onScrollToLower={this.onScrollToLower}
        >
          {itemsList}
        </ScrollView>
      </View>
    )
  }
}
