import React from 'react'
import Link from './Link'
class Footer extends React.Component{
  render(){
    return (
       <p>
         Show:
         {''}
         <Link filter="SHOW_ALL">All</Link>
         {' , '}
         <Link filter="SHOW_ACTIVE">Active</Link>
         {' , '}
         <Link filter="SHOW_COMPLETED">Completed</Link>
       </p>
    )
  }
}
export default Footer