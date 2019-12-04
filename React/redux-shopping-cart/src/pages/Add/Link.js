import React from 'react'
import { setVisibilityFilter } from '../../actions'
import {connect} from 'react-redux'

class Link extends React.Component{
  render(){
    const {active, children, onClick} = this.props
    if (active) {
      return <span>{children}</span>
    }
    return (
        <a
          href="###"
          onClick={e=>{
            e.preventDefault()
            onClick()
          }}
        >
          {children}
        </a>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      active: ownProps.filter === state.setVisibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      onClick: () => {
          dispatch(setVisibilityFilter(ownProps.filter))
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)