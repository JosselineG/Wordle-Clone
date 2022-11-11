import React, { useState } from 'react'
import './Keyboard.css'
function Keyboard() {

  //Created an array of alphabet
  const [alphabet, setAlphabet] = useState
    (['Q', 'W', 'E', 'R', 'T','Y', 'U', 'I', 'O','P', 
      'A','S', 'D', 'F', 'G', 'H','J', 'K', 'L',
      'Z', 'X','C', 'V', 'B', 'N', 'M'])



  return (
    <div className='keyBoard'>

      {/*Below we loop through the alphabet array using the javascript map() function.
    We return a <button> element for each item. */}

      {/* We use key to identify which items have changes o are removed.
      Keys should be given to the elements inside the array to give the elements
    a stable identity. We use the index as a key since we don't have stable ID's for each element. */}
      {alphabet.map((letter, index) => (

        <button key={index} className='buttonBox' >
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