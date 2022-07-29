import React from 'react'
import { useState }  from 'react'

const Button = () => {
   

    const [clr, setclr] = useState({color: 'blue'})
  return (
    <div>
        {/* <button style= {{backgroundColor: 'blue'}}>Change color to Red</button> */}


        <button onClick = { ()=>{
           
            setclr({ color: 'red'})
       
        }} style= {{backgroundColor: clr.color}}
        >Change color to Red</button>


{/* with else / if statement */}
        {/* <button onClick = { ()=>{
            if(clr.color === 'blue'){
            setclr({ color: 'red'});
        }else {
            setclr({ color: 'blue'});
        }
        }} style= {{backgroundColor: clr.color}}
        >Change color to Red</button> */}
    </div>
  )
}

export default Button