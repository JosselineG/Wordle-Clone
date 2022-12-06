import React, { useState } from 'react'
import BoardTable from './BoardTable'
import './Keyboard.css'


function Keyboard(props) {

  //Created an array of alphabet
  const [alphabet, setAlphabet] = useState
    (['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
      'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'ENTER',
      'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE'])


  const [letterPos, setletterPos] = useState(0)
  const [nextRow, setNextRow] = useState(0)

  const [userInput, setUserInput] = useState
    ([['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']])


  const handleChange = (e) => {
    e.preventDefault()
    setAlphabet(...alphabet, [e.target.name])

  }



  const handleClick = (e) => {

    e.preventDefault();

    //Once user has enter all 5 letter and clicks enter continue to next if statement
    if (e.target.name == 'ENTER') {


      if (letterPos !== 5) return; //if letter position is 5 we should stop return and end function 
      
      setNextRow(nextRow + 1) //increase the row position
      setletterPos(0) //and set the letter position back to 0

    }else if(e.target.name ==  'DELETE'){

      setletterPos(letterPos - 1)
      userInput[nextRow][letterPos] = ''

    }else {


      if (letterPos > 4) return; //if current letter position is greater than 4 we should stop return and end the function.
      userInput[nextRow][letterPos] = e.target.name
      setUserInput(userInput)
      setletterPos(letterPos + 1)

    }
     console.log("clicked", userInput, letterPos)
  }


  return (
    <div className='keyBoard'>

      <BoardTable clickData={userInput} clickId={letterPos} clickNextRow={nextRow} /> 


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