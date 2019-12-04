import React,{Component} from 'react'
//注册组件
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
//ScrollView滚动条组件,最外层需要一个高度或者其父级一个高度

class MyScrollView extends Component{
    render(){
        var arr=[];
        for(var i=0;i<this.props.myData.length;i++){
            var str=<Text style={styles.mystyle} key={i}>{this.props.myData[i]}</Text>;
            arr.push(str);
        }
        return <View style={styles.mycontainer}>
            <ScrollView>
                {arr}
            </ScrollView>
        </View>
    }
}
const styles=StyleSheet.create({
    mycontainer:{
        flex:1
    },
    mystyle:{
        height:300
    }
});
export default MyScrollView;