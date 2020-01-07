import React from 'react'
import { connect } from 'react-redux'
import Login from 'page/auth/login'

export default function(ComposedComponent) {
  const Authentication = (props) => {
    const { authenticated } = props
      if (authenticated) {
        return <ComposedComponent {...props} />
      }
      return <Login />
  }

  const mapStateToProps = (state) => {
    return {
      authenticated: !!state.Auth.user
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {}
  } 

  return connect(mapStateToProps, mapDispatchToProps)(Authentication)
}
