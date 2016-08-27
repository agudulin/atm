import React from 'react'

const Withdrawal = ({ onSelectOtherAmount }) => (
  <div>
    <div>How much cash would you like?</div>
    <button>20</button>
    <button>40</button>
    <button>60</button>
    <button>100</button>
    <button>200</button>
    <button>300</button>
    <button onClick={onSelectOtherAmount}>Other amount</button>
  </div>
)

export default Withdrawal
