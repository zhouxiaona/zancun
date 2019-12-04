import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
class Toilet extends Component{
    render(){
        return <View style={styles.wrap}>
            <Text>洗手间组件</Text>
        </View>
    }
}
const styles=StyleSheet.create({
    wrap:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});
export default Toilet;