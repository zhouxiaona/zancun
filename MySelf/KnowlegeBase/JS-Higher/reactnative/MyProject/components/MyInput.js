import React,{Component} from 'react'
//注册组件
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
// TextInput input框组件
//添加组件内容
class MyInput extends Component{
    //es5
    // getInitialstate()

    //es6写法
    constructor(props){
        super(props);
        //改变this指向
        this._onChangeText=this._onChangeText.bind(this);
        this.showData=this.showData.bind(this);
        this.state={
            showValue:""
        }
    }
    //定义方法,可以输出input框中的value值
    _onChangeText(inputData){
        console.log("输入的内容是",inputData);
        // this.state.showValue=inputData;
        this.setState({showValue:inputData});

        // alert(inputData);
        // alert(222);
    }
    _onChange(){
        // alert(111);
    }
    showData(){
        alert(this.state.showValue);
    }
    render(){
        return <View style={styles.mycontainer}>
                    <TextInput
                        placeholder="请输入用户名"
                        editable={true}
                        returnKeyType={"done"}
                        onChangeText={this._onChangeText}
                        onChange={this._onChange}
                        style={styles.inputStyle}>
                    </TextInput>
                    <TouchableOpacity style={styles.mybutton} onPress={this.showData}>
                        <View>
                            <Text style={styles.mysearch}>搜索</Text>
                        </View>
                    </TouchableOpacity>
                </View>
    }
}
//设置样式表
const styles=StyleSheet.create({
    mycontainer:{
        marginTop:30,
        flexDirection:"row"
    },
    inputStyle:{
        width:280,
        height:30,
        borderColor:"black",
        borderWidth:1,
        marginLeft:10,
        borderRadius:5
    },
    mybutton:{
        backgroundColor:"lightblue",
        width:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        marginLeft:10
    },
    mysearch:{
        color:"white"
    }

});
//导出组件
export default MyInput;