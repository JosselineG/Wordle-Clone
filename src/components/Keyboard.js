import React, { useState } from 'react'
import BoardTable from './BoardTable'
import Navbar from './Navbar'
import './Keyboard.css'
import { listOfWords } from './test'
import { isDisabled } from '@testing-library/user-event/dist/utils'


function Keyboard(props) {

  //array of alphabet
  const [alphabet1, setAlphabet1] = useState
    (['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'])
  const [alphabet2, setAlphabet2] = useState
    (['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'])
  const [alphabet3, setAlphabet3] = useState
    (['Z', 'X', 'C', 'V', 'B', 'N', 'M'])


  const [letterPos, setletterPos] = useState(0) //letter position starting at 0
  const [nextRow, setNextRow] = useState(0) //row position starting at 0
  const [userInput, setUserInput] = useState
    ([['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']])


  const [word, setWord] = useState(listOfWords[Math.floor(Math.random() * listOfWords.length)])//word that will be used to guess
  const [guess, setGuess] = useState("")
  const [isMatching, setIsMatching] = useState(false);



  const handleChange = (e) => {
    e.preventDefault()
    setAlphabet1(...alphabet1, [e.target.name])
    setAlphabet2(...alphabet2, [e.target.name])
    setAlphabet3(...alphabet2, [e.target.name])
  }



  const handleClick = (e) => {

    e.preventDefault();



    /*************************************************************************** */

    //if user has clicks enter, continue to next if statement
    if (e.target.name === 'ENTER') {


      if (letterPos !== 5) return; //Once User has enter all 5 letter we should stop return and end function 


      setGuess(userInput[nextRow].join(""))


      //ChecksOUT 1. Checks if the whole word matches & return so it stops the whole function;
      if (guess === word) {

        console.log("100% Correcto")
        return;

        //2. checks if they have the same letter in the right position
      } else if (userInput[nextRow] === word[nextRow]) {

        console.log(userInput[nextRow], Array.from(word))//getting undefined


        console.log("right letter,right position")
        setGuess(userInput[nextRow])
        setNextRow(nextRow + 1) //increase the row position
        
        
        //ChecksOUT 3. checks if the word includes the same letters as the but in the wrong position
      } else if (word.includes(guess)) {
        console.log("right letter,wrong position")
     

        //ChecksOUT 4. checks if the whole word is wrong.("gray") 
      } else {
        console.log("is not matching")
      }


      setNextRow(nextRow + 1) //increase the row position
      setletterPos(0) //and set the letter position back to 0

      /*   setGuess(userInput[nextRow])//WITH THE .JOIN WE remove the commas and convert it into a string, we set the users guess into the setguess() 
        */


    }
    /*************************************************************************** */

    else if (e.target.name == 'DELETE') { //if user wants to delete a letter, continue to next function

      if (letterPos < 1) return;
      setletterPos(letterPos - 1)// it will go back to the previous letter position; 
      userInput[nextRow][letterPos - 1] = '' //and it will set that position into a blank space for a new letter

    }

    /*************************************************************************** */

    else {

      if (letterPos > 4) return; //if current letter position is greater than 4 we should stop return and end the function.
      userInput[nextRow][letterPos] = e.target.name
      setUserInput(userInput)
      setletterPos(letterPos + 1)



    }


    console.log("clicked", userInput[0], word, guess, nextRow)

  }




  return (
    <div className='navigator'>

      <Navbar />

      <div className='keyBoard'>
        <BoardTable isMatching={isMatching} letterPos={letterPos} nextRow={nextRow} clickData={userInput} guess={guess} word={word} />


        {/*Below we loop through the alphabet array using the javascript map() function.
    We return a <button> element for each item. */}

        {/* We use key to identify which items have changes o are removed.
      Keys should be given to the elements inside the array to give the elements
    a stable identity. We use the index as a key since we don't have stable ID's for each element. */}

        <div className='keyboardBody'>


          <div className='test1'>

            {alphabet1.map((letter, index) => (

              <button
                key={index}
                onClick={handleClick}
                onChange={handleChange}
                name={letter}
                className='buttonBox' >
                {letter}
              </button>


            ))}

          </div>
          <div className='test2'>
            {alphabet2.map((letter, index) => (

              <button
                key={index}
                onClick={handleClick}
                onChange={handleChange}
                name={letter}
                className='buttonBox'
              >

                {letter}
              </button>


            ))}
          </div>


          <div className='test3'>
            <button

              onClick={handleClick}
              onChange={handleChange}
              name='ENTER'
              className='buttonBoxD'
            >
              ENTER
            </button>

            {alphabet3.map((letter, index) => (


              <button
                key={index}
                onClick={handleClick}
                onChange={handleChange}
                name={letter}
                className='buttonBox' >
                {letter}
              </button>


            ))}

            <button

              onClick={handleClick}
              onChange={handleChange}
              name='DELETE'
              className='buttonBoxD'>
              DELETE
            </button>

          </div>

        </div>
      </div>




    </div>
  )
}

export default Keyboard