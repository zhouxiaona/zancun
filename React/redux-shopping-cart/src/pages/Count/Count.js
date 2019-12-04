import React from 'react'
import {connect} from 'react-redux'
import {add,dec} from '../../actions'
class Count extends React.Component{
  constructor(){
    super()
    this.state = {}
    this.addFunc = this.addFunc.bind(this)
    this.decFunc = this.decFunc.bind(this)
  }

  componentDidMount(){}

  addFunc = () =>{
      this.props.dispatch(add())
  }
  decFunc = () => {
      this.props.dispatch(dec())
  }
  render(){
      const {count} = this.props
      return (
            <div>
              <div>Count</div>
              <div>
                  <div onClick={this.addFunc}>+</div>
                  <div>{count}</div>
                  <div onClick={this.decFunc}>-</div>
              </div>
            </div>
      )
  }
}
function getCount(count){
      return count
}
export default connect(getCount)(Count)