import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
} from 'react-native'
import {Intheaters} from '../api/API'
export default class Home extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  // 自定义导航设置
  // static navigationOptions = {
  //   header: 'Home',
  // }

  componentDidMount() {
    let {width,height,scale} = Dimensions.get('window')
    console.log(width,height,scale,'=============')
  }

  render(){
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Home</Text>
        <Button
          title="Home to Profile"
          onPress={() => {
            navigation.navigate('Profile',{id:1,name:'周娜'})
          }}
        />
        <Button
          title="Go to Movies"
          onPress={() => {
            navigation.navigate('Movies')
          }}
        />
        <Button
          title="Go to WallPaper"
          onPress={() => {
            navigation.navigate('WallPaper')
          }}
        />
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