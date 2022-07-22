import React from 'react'

// const Label = () => {
//   return (
//     <div>Label</div>

    const Label = ({value}) => {
      return (
        <p style={{fontWeight: 'bold', margin: 0}}>{value}</p>
  )
}

export default Label