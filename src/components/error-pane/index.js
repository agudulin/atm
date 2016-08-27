import React from 'react'

import './index.css'

const ErrorPane = ({ message }) => (
  <div className='error-pane'>
    <span className='error-pane__prefix'>
      Error:
    </span>
    { message }
  </div>
)

export default ErrorPane
