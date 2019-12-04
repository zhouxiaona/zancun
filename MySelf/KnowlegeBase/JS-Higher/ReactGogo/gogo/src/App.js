import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
//引入支付页面组件
// import Pay from './Pay'
//引入轮播图组件
import Main from './Main'
class App extends Component {
  render() {
    return <div>
        <div className="wrap">
            <div className="top"><img src={logo} alt="Logo"/></div>
            <p className="title1">即刻拥有GoGo私家秘书</p>
            <p className="title2">按需为你服务</p>
            {/*引入轮播图组件*/}
            <Main></Main>
            {/*<Pay></Pay>*/}
            <div className="btn">订购：￥1480/年</div>
            <p className="intro">*详细服务条款请见《GoGo用户协议》</p>
        </div>
    </div>
  }
}

export default App;
