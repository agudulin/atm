import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from 'common/steps/actions'
import {
  WELCOME_STEP,
  ENTER_PIN_STEP,
  WITHDRAWAL_STEP,
  WITHDRAWAL_OTHER_AMOUNT_STEP
} from 'common/steps'
import Welcome from 'components/welcome'
import EnterPin from 'components/enter-pin'
import Withdrawal from 'components/withdrawal'
import WithdrawalOtherAmount from 'components/withdrawal-other-amount'

import './index.css'

class App extends Component {
  onInsertCard = () => {
    const { changeStep } = this.props.actions

    changeStep(ENTER_PIN_STEP)
  }

  onEnterPin = () => {
    const { changeStep } = this.props.actions

    changeStep(WITHDRAWAL_STEP)
  }

  onSelectOtherAmount = () => {
    const { changeStep } = this.props.actions

    changeStep(WITHDRAWAL_OTHER_AMOUNT_STEP)
  }

  render () {
    const { step } = this.props

    return (
      <div>
        <h1>atm</h1>
        { step === WELCOME_STEP && <Welcome onInsertCard={this.onInsertCard} /> }
        { step === ENTER_PIN_STEP && <EnterPin onEnterPin={this.onEnterPin} /> }
        { step === WITHDRAWAL_STEP && <Withdrawal onSelectOtherAmount={this.onSelectOtherAmount} /> }
        { step === WITHDRAWAL_OTHER_AMOUNT_STEP && <WithdrawalOtherAmount /> }
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
