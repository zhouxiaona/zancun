import React from 'react'

const HocwithLoading = WrappedComponent => ({isLoading, ...otherProps }) => {
      return (
            <div>
                  { 
                        isLoading ?
                        <div>正在加载...</div>
                        :
                        <WrappedComponent {...otherProps} />
                  }
            </div>
      )
}
export default HocwithLoading
    