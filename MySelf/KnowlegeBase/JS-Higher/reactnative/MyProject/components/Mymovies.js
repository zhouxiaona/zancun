import React,{Component} from 'react'
//注册组件
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    RefreshControl,
    ActivityIndicator,
    TouchableOpacity

} from 'react-native';
class Mymovies extends Component{
    constructor(props){
        super(props);
        //监控数据是否变化,如果变化更新数据
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            dataSources: ds.cloneWithRows(this.props.myData)
        }
    }
    _renderRow(RowData){
        var picUArr=RowData.images.small.split(".webp");
        var res=picUArr[0]+".jpg";
        return <View style={{flexDirection:"row",height:210,marginTop:20}}>
                    <TouchableOpacity style={{flex:2,width:100,height:210}}>
                        <Image style={{width:100,height:210}} source={{uri:res}}/>
                    </TouchableOpacity>
                    <View style={{flex:3,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:25,color:"blue"}}>{RowData.title}</Text>
                        <Text style={{fontSize:20,color:"green"}}>{RowData.year}</Text>
                    </View>
                </View>;
    }
    _renderSeparator(){
        return <View style={{height:1,backgroundColor:"black"}}></View>;
    }
    render(){
        return <View>
            <ListView
                dataSource={this.state.dataSources}
                renderRow={this._renderRow}
                refreshControl={
                    <RefreshControl
                        title={"正在刷新..."}
                        refreshing={false}
                        tintColor={"pink"}
                    />
                }
                renderSeparator={this._renderSeparator}
            />
        </View>;

    }
}
const styles=StyleSheet.create({

});
export default Mymovies;