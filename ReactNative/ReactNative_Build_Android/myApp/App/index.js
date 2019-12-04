import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet, 
  Platform, 
  Text, 
  View,
  Image,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native'
import Routes from './routes/index'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state={
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})

AppRegistry.registerComponent('App', () => App)


