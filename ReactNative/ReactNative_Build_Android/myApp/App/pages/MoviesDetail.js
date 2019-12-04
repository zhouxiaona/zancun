import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
} from 'react-native'
import { SubjectDetail } from '../api/API'
export default class MoviesDetail extends Component {
  constructor(props){
    super(props)
    this.state={
        mainData:{}
    }
  }

  // 自定义导航设置
  static navigationOptions = (({navigation})=>{
    return {
        title: navigation.getParam('title','MoviesDetail')
    }
  })

  componentDidMount() {
    const {navigation} = this.props
    this.getInfoData(navigation.getParam('id',''))
  }

  getInfoData = async (id) => {
    let {data} = await SubjectDetail({id})
    this.setState({
        mainData:data
    })
}

  render(){
    const {navigation} = this.props
    const {mainData} = this.state
    console.log(mainData,'mainData=======')
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>MoviesDetail</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text1: {
    textAlign: 'center',
    fontSize:23,
  }
});