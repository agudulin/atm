import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from 'common/general/actions'
import {
  WELCOME_STEP,
  ENTER_PIN_STEP,
  WITHDRAWAL_STEP,
  WITHDRAWAL_OTHER_AMOUNT_STEP,
  IN_PROGRESS_STEP,
  GOODBYE_STEP
} from 'common/general/steps'
import ErrorPane from 'components/error-pane'
import Header from 'components/header'
import Welcome from 'components/screens/welcome'
import EnterPin from 'components/screens/enter-pin'
import Withdrawal from 'components/screens/withdrawal'
import WithdrawalOtherAmount from 'components/screens/withdrawal-other-amount'
import Goodbye from 'components/screens/goodbye'

import './index.css'

class App extends Component {
  //componentDidUpdate(prevProps) {
    //if (this.props.step !== IN_PROGRESS_STEP && this.props.step !== prevProps.step) {
    //}
  //}

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

    const renderScreen = {
      [WELCOME_STEP]: () => (
        <Welcome onInsertCard={this.onInsertCard} />
      ),
      [ENTER_PIN_STEP]: () => (
        <EnterPin
          onUpdatePin={this.onUpdatePin}
          onEnterPin={this.onEnterPin}
          pin={pin}
        />
      ),
      [WITHDRAWAL_STEP]: () => (
        <Withdrawal
          onSelectOtherAmount={this.onSelectOtherAmount}
          onEnterCashAmount={this.onEnterCashAmount}
        />
      ),
      [WITHDRAWAL_OTHER_AMOUNT_STEP]: () => (
        <WithdrawalOtherAmount
          cashAmount={cashAmount}
          onEnterCashAmount={this.onEnterCashAmount}
          onUpdateCashWithdrawal={this.onUpdateCashWithdrawal}
        />
      ),
      [IN_PROGRESS_STEP]: () => (
        <div>wait a minute...</div>
      ),
      [GOODBYE_STEP]: () => (
        <Goodbye />
      )
    }[step]

    return (
      <div>
        <Header />
        <div>
          { renderScreen && renderScreen() }
          { error && <ErrorPane message={error} /> }
        </div>
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
