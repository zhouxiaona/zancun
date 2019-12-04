import React,{Component} from 'react'
//注册组件
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
class Xiec extends Component{
    render(){
        return <View style={{height:130,borderRadius:5,flexDirection:"row",marginTop:50}}>
                    <View style={{flex:1,backgroundColor:"#F14C67",justifyContent:"center",alignItems:"center",height:130,marginRight:1}}>
                        <Text style={{color:"white"}}>酒店</Text>
                        <Image style={{width:50,height:50,marginTop:5}} source={require("../img/1.png")}/>
                    </View>
                    <View style={{flex:1,flexDirection:"column",marginRight:1}}>
                        <View style={{flex:1,backgroundColor:"#F14C67",justifyContent:"center",alignItems:"center"}}>
                            <Text style={{color:"white"}}>海外酒店</Text>
                        </View>
                        <View style={{flex:1,backgroundColor:"#F14C67",justifyContent:"center",alignItems:"center",marginTop:1}}>
                            <Text style={{color:"white"}}>特价酒店</Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:"column"}}>
                        <View style={{flex:1,backgroundColor:"#F14C67",justifyContent:"center",alignItems:"center"}}>
                            <Text style={{color:"white"}}>团购</Text>
                        </View>
                        <View style={{flex:1,backgroundColor:"#F14C67",justifyContent:"center",alignItems:"center",marginTop:1}}>
                            <Text style={{color:"white"}}>民宿.客栈</Text>
                        </View>
                    </View>
                </View>
    }
}
const styles=StyleSheet.create({

});
export default Xiec;