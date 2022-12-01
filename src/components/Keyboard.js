import React, { useState } from 'react'
import BoardTable from './BoardTable'
import './Keyboard.css'


function Keyboard(props) {

  //Created an array of alphabet
  const [alphabet, setAlphabet] = useState
    (['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
      'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
      'Z', 'X', 'C', 'V', 'B', 'N', 'M'])


  const [userId, setUserId] = useState(0)

  const [userInput, setUserInput] = useState("")



  const handleChange = (e) => {
    e.preventDefault()
    setAlphabet(...alphabet, [e.target.name])
  }



  const handleClick = (e) => {
    e.preventDefault();

    setUserId(userId + 1)
   setUserInput(e.target.name)

   


    console.log("clicked", userInput, userId)
  }






  return (
    <div className='keyBoard'>

      <BoardTable clickData={userInput} clickId={userId} />

      {/*Below we loop through the alphabet array using the javascript map() function.
    We return a <button> element for each item. */}

      {/* We use key to identify which items have changes o are removed.
      Keys should be given to the elements inside the array to give the elements
    a stable identity. We use the index as a key since we don't have stable ID's for each element. */}
      {alphabet.map((letter, index) => (
        
        <button
          key={index}
          onClick={handleClick}
          onChange={handleChange}
          name={letter}
          className='buttonBox' >
          {letter}
        </button>


      ))}

      {/*  <button type='submit' className='buttonBoxEnter'>
        Enter
      </button> */}


    </div>
  )
}

export default Keyboard