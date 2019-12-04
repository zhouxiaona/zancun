import React,{Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

class News2 extends Component{
    handle(title){
        alert(title);
    }
    //onPress={this.handle.bind(this,this.props.data[i].title)} 点击事件并传递参数
    //numberOfLines={1} 文本超出部分变{...}
    //上面是js语法，下面是jsx语法,
    render(){
        var showData=[];
        for(var i=0;i<this.props.data.length;i++){
            var str=<Text
                onPress={this.handle.bind(this,this.props.data[i].title)}
                numberOfLines={1}
                key={i}
                style={styles.mytext}
                >
                {this.props.data[i].id}
                {this.props.data[i].title}
                </Text>;
            showData.push(str);
        }

        return (<View style={styles.newContainer}>
            <Text style={styles.importNews}>今日要闻</Text>
            {showData}
        </View>)
    }
}

const styles=StyleSheet.create({
    newContainer:{
        marginLeft:10,
        marginRight:10,
        marginTop:20
    },
    importNews:{
        fontSize:16,
        color:"red"
    },
    mytext:{
        marginTop:10
    }

});
export default News2;