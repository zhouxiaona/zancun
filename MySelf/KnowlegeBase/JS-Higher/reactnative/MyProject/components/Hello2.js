import React,{Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
class Hello2 extends Component{
    render(){
        return <View style={styles.container}>
            <View style={styles.box1}>
                <View style={styles.box11}></View>
                <View style={styles.box22}></View>
            </View>
            <View style={styles.box2}>
                <Text style={styles.mytext}>测试文字</Text>
                <Text>测试文字二</Text>
            </View>
            <View style={styles.box3}></View>
        </View>
    }
}

//样式表的创建与使用
//flex默认纵向排列
const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        flex:1
    },
    box1:{
        backgroundColor:"red",
        height:100,
        width:200
    },
    // box11:{
    //     backgroundColor:"black",
    //     flex:1,
    //     height:100
    // },
    // box22:{
    //     backgroundColor:"pink",
    //     flex:1,
    //     height:100
    // },
    box2:{
        //针对容器的对齐
        backgroundColor:"yellow",
        height:100,
        width:100,
        //默认不换行==>nowrap
        flexWrap:"wrap",
        //竖直对齐
        // alignItems:"center",
        flexDirection:"row",
        //水平对齐
        // justifyContent:"center"
        //======>border的支持写法
        borderWidth:3,
        borderColor:"black",
        //不支持border的这种写法=====>
        // border:"4px solid black"
    },
    mytext:{
        //元素自身的对齐属性
        alignSelf:"center"
    },
    box3:{
        backgroundColor:"blue",
        height:100,
        width:200
    }
});
export default Hello2;