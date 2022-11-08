import React from 'react'

function BoardInput() {

const [userInput, setUserInput] = 
useState({Input:[{id:'1',letter:'A' }]})


const handleChange=(e)=>{
    e.preventDefault();
    setUserInput({...userInput,[e.target.name]:e.target.value})
   
}
const handleClick=(e)=>{
    e.preventDefault();
}


const handleSubmit=(e)=>{
    console.log(userInput)
    e.preventDefault();
}

  return (
    <div>
        <input 
        type={"text"} 
        >
        
        </input>

    </div>
  )
}

export default BoardInput