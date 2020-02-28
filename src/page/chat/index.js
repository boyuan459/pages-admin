import React from 'react'
import { connect } from 'react-redux'
import { Input, Button } from 'antd'
import get from 'lodash/get'

const Centrifuge = require('centrifuge')

const channel = 'chat#xi,'
const roster = 'chat.xi.roster'

class App extends React.Component {
  state = {
    message: '',
    channels: [],
  }
  chats = {}
  showPresence = () => {
    this.chat.presence().then(function(result) {
      let count = 0
      console.log('presence', result.presence)
      for(let key in result.presence) {
        count++
      }
      console.log(`${count} clients in this room`)
    }, function(err) {
      console.log('presence error', err)
    })
  }

  handleRoster = message => {
    console.log('handle roster', message)
    const hubisutk = get(message, 'data.hubisutk')
    const { channels } = this.state
    channels.push(hubisutk)
    console.log(channels)
    this.setState({
      channels,
    })
    this.chats[hubisutk] = this.centrifuge.subscribe(`${channel}${hubisutk}`, this.handleMessage)
                .on("join", this.handleJoin)
                .on("leave", this.handleLeave)
                .on("unsubscribe", this.handleUnsubcribe)
                .on("subscribe", this.handleSubscribe)
                .on("error", this.handleSubscribeError)
  }

  handleMessage = message => {
    let clientID
    if (message.info) {
      clientID = message.info.client
    } else {
      clientID = null
    }
    console.log('handle message', message)
  }


  handleSubscribe = ctx => {
    console.log('subscribed on channel ' + ctx.channel + ' (resubscribed: ' + ctx.isResubscribed + ', recovered' + ctx.recovered + ')')
    if (ctx.isResubscribed) {
      this.showPresence()
    }
    
    // this can be whatever json you want
    let rpcRequest = { "method": "getCurrentYear" }
    this.centrifuge.rpc(rpcRequest).then(function(data) {
      console.log('rpc reponse data: ' + JSON.stringify(data))
    }, function(err) {
      console.log('rpc error:' + JSON.stringify(err))
    })
  }

  handleSubscribeError = err => {
    console.log('error subscribing on channel ' + err.channel + ': ' + err.message)
  }

  handleJoin = message => {
    console.log(`client joined channel ${channel} (uid ${message.info["client"]}, user ${message.info["user"]})`)
  }

  handleLeave = message => {
    console.log(`client left channel ${channel} (uid ${message.info["client"]}, user ${message.info["user"]})`)
  }

  handleUnsubcribe = sub => {
    console.log(`unsubscribed from channel ` + sub.channel)
  }

  componentDidMount () {
    this.centrifuge = new Centrifuge("ws://localhost:8080/connection/websocket")
    this.centrifuge.setConnectData({"user-agent": navigator.userAgent})
    this.centrifuge.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJbmZvIjp7IlVzZXJuYW1lIjoieGkiLCJSb2xlIjoibWFuYWdlciJ9LCJleHAiOjE2MTA5MjA0ODAsImlzcyI6ImdvLWNtcyIsIm5iZiI6MTU3OTM4MzQ4MCwic3ViIjoieGkifQ.BN8faTKI2H45wiUIbUukTu70cvR5eLCoszm8w2xeZis")
    this.centrifuge.on('connect', function(ctx){
      console.log('Connected with client ID ' + ctx.client  + ' over ' + ctx.transport + ' with data: ' + JSON.stringify(ctx.data));
    })
    this.centrifuge.on('disconnect', function(ctx){
      console.log('Disconnected: ' + ctx.reason);
    })

    this.centrifuge.on('message', function(data) {
      console.log('message', JSON.stringify(data))
      // this.centrifuge.send(data)
    })
    this.roster = this.centrifuge.subscribe(roster, this.handleRoster)
                .on("join", this.handleJoin)
                .on("leave", this.handleLeave)
                .on("unsubscribe", this.handleUnsubcribe)
                .on("subscribe", this.handleSubscribe)
                .on("error", this.handleSubscribeError)
    // this.showPresence()
    this.centrifuge.connect()
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    })
  }

  sendMessage = () => {
    const { message, channels } = this.state
    this.chats[channels[0]].publish({
      type: 'message',
      payload: {
        message,
      }
    }).then(function() {
      // send message
    }, function(err) {
      console.log(err)
    })
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
          <Button type="primary" onClick={this.sendMessage}>Send</Button>
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