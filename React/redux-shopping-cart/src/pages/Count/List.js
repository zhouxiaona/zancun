import React from 'react'
import {connect} from 'react-redux'
import {add_list, del_list} from '../../actions'
class List extends React.Component{
  constructor(){
    super()
    this.state = {
    }
  }

  componentDidMount(){}

  decFunc = () => {
      this.props.dispatch(del_list())
  }

  render(){
      const {list} = this.props
      return (
            <div>
              <div>List</div>
              <div>
                <div>
                      <form
                        onSubmit={e => {
                            e.preventDefault()
                            if (!this.inputName.value.trim() || !this.inputAge.value.trim() || !this.inputId.value.trim()) { return }
                            let obj = {name:this.inputName.value,age:this.inputAge.value,id:this.inputId.value}
                            this.props.dispatch(add_list(obj))
                            this.inputName.value = ''
                            this.inputAge.value = ''
                            this.inputId.value = ''
                        }}
                      >
                          Please enter your name:<input ref={node => {this.inputName = node}}/><br/>
                          Please enter your age:<input ref={node => {this.inputAge = node}}/><br/>
                          Please enter your id:<input ref={node => {this.inputId = node}}/><br/>
                          <button type="submit">添加成员</button>
                      </form>
                      <form
                        onSubmit={e => {
                            e.preventDefault()
                            if (!this.inputDelId.value.trim()) { return }
                            this.props.dispatch(del_list(this.inputDelId.value))
                            this.inputDelId.value = ''
                        }}
                      >
                          Please enter id that you want to delete:<input ref={node => {this.inputDelId = node}}/><br/>
                          <button type="submit">删除成员</button>
                      </form>
                </div>
                    {list && list.map((item,index)=>{
                      return <div key={index} item={item}>id:{item.id},name:{item.name},age:{item.age}</div>
                    })}
              </div>
            </div>
      )
  }
}
function getList(list){
      return list
}
export default connect(getList)(List)