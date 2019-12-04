import React, {Component}  from 'react'
import HocWithLoading from './HocWithLoading'
class HocDataList extends Component{
  constructor(){
    super()
    this.state = {
    }
  }
  render(){
    const {data, name} = this.props
    return (
       <div>
            <div>HocDataList组件==>{name}</div>
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
export default HocWithLoading(HocDataList)