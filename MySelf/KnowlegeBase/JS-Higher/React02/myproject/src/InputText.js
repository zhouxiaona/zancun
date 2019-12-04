import React, { Component } from 'react';

class InputText extends Component{
    constructor(props){
        super(props);
        this.state={
            str:"",
            data:props.data
        }
        this.handle=this.handle.bind(this);
    }
    handle(e){
        // console.log(e.target.value);
        this.setState({str:e.target.value});
    }
    render(){
        return <div><input onInput={this.handle} type="text" />{this.state.str}{this.state.data}</div>
    }
}
//导出
export default InputText;