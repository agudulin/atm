import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './common/steps/actions'
import { WELCOME_STEP, ENTER_PIN_STEP } from './common/steps'
import Welcome from './components/welcome'

class App extends Component {
  onClick = () => {
    const { changeStep } = this.props.actions

    changeStep(ENTER_PIN_STEP)
  }

  render () {
    const { step } = this.props

    return (
      <div>
        <h1 onClick={this.onClick}>atm</h1>
        { step === WELCOME_STEP && <Welcome /> }
        { step === ENTER_PIN_STEP && <div>pin epta</div> }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  step: state.steps.step
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
