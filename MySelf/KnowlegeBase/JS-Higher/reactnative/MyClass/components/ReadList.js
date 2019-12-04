import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import MyWebView from "./MyWebView";
class ReadList extends Component{
    constructor(props){
        super(props);
        this.state={
            newData:""
        }
    }
    nextComponent(data){
        var nextComponent={
            component:MyWebView,
            // passProps:{uri:newurl,navigator:this.props.navigator},
            passProps:{
                url:data
            }
        };
        //如果找不到navigator的话，需要通过passPross传递navigator属性
        this.props.navigator.push(nextComponent);
    }
    render(){
        if(this.state.newData==""){
            var arr=<ActivityIndicator/>;
        }else{
            var arr=[];
            for(var i=0;i<this.state.newData.length;i++){
                var myhtml=<View key={i}>
                    <View style={styles.li}>
                        <TouchableOpacity onPress={this.nextComponent.bind(this,this.state.newData[i].newurl)}>
                            <Image source={{uri:this.state.newData[i].imgurl}} style={styles.pic}/>
                        </TouchableOpacity>
                        <View style={styles.mytext}>
                            <Text numberOfLines={1} style={styles.text1}>{this.state.newData[i].title}</Text>
                            <Text style={styles.text2}>{this.state.newData[i].formatTime}</Text>
                        </View>
                    </View>
                    <View style={styles.line}/>
                </View>;
                arr.push(myhtml);
            }
        }

        return <View style={styles.mycontainer}>
            <ScrollView>
                {arr}
            </ScrollView>
        </View>
    }
    componentDidMount(){
        var url="http://bxu2442260437.my3w.com/index.php/Index/getRnData";
        fetch(url,{}).then((res)=>{
            return res.json();
        }).then((res)=>{
            console.log("推荐专题数据哈哈哈哈哈:",res);
            this.setState({newData:res});

        }).catch((err)=>{
            console.log(err);
        })
    }
}
const styles=StyleSheet.create({
    mycontainer:{
        flex:1,
    },
    li:{
        flexDirection:"row",
        marginTop:20,
        padding:13
    },
    line:{
        height:1,
        backgroundColor:"black"
    },
    mytext:{
        marginLeft:10,
        width:250
    },
    text1:{
        fontSize:20
    },
    text2:{
        marginTop:10,
        fontSize:16,
        color:"lightgray"
    },
    pic:{
        width:120,
        height:70,
        borderRadius:5
    }
});
export default ReadList;