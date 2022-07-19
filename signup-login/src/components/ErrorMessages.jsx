import React from 'react'

const ErrorMessages = ({error}) => {
  return (
   <p style={{color: 'red', fontSize: 12, textAlign: 'center'}}>{error}</p>
  )
}

export default ErrorMessages