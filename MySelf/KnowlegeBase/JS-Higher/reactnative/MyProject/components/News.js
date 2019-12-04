import React,{Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

class News extends Component{
    render(){
        return <View style={styles.wrap}>
            <View style={styles.title}>
              <Text style={styles.mytitle}>网易
                  <Text style={styles.mytitle2}>新闻</Text>
                  <Text style={styles.mytitle3}>有态度</Text>
              </Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.main}>
                <View>
                   <Text style={styles.mytitles}>今日要闻</Text>
                </View>
                <View style={styles.p}>
                    <Text>1.今日要闻今日要闻今日要闻今日要闻</Text>
                </View>
                <View style={styles.p}>
                    <Text>2.今日要闻今日要闻今日要闻今日要闻</Text>
                </View>
                <View style={styles.p}>
                    <Text>3.今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻</Text>
                </View>
                <View style={styles.p}>
                    <Text>4.今日要闻今日要闻今日要闻今日要闻</Text>
                </View>
            </View>
        </View>
    }
}

const styles=StyleSheet.create({
    wrap:{

    },
    title:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:50
    },
    mytitle:{
        color:"red",
        fontSize:30
    },
    mytitle2:{
        color:"white",
        backgroundColor:"red"
    },
    mytitle3:{
        color:"black"
    },
    line:{
        borderWidth:1,
        borderColor:"red",
        marginTop:10
    },
    main:{
        marginTop:10,
        padding:10
    },
    mytitles:{
      color:"red",
      fontSize:23
    },
    p:{
       marginTop:10
    }

});
export default News;