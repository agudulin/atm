import React from 'react'

const Welcome = ({ onInsertCard }) => (
  <div>
    <div>Please insert your card to begin.</div>
    <button onClick={onInsertCard}>BEGIN</button>
  </div>
)

export default Welcome
