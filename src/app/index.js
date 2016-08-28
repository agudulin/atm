import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from 'common/general/actions'
import {
  WELCOME_STEP,
  ENTER_PIN_STEP,
  WITHDRAWAL_STEP,
  WITHDRAWAL_OTHER_AMOUNT_STEP,
  GOODBYE_STEP
} from 'common/general/steps'
import ErrorPane from 'components/error-pane'
import Footer from 'components/footer'
import Header from 'components/header'
import Welcome from 'components/screens/welcome'
import EnterPin from 'components/screens/enter-pin'
import Withdrawal from 'components/screens/withdrawal'
import WithdrawalOtherAmount from 'components/screens/withdrawal-other-amount'
import Goodbye from 'components/screens/goodbye'

import './index.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.onInsertCard = this.onInsertCard.bind(this)
    this.onUpdatePin = this.onUpdatePin.bind(this)
    this.onUpdateCashAmount = this.onUpdateCashAmount.bind(this)
    this.onEnterPin = this.onEnterPin.bind(this)
    this.onSelectOtherAmount = this.onSelectOtherAmount.bind(this)
    this.onEnterCashAmount = this.onEnterCashAmount.bind(this)
    this.onBack = this.onBack.bind(this)
    this.onExit = this.onExit.bind(this)
  }

  onInsertCard () { this.props.actions.changeStep(ENTER_PIN_STEP) }

  onUpdatePin (e) { this.props.actions.updatePin(e.target.value) }

  onUpdateCashAmount (e) { this.props.actions.updateCashWithdrawal(e.target.value) }

  onEnterPin () { this.props.actions.checkPin(this.props.pin) }

  onSelectOtherAmount () { this.props.actions.changeStep(WITHDRAWAL_OTHER_AMOUNT_STEP) }

  onEnterCashAmount (cashAmount) { this.props.actions.checkCashAmount(cashAmount) }

  onBack () { this.props.actions.changeStepBack() }

  onExit () { this.props.actions.changeStep(WELCOME_STEP) }

  render () {
    const { cashAmount, error, pin, step, spinner } = this.props

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
          onUpdateCashAmount={this.onUpdateCashAmount}
        />
      ),
      [GOODBYE_STEP]: () => (
        <Goodbye />
      )
    }[step]

    return (
      <div>
        <Header />
        <div>
          { spinner && <div>Please wait...</div> }
          { !spinner && renderScreen && renderScreen() }
          { !spinner && error && <ErrorPane message={error} /> }
        </div>
        <Footer
          displayBackButton={!spinner && step !== WELCOME_STEP && step !== GOODBYE_STEP}
          displayExitButton={!spinner && step !== WELCOME_STEP}
          onBack={this.onBack}
          onExit={this.onExit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cashAmount: state.general.cashAmount,
  step: state.general.step,
  spinner: state.general.spinner,
  error: state.general.error,
  pin: state.general.pin
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
