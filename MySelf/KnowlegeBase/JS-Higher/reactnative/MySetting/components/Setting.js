import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
class Setting extends Component{
    render(){
        return <View style={styles.wrap}>
            <View style={styles.top}>
                <Text style={styles.mytext}>关于信息</Text>
            </View>
            <View style={styles.borders}/>
            <View style={styles.logo}>
                <View style={styles.rect}>
                    <Text style={styles.ptext}>P</Text>
                </View>
                <View style={styles.vv}>
                    <Text style={styles.vtext}>v1.3.0</Text>
                </View>

            </View>
            <View style={styles.borders}/>
            <View style={styles.bottm}>
                <Text style={styles.litext}>功能介绍</Text>
                <View style={styles.borders}/>
                <Text style={styles.litext}>帮助中心</Text>
                <View style={styles.borders}/>
                <Text style={styles.litext}>服务条款</Text>
                <View style={styles.borders}/>
                <Text style={styles.litext}>关于</Text>
                <View style={styles.borders}/>
            </View>
        </View>
    }
}
const styles=StyleSheet.create({
    wrap:{
        flex:1,
        marginTop:25
    },
    top:{
        flex:1,
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
    borders:{
        height:1,
        backgroundColor:"gray",
        marginBottom:20,
        marginTop:20
    },
    rect:{
        width:125,
        height:125,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:23
    },
    ptext:{
        color:"white",
        fontSize:100
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
        marginLeft:15
    }

});
export default Setting;