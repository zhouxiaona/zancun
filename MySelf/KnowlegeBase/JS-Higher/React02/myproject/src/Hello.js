import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Hello extends Component{
    render(){
        return <div>我是Hello组件,<p>姓名是：{this.props.name};年龄是：{this.props.age}</p></div>
    }
}
//设置属性类型,给参数限制条件
// Hello.propTypes={
//     name:PropTypes.string,
//     age:PropTypes.string
// }
//默认参数
Hello.getDefaultProps={
    name:"李大大"
}

//导出
export default Hello;