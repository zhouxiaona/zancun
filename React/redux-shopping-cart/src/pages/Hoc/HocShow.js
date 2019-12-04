import React from 'react'
import HocDataList from './HocDataList'
import HocTableList from './HocTableList'
import FancyButton from './HocFancyButton'

class HocShow extends React.Component{
  constructor(){
    super()
    this.state = {
      dataListProps:{
        isLoading: true,
        name:'haha',
        data:[...new Array(10).keys()]
      },
      tableListProps:{
        isLoading: false,
        name:'xixi',
        data:[...new Array(10).keys()]
      }
    }
  }

  componentDidMount(){}

  render(){
    const {dataListProps, tableListProps} = this.state
    return (
       <div>
          <div>Game of Thrones Season8</div>
          <HocDataList {...dataListProps}/>
          <HocTableList {...tableListProps}/>
          <FancyButton/>
       </div>
    )
  }
}
export default HocShow