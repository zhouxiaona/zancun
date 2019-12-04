import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import LoginStatus from '../../components/loginStatus'
import './index.scss'

export default class My extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  config = {
    navigationBarTitleText: 'My'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 数组去重
  myFilter = () => {
    var arr = ['apple', 'orange', 'banana', 'apple', 'banana']
    var newArr = arr.filter((ele, index, self)=>{
      return self.indexOf(ele) === index
    })
    console.log(newArr, '我是newArr')
  }

  // ref函数
  refCat = (node) => {
    console.log(node,'ref==node')
    this.cat = node
  }

  // roar () {
  //   this.cat.miao()
  // }

  // 小程序跳往其他页面
  gotoOther = (e) => {
    console.log(e,'arg参数')
    switch(e){
      case 'scrollView':
        Taro.navigateTo({
          url: `/pages/scrollView/index`,
        });
        break;
      case 'FlipCard':
        Taro.navigateTo({
          url: `/pages/FlipCard/index`,
        });
        break;
      case 'StickyHead':
        Taro.navigateTo({
          url: `/pages/StickyHead/index`,
        });
        break;
      default:
        break;
    }
  }

  render () {
    // 生成[0,1,...,99]数组
    // const numbers = [...Array(100).keys()]
    // const listItems = numbers.map((item) => {
    //   return (<View
    //     key={item}
    //     className='li'
    //   >
    //     我是第{item + 1}个数字
    //   </View>)
    // })
    return (
      <View className='index'>
        <View onClick={this.myFilter} className='pinkBtn'>Filter</View>
        {/* <View onClick={this.roar} className='blueBtn'>miaoRef</View> */}
        <View onClick={this.gotoOther.bind(this,'scrollView')} className='pinkBtn'>gotoScrollView</View>
        <View onClick={this.gotoOther.bind(this,'FlipCard')} className='blueBtn'>gotoFlipCard</View>
        <View onClick={this.gotoOther.bind(this,'StickyHead')} className='pinkBtn'>gotoStickyHead</View>
      </View>
    )
  }
}
