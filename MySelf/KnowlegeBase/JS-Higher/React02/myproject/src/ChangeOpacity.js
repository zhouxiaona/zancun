import React, { Component } from 'react';
class ChangeOpacity extends Component{
    constructor(props){
        super(props);
        this.state={
            opacity:0.5
        }
    }
    render(){
        return <div><h1 style={{opacity:this.state.opacity}}>我是要改变透明度的文字</h1></div>
    }

    componentDidMount(){
        var num=1;
        setInterval(()=>{
            num-=0.01;
            if(num<0){
                num=1
            }
            this.setState({opacity:num});
        },30);

        fetch("/post",{
            method:"post",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({name:"张三",pwd:123})

        }).then((res)=>{
            // console.log(res);
            return res.json();

        }).then((data)=>{
            console.log(data);
            // this.setState({data:data});

        }).catch((err)=>{
            if(err){
                console.log(err);
            }

        });
    }
}
export default ChangeOpacity;