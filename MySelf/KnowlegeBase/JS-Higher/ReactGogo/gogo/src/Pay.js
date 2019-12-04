import React, { Component } from 'react';
import logo from './logo.png';
import wechat from './wechat.png';
import gou from './gou.png';


class Pay extends Component{
    render(){
        return <div>
            <div className="wraps">
                <div className="top"><img src={logo} alt="Logo"/></div>
                <h1>选择支付方式</h1>
                <hr/>
                <div className="pays">
                    <img src={wechat} alt="wechat" className="p1"/>
                    <span>微信支付</span>
                    <img src={gou} alt="gou" className="p2"/>
                </div>
                <hr/>
                <div className="btns">确认支付</div>
            </div>
        </div>
    }
}
//导出
export default Pay;