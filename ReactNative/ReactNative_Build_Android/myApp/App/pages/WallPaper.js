import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
} from 'react-native'
import {Intheaters} from '../api/API'
export default class WallPaper extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  // 自定义导航设置
  static navigationOptions = {
    title: 'WallPaper',
  }

  componentDidMount() {

  }

  render(){
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>WallPaper</Text>
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