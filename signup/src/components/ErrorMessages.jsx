import React from 'react'

// const ErrorMessages = () => {
//   return (
//     <div>ErrorMessages</div>

const ErrorMessages = ({error}) => {
    return (
     <p style={{color: 'red', fontSize: 12, textAlign: 'center'}}>{error}</p>
  )
}

export default ErrorMessages