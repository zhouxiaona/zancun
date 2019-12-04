import React,{Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
class Hello extends Component{
    render(){
        return <View style={[styles.mystyle1,styles.mystyle2]}>
            <Text style={styles.mytext}>我是Hello组件</Text>
        </View>
    }
}

//样式表的创建与使用
const styles=StyleSheet.create({
    mystyle1:{
        backgroundColor:"red",
        marginTop:35
    },
    mystyle2:{
        height:100
    },
    mytext:{
        textAlign:"center",
        lineHeight:100
    }
});
export default Hello;