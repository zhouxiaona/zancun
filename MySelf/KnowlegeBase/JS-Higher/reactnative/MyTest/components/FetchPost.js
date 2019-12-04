import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
class FetchPost extends Component{
    constructor(props){
        super(props);
        this.getUsername=this.getUsername.bind(this);
        this.getAge=this.getAge.bind(this);
        this.subData=this.subData.bind(this);
        this.state={
            username:"",
            age:""
        }
    }
    getUsername(username){
        this.setState({
            username:username
        })
    }
    getAge(age){
        this.setState({
            age:age
        })
    }
    subData(){
        console.log("FetchPost页面的信息是",this.state);

        // var form=new FormData();
        // form.append("username",this.state.username);
        // form.append("age",this.state.age);

        var url="http://localhost:8989/getPost";
        fetch(url,{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(this.state)
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log("错误信息是",err);
        });

    }
    render(){
       return <View style={styles.mycontainer}>
                 <View style={{flexDirection:"row"}}>
                     <Text>姓名：</Text><TextInput style={styles.myInp} onChangeText={this.getUsername}/>
                 </View>
                 <View style={{flexDirection:"row",marginTop:10}}>
                     <Text>年龄：</Text><TextInput style={styles.myInp} onChangeText={this.getAge}/>
                 </View>
                <TouchableOpacity style={styles.myBtn} onPress={this.subData}>
                    <Text style={{color:"white"}}>提交</Text>
                </TouchableOpacity>
             </View>
    }
}
const styles=StyleSheet.create({
       mycontainer:{
           flex:1,
           justifyContent:"center",
           alignItems:"center"
       },
       myInp:{
           width:130,
           height:28,
           borderWidth:1,
           borderColor:"black",
           borderRadius:3
       },
       myBtn:{
           backgroundColor:"pink",
           width:100,
           height:25,
           justifyContent:"center",
           alignItems:"center",
           marginTop:10,
           borderRadius:5
       }
});
export default FetchPost;