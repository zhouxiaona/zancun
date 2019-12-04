import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native'
export default class Profile extends Component {
  constructor(props){
    super(props)
  }

  // static navigationOptions = {
  //   header: 'Profile',
  // }

  componentDidMount() {

  }

  render(){
    return (
      <View style={styles.wrap}>
        <View style={styles.top}>
          <Text style={styles.mytext}>相关信息</Text>
        </View>
        <View style={styles.logo}>
          <View style={styles.rect}>
            <Text style={styles.ptext}>Noodle</Text>
          </View>
          <View style={styles.vv}>
            <Text style={styles.vtext}>v1.0.0</Text>
          </View>
        </View>
        <View style={styles.bottm}>
          <Text style={styles.litext}>功能介绍</Text>
          <Text style={styles.litext}>帮助中心</Text>
          <Text style={styles.litext}>服务条款</Text>
          <Text style={styles.litext}>关于</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrap:{
    flex:1,
    marginTop:25,
  },
  top:{
    justifyContent:"center",
    alignItems:"center"
  },
  mytext:{
    fontSize:25,
    fontWeight:"bold"
  },
  logo:{
    flex:3,
    justifyContent:"center",
    alignItems:"center"
  },
  bottm:{
    flex:6
  },
  rect:{
    width:125,
    height:125,
    backgroundColor:"rgba(0,0,0,1)",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:23
  },
  ptext:{
    color:"white",
    fontSize:30,
    fontWeight:'bold',
  },
  vv:{
    marginTop:10
  },
  vtext:{
    fontSize:18,
    color:"gray"
  },
  litext:{
    fontSize:20,
    color:"gray",
    paddingLeft:15,
    paddingBottom:20,
    paddingTop:20,
    borderBottomWidth:1,
    borderColor:'lightgray',
  }
});