import React, { Component } from 'react';
class Fn extends Component{
    //方法一：绑定此组件Fn,将this执行本类

    // constructor(){
    //     super();
    //     this.handle=this.handle.bind(this);
    // }
    handle(e,thiss,arg){
        //e==>event
        //获取触发事件的元素
        //event对象始终在参数的最后一个
        // console.log(e.target);

        //改变event的接参数顺序
        console.log(e.target,thiss,arg);

        // console.log(arg);
        // console.log(this.refs.myinput);
        // this.refs.myinput.focus();
    }
    render(){
        return <div>
            {/*方法二: 绑定此组件Fn,将this执行本类*/}
            {/*<input ref="myinput" type="text"/><button onClick={this.handle.bind(this)}>点击我聚焦</button>*/}
            {/*onClick={this.handle} 中的this指的是类Fn自身*/}

            {/*传递参数*/}
            {/*<input ref="myinput" type="text"/><button onClick={this.handle.bind(this,"111")}>点击我聚焦</button>*/}

            {/*指定event为指定位置的参数*/}
            <input ref="myinput" type="text"/><button onClick={(e)=>{this.handle(e,this,"111")}}>点击我聚焦</button>


        </div>
    }
}


//导出
export default Fn;