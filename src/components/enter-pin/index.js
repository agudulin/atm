import React from 'react'

const EnterPin = ({ onEnterPin }) => (
  <div>
    <div>Please enter your PIN and press Enter to continue.</div>
    <input type='number' />
    <button onClick={onEnterPin}>ENTER</button>
  </div>
)

export default EnterPin
