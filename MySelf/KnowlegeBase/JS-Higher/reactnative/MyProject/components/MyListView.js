import React,{Component} from 'react'
//注册组件
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    RefreshControl,
    ActivityIndicator
} from 'react-native';
//与scrollView相比适合大量的数据,可以垂直滚动的列表

class MyListView extends Component{
    constructor(props){
        super(props);
        //监控数据是否变化,如果变化更新数据
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            dataSources: ds.cloneWithRows(this.props.myData)
        }
    }

    _renderFooter(){
        return <ActivityIndicator
            color={"blue"}
            size={"large"}
        />
    }
    _renderSeparator(){
        return <View style={styles.lineStyle}></View>
    }
    _renderRow(RowData){
        return <Text style={styles.mytext}>{RowData}</Text>
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
                renderFooter={this._renderFooter}
                renderSeparator={this._renderSeparator}
            />
            <ActivityIndicator
                color={"blue"}
                size={"large"}
            />
        </View>
    }


}
const styles=StyleSheet.create({
    mytext:{
        height:300
    },
});
export default MyListView;
