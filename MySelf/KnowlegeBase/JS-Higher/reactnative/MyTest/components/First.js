import React,{Component} from 'react'
//注册组件
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

import Second from './Second'

class First extends Component{
    constructor(props){
        super(props);
        this.nextComponent=this.nextComponent.bind(this);
        this.getValue=this.getValue.bind(this);
        this.state={
            myData:""
        }
    }

    nextComponent(){
        var nextComponent={
            component:Second,
            passProps:{
                myData:this.state.myData
            }
        };
        this.props.navigator.push(nextComponent);
    }
    getValue(myText){
        this.setState({myData:myText})
    }
    render(){
        return <View style={styles.mystyle}>
                    <Text>First组件</Text>
                    <View>
                        <TextInput
                            style={styles.myInp}
                            onChangeText={this.getValue}
                        />
                    </View>
                    <TouchableOpacity  style={styles.mybutton} onPress={this.nextComponent}>

                        <Text style={styles.buttonText}>点击我切换到第二个组件</Text>
                    </TouchableOpacity>

                </View>
    }
}
const styles=StyleSheet.create({
    myInp:{
        height:30,
        width:200,
        borderWidth:1,
        borderColor:"black",
        borderRadius:5,
        justifyContent:"center"
    },
    mystyle:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        color:"white"
    },
    mybutton:{
        backgroundColor:"pink",
        height:30,
        justifyContent:"center",
        alignItems:"center",
        width:200,
        borderRadius:5
    }
});
export default First;