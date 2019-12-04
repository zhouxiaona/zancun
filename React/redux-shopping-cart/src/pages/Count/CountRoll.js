import React, { Component } from 'react';
import './CountRoll.css'

export default class CountRoll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      len:[0,1,2,3,4,5],
      animation:[]
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.handleNum(500000)
    setTimeout(()=>{
      this.handleNum(546386)
    },3000)
  }

  componentWillUnmout() {

  }

  handleNum = (n) => {
      let len = String(n).length
      this.setState({
        animation:[],
        len:[...Array(len).keys()]
      })
      let animation = []
      let numArr = String(n).split("")
      let h = document.getElementsByClassName('numPoint')[0].offsetHeight
      for(let i =0; i < numArr.length; i++){
        let obj = {
          top:`${- parseInt(h) * numArr[i]}px`,
        }
        animation.push(obj)
      }
      this.setState({
        animation
      })
  }

  render() {
      const { len, animation } = this.state
      return (
        <div className="container">
          <div className="wrap">
            {len && len.map((item, index)=>{
              return (
                <div key={index} item={item}>
                  <div className="numLi">
                    <div className="numLiInner" style={{...animation[index]}}>
                      <div className="numPoint">0</div>
                      <div className="numPoint">1</div>
                      <div className="numPoint">2</div>
                      <div className="numPoint">3</div>
                      <div className="numPoint">4</div>
                      <div className="numPoint">5</div>
                      <div className="numPoint">6</div>
                      <div className="numPoint">7</div>
                      <div className="numPoint">8</div>
                      <div className="numPoint">9</div>
                    </div>
                </div>
                {((len.length - (index + 1)) % 3 === 0) && index < len.length-1 && <div className="spaceChar">,</div>}  
              </div>  
              )
            })}
          </div>
        </div>
      );
  }
}
