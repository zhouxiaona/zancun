import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { Button } from 'antd';
import logo from '../../assets/avater.jpg'
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(){
    return (
      <div className="App">
        <img src={logo} className="logo" alt=""/>
        <Button type="primary">面条君</Button>
      </div>
    )
  }
}

export default withRouter(App)
