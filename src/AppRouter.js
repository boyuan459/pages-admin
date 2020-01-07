import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import requireAuth from 'hoc/requireAuth'
import Login from 'page/auth/login'
import App from 'page/app'

const AppRouter = () =>(
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={requireAuth(App)} />
    </Switch>
  </Router>
)

export default connect(state => ({
  authenticated: false
}))(AppRouter)
