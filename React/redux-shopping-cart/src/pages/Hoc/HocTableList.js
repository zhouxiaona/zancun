import React, {Component}  from 'react'
import HocWithLoading from './HocWithLoading'
class HocTableList extends Component{
  constructor(){
    super()
    this.state = {
      
    }
  }
  render(){
    const { data, name } = this.props
    return (
      <div>
          <div>HocTableList组件==>{name}</div>
          <div>
                {data && data.map((item,index)=>{
                      return (
                            <div key={index} item={item}>{index}</div>
                      )
                })}
          </div>
      </div>
    )
  }
}
export default HocWithLoading(HocTableList)