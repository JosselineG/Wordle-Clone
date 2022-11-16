import React, { useState }  from 'react'
import Keyboard from './Keyboard';
import BoardTable from './BoardTable'

function BoardInput(props) {

const [userInput, setUserInput] = useState("")


const handleClick=(e)=>{
    e.preventDefault();
    setUserInput(props.handleClick)
    console.log(userInput)
}


/* const handleSubmit=(e)=>{
    console.log(userInput)
    e.preventDefault();
} */

  return (
    <div>
       <button
      
          onClick={handleClick}
      
         >
        
        </button>
        <BoardTable onClick={handleClick} handleClick={userInput} /> 
   
    </div>
  )
}

export default BoardInput