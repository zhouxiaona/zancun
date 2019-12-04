import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class FlipCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      itemIndex: null,
      allAni: false,
      itemList: [],
    }
  }

  config = {
    navigationBarTitleText: 'FlipCard'
  }

  componentWillMount () {

  }

  componentDidMount () {
    const { itemList } = this.state
    const renderIndex = parseInt(Math.random()*9)
    console.log(renderIndex,'renderIndex====')
    while(itemList.length < 9){
      let obj = {}
      obj.front = 'click me'
      obj.back = 'luck next'
      itemList.push(obj)
    }
    itemList[renderIndex].back = '中奖了'
    this.setState({itemList})
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  doAni = (e) => {
    this.setState({
      itemIndex: e
    })
    setTimeout(()=>{
      this.setState({
        allAni: true
      })
    },1100)
  }

  render () {
    const { itemIndex, itemList, allAni } = this.state
    const itemLists = itemList && itemList.map((item,index) => {
      return (
        <View className={itemIndex === index  || allAni ? 'Wrap wrapAni' : 'Wrap'} key={index} onClick={this.doAni.bind(this,index)}>
          <View className='front'>{item.front}</View>
          <View className={item.back === '中奖了' ? 'back backLuck' : 'back'}>{item.back}</View>
        </View>
      )
    })
    return (
      <View className='container'>
        {itemLists}
      </View>
    )
  }
}
