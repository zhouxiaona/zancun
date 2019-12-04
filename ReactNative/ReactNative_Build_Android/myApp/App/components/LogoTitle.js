import React, {Component} from 'react'
import {
  Image,
  View,
  Text,
} from 'react-native'
export default class LogoTitle extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  componentDidMount() {
    
  }

  render(){
    return (
      <View>
        <Text>LogoTitle</Text>
      </View>
      // <Image 
        // source={require(this.props.uri)}
        // style={{
        //   width:30,
        //   height:30
        // }}
      // />
    )
  }
}