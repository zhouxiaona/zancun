import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { Button } from 'antd'
import logo from '../../assets/logo.svg'
import './index.less'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return (
      <div className="App">
          <img src={logo} className="logo" alt=""/>
          <Button type="primary">Profile Page</Button>
      </div>
    )
  }
}
export default withRouter(Profile)