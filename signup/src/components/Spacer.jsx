import React from 'react'

// const Spacer = () => {
//   return (
//     <div>Spacer</div>

const Spacer = ({height=0, width=0}) => {
  return (
    <div style ={{
        height: height,
        width: width
    }} >

</div>

  )
}

export default Spacer