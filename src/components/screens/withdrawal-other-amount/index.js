import React from 'react'

const WithdrawalOtherAmount = ({ cashAmount, onEnterCashAmount, onUpdateCashWithdrawal }) => (
  <div className='screen screen--withdrawal-other-amount'>
    <h1 className='screen__title'>How much cash would you like?</h1>
    <input className='screen__input' type='number' onChange={onUpdateCashWithdrawal} value={cashAmount} />
    <button className='screen__btn' onClick={() => onEnterCashAmount(cashAmount)}>ENTER</button>
  </div>
)

export default WithdrawalOtherAmount
