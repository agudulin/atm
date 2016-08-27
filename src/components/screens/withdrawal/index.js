import React from 'react'

import '../index.css'

const cashButton = (amount, onClick) => (
  <button className='screen__btn' onClick={() => onClick(amount)} key={amount}>{ amount }</button>
)

const Withdrawal = ({ onEnterCashAmount, onSelectOtherAmount }) => (
  <div className='screen screen--withdrawal'>
    <h1 className='screen__title'>How much cash would you like?</h1>
    <div className='screen__row'>
      { [20, 40, 60].map((amount) => cashButton(amount, onEnterCashAmount)) }
    </div>
    <div className='screen__row'>
      { [100, 200, 300].map((amount) => cashButton(amount, onEnterCashAmount)) }
    </div>
    <div className='screen__row'>
      <button className='screen__btn' onClick={onSelectOtherAmount}>Other amount</button>
    </div>
  </div>
)

export default Withdrawal
