import React from 'react'

import './index.css'

const Footer = ({ displayBackButton, onBack, onExit }) => (
  <div className='footer'>
    { displayBackButton &&
      (<button className='footer__btn is-left' onClick={onBack}>Back</button>)
    }
    <button className='footer__btn is-right' onClick={onExit}>Exit</button>
  </div>
)

export default Footer
