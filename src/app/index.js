import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from 'common/general/actions'
import {
  WELCOME_STEP,
  ENTER_PIN_STEP,
  WITHDRAWAL_STEP,
  WITHDRAWAL_OTHER_AMOUNT_STEP,
  IN_PROGRESS_STEP
} from 'common/general/steps'
import ErrorPane from 'components/error-pane'
import Header from 'components/header'
import Welcome from 'components/screens/welcome'
import EnterPin from 'components/screens/enter-pin'
import Withdrawal from 'components/screens/withdrawal'
import WithdrawalOtherAmount from 'components/screens/withdrawal-other-amount'

import './index.css'

class App extends Component {
  onInsertCard = () => {
    const { changeStep } = this.props.actions

    changeStep(ENTER_PIN_STEP)
  }

  onUpdatePin = (e) => {
    const { updatePin } = this.props.actions

    updatePin(e.target.value)
  }

  onUpdateCashWithdrawal = (e) => {
    const { updateCashWithdrawal } = this.props.actions

    updateCashWithdrawal(e.target.value)
  }

  onEnterPin = () => {
    const { changeStep, checkPin } = this.props.actions

    checkPin(this.props.pin)
  }

  onSelectOtherAmount = () => {
    const { changeStep } = this.props.actions

    changeStep(WITHDRAWAL_OTHER_AMOUNT_STEP)
  }

  onEnterCashAmount = (cashAmount) => {
    const { checkCashAmount } = this.props.actions

    checkCashAmount(cashAmount)
  }

  render () {
    const { cashAmount, error, pin, step } = this.props

    return (
      <div>
        <Header />
        <main>
          { step === WELCOME_STEP && <Welcome onInsertCard={this.onInsertCard} /> }
          {
            step === ENTER_PIN_STEP &&
            <EnterPin
              onUpdatePin={this.onUpdatePin}
              onEnterPin={this.onEnterPin}
              pin={pin}
            />
          }
          {
            step === WITHDRAWAL_STEP &&
            <Withdrawal
              onSelectOtherAmount={this.onSelectOtherAmount}
              onEnterCashAmount={this.onEnterCashAmount}
            />
          }
          {
            step === WITHDRAWAL_OTHER_AMOUNT_STEP &&
            <WithdrawalOtherAmount
              cashAmount={cashAmount}
              onEnterCashAmount={this.onEnterCashAmount}
              onUpdateCashWithdrawal={this.onUpdateCashWithdrawal}
            />
          }
          { step === IN_PROGRESS_STEP && <div>wait a minute...</div> }
          { error && <ErrorPane message={error} /> }
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cashAmount: state.general.cashAmount,
  step: state.general.step,
  error: state.general.error,
  pin: state.general.pin
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)