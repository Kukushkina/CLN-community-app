import React, {Component} from 'react'
import { connect } from 'react-redux'

import Network from 'containers/Network'
import Communities from 'components/Communities'
import Storage from 'components/Storage'
import {fetchSupportsToken} from 'actions'
import {fetchName, balanceOf, transfer} from 'actions/basicToken'

class App extends Component {
  componentDidMount () {
    this.props.fetchSupportsToken('0x41C9d91E96b933b74ae21bCBb617369CBE022530')
    this.props.fetchName()
    this.props.balanceOf('0x0d4DF041Dbef6fFC0E444a4a213774AdB0c118C2')
  }

  render () {
    return <div>
      <Network />
      <Communities />
      <Storage />
    </div>
  }
}

const mapStateToProps = (state) => state

export default connect(
  mapStateToProps, {
    fetchSupportsToken,
    fetchName,
    balanceOf,
    transfer
  }
)(App)
