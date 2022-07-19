import React from 'react'

const Userinput = ({change, placeholder, type='text'}) => {
    const styles ={
        border: '4px solid #eeeeee',
        height: 45,
        width: '92%',
        borderRadius: 10,
        backgroundColor: '#fff',
        
    }
  return (
    <input onChange={change} type={type} style ={styles} placeholder={placeholder}/>
  )
}

export default Userinput