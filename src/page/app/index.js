import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd'

const Centrifuge = require('centrifuge')

class App extends React.Component {
  state = {
    message: '',
  }
  componentDidMount () {
    this.centrifuge = new Centrifuge("ws://localhost:8080/connection/websocket")
    this.centrifuge.setConnectData({"user-agent": navigator.userAgent})
    this.centrifuge.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJbmZvIjp7IlVzZXJuYW1lIjoieGkiLCJSb2xlIjoibWFuYWdlciJ9LCJleHAiOjE1NzkzNTcwMzMsImlzcyI6ImdvLWNtcyIsIm5iZiI6MTU3OTI2OTYzMywic3ViIjoieGkifQ.3QuEDEpsorkna6CggGnY8cFIpKEiG4pxBIvhbDITmZc")
    this.centrifuge.on('connect', function(ctx){
      console.log('Connected with client ID ' + ctx.client  + ' over ' + ctx.transport + ' with data: ' + JSON.stringify(ctx.data));
    })
    this.centrifuge.on('disconnect', function(ctx){
      console.log('Disconnected: ' + ctx.reason);
    })

    // this.sub = this.centrifuge.subscribe("chat", function(message) {
    //   console.log(JSON.stringify(message));
    // })
    this.centrifuge.connect()
  }

  handleChange = (e) => {
    const text = e.target.value
    console.log('text', e.target.value)
    this.setState({
      message: e.target.value,
    })
    this.sub.publish(text)
  }
  render () {
    return (
      <div>
        <header>
          header
        </header>
        <div className="content">
          home pge
          <Input onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)