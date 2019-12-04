import React, { Component } from 'react';

import p01 from './01.png';
import p02 from './02.png';
import p03 from './03.png';

class Main extends Component{
    render(){
        return <div>
            <div className="swiper">
                <ul>
                    <li>
                        <div><img src={p01} alt="p01"/></div>
                        <h3>行程后，亦能清晰回顾</h3>
                        <p>行程的花费、票据都能整理得井井有条。轻松梳理整个行程的相关信息。把故事分享给到GoGo,还能获得积分。换取回馈又能分享行程的快乐。</p>
                    </li>
                    <li>
                        <div><img src={p02} alt="p02"/></div>
                        <h3>行程后，亦能清晰回顾</h3>
                        <p>行程的花费、票据都能整理得井井有条。轻松梳理整个行程的相关信息。把故事分享给到GoGo,还能获得积分。换取回馈又能分享行程的快乐。</p>
                    </li>
                    <li>
                        <div><img src={p03} alt="p03"/></div>
                        <h3>行程后，亦能清晰回顾</h3>
                        <p>行程的花费、票据都能整理得井井有条。轻松梳理整个行程的相关信息。把故事分享给到GoGo,还能获得积分。换取回馈又能分享行程的快乐。</p>
                    </li>
                </ul>
            </div>
            <div className="OnOff">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    }
}
//导出
export default Main;
