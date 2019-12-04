import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
class Choice extends Component{
    render(){
        return <View style={styles.wrap}>
            <Text style={styles.mytext}>精选组件</Text>
        </View>
    }
}
const styles=StyleSheet.create({
    wrap:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    mytext:{
        fontSize:30
    }
});
export default Choice;