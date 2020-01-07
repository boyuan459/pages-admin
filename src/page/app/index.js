import React from 'react'
import { connect } from 'react-redux'

function App () {
  return (
    <div>
      <header>
        header
      </header>
      <div className="content">
        home pge
      </div>
    </div>
  )
}

function mapStateToProps (state, props) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)