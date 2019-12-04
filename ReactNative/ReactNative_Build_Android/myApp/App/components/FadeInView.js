import React, {Component} from 'react'
import {
  View,
  Animated,
} from 'react-native'
export default class FadeInView extends Component {
  constructor(props){
    super(props)
    this.state={
      fadeAni: new Animated.Value(0),
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAni,
      {
        toValue: 1,
      }
    ).start()
  }

  render(){
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: this.state.fadeAni,
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}