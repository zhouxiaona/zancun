import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
    ActivityIndicator
} from 'react-native';
class MyWebViews extends Component{
    constructor(props){
        super(props);
        this.setError=this.setError.bind(this);
        this.state={
            isError:false
        }
    }
    setError(){
        this.setState({isError:true});
    }
    render(){
        if(this.state.isError){
            return <View style={styles.loadstyle}>
                <ActivityIndicator/>
                <Text style={styles.mytext}>服务器错误或者网络地址错误!</Text>
            </View>
        }else{
            return <WebView
                source={{uri:this.props.uri}}
                onError={this.setError}
            />
        }

    }
}
const styles=StyleSheet.create({
    loadstyle:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    mytext:{
        color:"red",
        fontSize:27
    }
});
export default MyWebViews;