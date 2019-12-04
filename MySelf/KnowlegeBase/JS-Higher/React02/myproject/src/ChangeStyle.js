import React, { Component } from 'react';
import InputText from "./InputText";
class ChangeStyle extends Component{
    constructor(props){
        super(props);
        this.changeStyle=this.changeStyle.bind(this);
    }
    changeStyle(){
        // console.log(this.refs.mydiv.style.background);

        if(this.refs.mydiv.style.background==="red"){
            this.refs.mydiv.style.background="blue";
        }else{
            this.refs.mydiv.style.background="red"
        }

    }
    render(){
        return <div>
            <div ref='mydiv' style={{width:"100px",height:"100px",background:"red"}}>我是div</div>
            <button onClick={this.changeStyle}>点击我改变样式</button>
        </div>
    }
}
//导出
export default ChangeStyle;