import React,{Component} from 'react'
//注册组件
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import First from './First'

class Second extends Component{
    constructor(props){
        super(props);
        this.returnBack=this.returnBack.bind(this);
    }
    returnBack(){
        var nextComponent={
            component:First
        }
        this.props.navigator.pop(nextComponent);
    }

    render(){
        return <View style={styles.mystyle}>
            <Text>Second组件</Text>
            <Text>接收的数据是{this.props.myData}</Text>
            <TouchableOpacity  style={styles.mybutton} onPress={this.returnBack}>
                <Text style={styles.buttonText}>点击我返回到第一个组件</Text>
            </TouchableOpacity>
        </View>
    }
}
const styles=StyleSheet.create({
    mystyle:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    mybutton:{
        backgroundColor:"lightblue",
        height:30,
        justifyContent:"center",
        alignItems:"center",
        width:200,
        borderRadius:5
    },
    buttonText:{
        color:"white"
    },
});
export default Second;