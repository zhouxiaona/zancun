import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    RefreshControl,
    TextInput,
    TouchableOpacity
} from 'react-native';
import MyWebView from './MyWebView'

class Mymovie extends Component{
    constructor(props){
        super(props);
        //监控数据是否变化,如果变化更新数据
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state={
            dataSources: ds.cloneWithRows(this.props.myData)
        }
    }
    nextComponent(data){
        var nextComponents={
            component:MyWebView,
            passProps:{
                url:data
            }
        };
        this.props.navigator.push(nextComponents);
    }
    //根据源数据来渲染数据
    _renderRow(RowData){
        console.log(RowData);
        var url=RowData.images.small.substr(0,RowData.images.small.length-4)+"jpg";
        var actor="";
        var tag="";
        for(var i=0;i<RowData.casts.length;i++){
            actor+=RowData.casts[i].name+",";
        }
        for(var j=0;j<RowData.genres.length;j++){
            tag+=RowData.genres[j]+"、";
        }
        tag=tag.substr(0,tag.length-1);
        actor=actor.substr(0,actor.length-1);

        return (<View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.leftS} onPress={this.nextComponent.bind(this,RowData.alt)}>
                        <Image source={{uri:url}} style={styles.pic}/>
                    </TouchableOpacity>
                    <View style={styles.rightS}>
                        <Text style={styles.mytext}>名称：{RowData.title}</Text>
                        <Text style={styles.mytext} numberOfLines={1}>演员：{actor}</Text>
                        <Text style={styles.mytext}>评分：{RowData.rating.average}</Text>
                        <Text style={styles.mytext}>时间：{RowData.year}</Text>
                        <Text style={styles.mytext}>标签：{tag}</Text>
                    </View>
                </View>
                <View style={styles.borders}/>
            </View>)
    }

    render(){
        return <View>
            <View style={styles.wrap}>
                <View>
                    <TextInput style={styles.myInp} placeholder={"搜索"}/>
                </View>
                <TouchableOpacity style={styles.mybtn}>
                    <Text style={styles.ser}>搜索</Text>
                </TouchableOpacity>
            </View>

            <ListView
                dataSource={this.state.dataSources}
                renderRow={this._renderRow.bind(this)}
                refreshControl={
                    <RefreshControl
                        title={"正在刷新..."}
                        refreshing={false}
                        tintColor={"pink"}
                    />
                }
            />
        </View>
    }
}
const styles=StyleSheet.create({
    wrap:{
        flexDirection:"row",
        marginTop:20,
        padding:10
    },
    myInp:{
      width:330,
      height:50,
      borderWidth:1,
      borderColor:"black",
      borderRadius:5,
      backgroundColor:"lightgray"
    },
    mybtn:{
        width:60,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"pink",
        marginLeft:5,
        borderRadius:5
    },
    ser:{
      color:"white",
      fontSize:20
    },
    container: {
        flexDirection: "row",
        marginTop: 20,
        height: 210,
        padding:10,
    },
    leftS:{
        flex:2
    },
    pic:{
        width:130,
        height:210
    },
    rightS:{
        flex:3,
        justifyContent:"center"
    },
    mytext:{
        lineHeight:30
    },
    borders:{
        height:1,
        backgroundColor:"black",
        marginTop:38
    }
});
export default Mymovie;