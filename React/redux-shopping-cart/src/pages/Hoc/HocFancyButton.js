import React, {Component}  from 'react'

class HocFancyButton extends Component {
  constructor(){
    super()
    this.state = {
    }
    this.btnClick = this.btnClick.bind(this)
  }

  componentDidMount(){
      
  }

  btnClick = () => {
      console.log(this.refs,'ref=====')
  }

  render() {
    return (
      <button ref={ ref => this.refs = ref } onClick={this.btnClick}>BUTTON CLICK</button>
    ) 
  }
}
export default HocFancyButton