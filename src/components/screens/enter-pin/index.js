import React from 'react'

import '../index.css'

const EnterPin = ({ onChangePin, onEnterPin, pin }) => (
  <div className='screen screen--enter-pin'>
    <div className='screen__title'>Please enter your PIN and press Enter to continue.</div>
    <input className='screen__input' type='password' value={pin} onChange={onChangePin}/>
    <button className='screen__btn' onClick={onEnterPin}>ENTER</button>
  </div>
)

export default EnterPin
