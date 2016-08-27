import React from 'react'

import '../index.css'

const Withdrawal = ({ onSelectOtherAmount }) => (
  <div className='screen screen--withdrawal'>
    <h1 className='screen__title'>How much cash would you like?</h1>
    <div className='screen__row'>
      <button className='screen__btn'>20</button>
      <button className='screen__btn'>40</button>
      <button className='screen__btn'>60</button>
    </div>
    <div className='screen__row'>
      <button className='screen__btn'>100</button>
      <button className='screen__btn'>200</button>
      <button className='screen__btn'>300</button>
    </div>
    <div className='screen__row'>
      <button className='screen__btn' onClick={onSelectOtherAmount}>Other amount</button>
    </div>
  </div>
)

export default Withdrawal
