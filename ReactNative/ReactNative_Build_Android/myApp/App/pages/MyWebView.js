import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    WebView,
} from 'react-native';
class MyWebView extends Component{
    static navigationOptions = (({navigation})=>{
        return {
            title: navigation.getParam('title','MyWebView')
        }
    })
    render(){
        return <View style={{flex:1}}>
            <WebView source={{uri:this.props.navigation.getParam('alt','')}}/>
        </View>
    }
}
const styles=StyleSheet.create({

});
export default MyWebView