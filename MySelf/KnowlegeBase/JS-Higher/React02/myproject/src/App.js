import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

//引入组件Hello
import Hello from "./Hello"
import Fn from './Fn'
import InputText from './InputText'
import Showdiv from './Showdiv'
import ChangeStyle from './ChangeStyle'
import ChangeOpacity from './ChangeOpacity'
// let a="你好";

class App extends Component {
  render() {
      var name="李思思";
      let age=20;
    return <div>

        <Hello name={name} age={age}/>
        <br/>
        <Fn></Fn>
        <br/>
        <InputText data="你好"></InputText>
        <br/>
        <Showdiv></Showdiv>
        <br/>
        <ChangeStyle></ChangeStyle>
        <br/>
        <ChangeOpacity></ChangeOpacity>


      </div>

  }
}

export default App;
