import React,{Component} from 'react'
//注册组件
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
//线上图片：Image组件默认没有宽高,有宽度没高度,线上图片http开头不行
//本地图片：base64图片用法与本地图片引入方式相同

class MyImage extends Component{
    _onLoadEnd(){
        alert("加载完毕");
    }
    render(){
        return <View style={styles.mycontainer}>
                    <Image
                        style={styles.mystyles}
                        source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519885012702&di=1283032749222a3fac1b08d83303539a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3Dbafcfd64a144ad342ebf878fe0a00c08%2F188e7dd0f703918f8b336243513d26975beec486.jpg"}}
                    />
                    <Image
                        style={styles.mystyles}
                        source={require("../img/00.jpeg")}
                        onLoadEnd={this._onLoadEnd}
                    />
                </View>
    }
}
const styles=StyleSheet.create({
    mycontainer:{
        flex:1
    },
    mystyles:{
        width:200,
        height:200
    }
});
export default MyImage;
