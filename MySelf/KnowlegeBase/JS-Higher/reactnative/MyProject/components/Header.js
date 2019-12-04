import React,{Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Header extends Component{
    render(){
        return <View style={styles.Hcontainer}>
            <Text style={styles.mytexts1}>网页</Text>
            <Text style={styles.mytexts2}>新闻</Text>
            <Text style={styles.mytexts3}>有态度</Text>
        </View>
    }
}

//样式表的创建与使用
const styles=StyleSheet.create({
    Hcontainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:50,
        borderBottomWidth:1,
        borderColor:"red",
        paddingBottom:10
    },
    mytexts1:{
        color:"red",
        fontSize:25,
    },
    mytexts2:{
        color:"white",
        fontSize:25,
        backgroundColor:"red"
    },
    mytexts3:{
        fontSize:25,
        color:"black"
    }
});
export default Header;