import React from 'react'

import '../index.css'

const Welcome = ({ onInsertCard }) => (
  <div className='screen screen--welcome'>
    <h1 className='screen__title'>Please insert your card to begin.</h1>
    <button className='screen__btn' onClick={onInsertCard}>Insert card</button>
  </div>
)

export default Welcome
