import React, { Component } from 'react';

class Showdiv extends Component{
    constructor(props){
        super(props);
        this.state={
            judge:true
        }
        this.handle=this.handle.bind(this);
    }
    handle(){

        this.setState({judge:!this.state.judge});
    }
    render(){
        var showDiv=this.state.judge?<div>我是div1</div>:<div>我是div2</div>;
        return <div>
            {showDiv}
            <button onClick={this.handle}>点击我切换div</button>
        </div>
    }
}

//导出
export default Showdiv;