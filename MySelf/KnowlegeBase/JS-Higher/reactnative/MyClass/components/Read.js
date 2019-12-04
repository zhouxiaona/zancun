import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import MyWebView from './MyWebView'
import ReadList from './ReadList'
class Read extends Component{
    constructor(props){
        super(props);
        this.state={
            newData:""
        }
    }
    nextComponent(data){
        var nextComponent={
            component:MyWebView,
            passProps:{
                url:data
            }
        };
        this.props.navigator.push(nextComponent);
    }
    goToReadList(){
        var nextComponent={
            component:ReadList
        };
        this.props.navigator.push(nextComponent);
    }
    render(){
        if(this.state.newData==""){
            var arr=<ActivityIndicator/>;
        }else{
            var arr=[];
            for(var i=0;i<this.state.newData.length;i++){
                if(i<2){
                    var myhtml=<TouchableOpacity onPress={this.nextComponent.bind(this,this.state.newData[i].newurl)} key={i}>
                        <Image style={styles.mypic} source={{uri:this.state.newData[i].imgurl}}/>
                    </TouchableOpacity>;
                    arr.push(myhtml);
                }
            }
        }

        return <View style={styles.mycontainers}>
            <View style={styles.wrap1}>
                <Text style={styles.title1}>推荐专题</Text>
                <View style={styles.picwrap}>
                    {arr}
                </View>
                <TouchableOpacity onPress={this.goToReadList.bind(this)}>
                    <Text style={styles.mytext}>查看同期专题 ></Text>
                </TouchableOpacity>
            </View>
            <View style={styles.line}/>
            <View style={styles.wrap2}>
                <Text style={styles.title2}>热门推荐</Text>
            </View>
        </View>
    }
    componentDidMount(){
        var url="http://bxu2442260437.my3w.com/index.php/Index/getRnData";
        fetch(url,{}).then((res)=>{
            return res.json();
        }).then((res)=>{
            console.log("推荐专题数据:",res);
            this.setState({newData:res});

        }).catch((err)=>{
            console.log(err);
        });
    }
}
const styles=StyleSheet.create({
    mycontainers:{
        flex:1
    },
    wrap1:{
       padding:10
    },
    wrap2:{
       padding:10
    },
    title1:{
        marginTop:30,
        marginBottom:20,
        fontSize:23
    },
    title2:{
        marginTop:10,
        marginBottom:20,
        fontSize:23
    },
    picwrap:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:15
    },
    mypic:{
        width:190,
        height:120,
        borderRadius:8,
        marginRight:5,
        marginLeft:5
    },
    mytext:{
        fontSize:15,
        color:"gray"
    },
    line:{
        height:1,
        backgroundColor:"gray",
        marginTop:35
    }
});
export default Read;