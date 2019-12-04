import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';
class MyWebView extends Component{
    render(){
        return <View style={{flex:1}}>
            <WebView source={{uri:this.props.url}}/>
        </View>
    }
}
const styles=StyleSheet.create({

});
export default MyWebView;