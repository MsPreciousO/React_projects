import React from 'react'

// const BaseButton = () => {
//   return (
//     <div>BaseButton</div>

    const BaseButton = ({children, color, checkFields}) => {
      const styles ={
          border: '4px solid #eeeeee',
          height: 45,
          width: '95%',
          borderRadius: 10,
          backgroundColor: color ?? '#fff',
          cursor: 'pointer',
          fontSize: 18
         
      }
    return (
      <div>
          <button onClick={checkFields} style={styles}> 
          {/* style paragraph - ternary operator */}
          <p style={{
              margin: 0,
  
              // color: color ? '#fff' : '#000'
              color: color && '#fff'
          }}>{children}</p>
          </button>
      </div>
  )
}

export default BaseButton