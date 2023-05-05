import React, { useState, useEffect } from 'react'
import BoardTable from './BoardTable'
import './Keyboard.css'
import { listOfWords } from './spanish-word'
import { NextPlanOutlined } from '@mui/icons-material'


function Keyboard() {

  //array of alphabet
  const [alphabet1, setAlphabet1] = useState
    (['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'])
  const [alphabet2, setAlphabet2] = useState
    (['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'])
  const [alphabet3, setAlphabet3] = useState
    (['Z', 'X', 'C', 'V', 'B', 'N', 'M'])
  const [alphabet4, setAlphabet4] = useState
    (['Ú', 'Ü', 'É', 'Ñ', 'Á', 'Ó', 'Í'])


  const [letterPos, setletterPos] = useState(0) //letter position starting at 0

  const [nextRow, setNextRow] = useState(0) //row position starting at 0
  const [prevRow, setprevRow] = useState(0) //previous row position starting at 0

  const [userInput, setUserInput] = useState
    ([['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']])


  const [word] = useState(listOfWords[Math.floor(Math.random() * listOfWords.length)])//word that will be used to guess
  const [guess, setGuess] = useState("")
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);

  const [disabled, setDisabled] = useState([]);
  const [yellow, setYellow] = useState([]);
  const [green, setGreen] = useState([]);

  const handleChange = (e) => {
    e.preventDefault()

    setAlphabet1(...alphabet1, [e.target.name])
    setAlphabet2(...alphabet2, [e.target.name])
    setAlphabet3(...alphabet3, [e.target.name])
    setAlphabet4(...alphabet4, [e.target.name])
  }



  const handleClick = (e) => {

    e.preventDefault();


    /*************************************************************************** */

    //if user has clicks enter, continue to FOLLOWING functions
    if (e.target.name === 'ENTER') {

      /* Once User has enter all 5 letter we should stop return and end function  */
      if (letterPos !== 5) return;

      /* ---------SETTING KEYBOARD COLORS----------*/
      for (let i = 0; i <= 5; i++) {


        if (word.includes(userInput[nextRow][i])) {

          setYellow(yellow => [...yellow, userInput[nextRow][i]])

        } if (userInput[nextRow][i] === word[i]) {

          setGreen(green => [...green, userInput[nextRow][i]])

        } else if (userInput[nextRow][i] !== word[i] && !word.includes(userInput[nextRow][i])) {

          setDisabled(disabled => [...disabled, userInput[nextRow][i]])

        }
      }


      /* Check 1:WON:  If the users input matches the word,
      return so it stops the whole function by alerting that the game has been won;  */
      if (userInput[nextRow].join("") === word) {

        setWon(true)
        return alert("You Won!");

      }
      /* Check 2::  If user hasn't won or lost 
      set the users guess to setGuess(). This will check in the BoardTable component if
      each letter is either correct(green, right letter right position),
      wrong(transparent,wrong position),
      almost guessed(yellow,right letter wrong position). ;  */
      else {

        if (nextRow <= 4) {

          setGuess(userInput[nextRow].join(""))
          setprevRow(nextRow)

          if (nextRow !== "") {

            setletterPos(0) //and set the letter position back to 0
            setNextRow(nextRow + 1) //increase the row position

          }
        }
        else if (nextRow === 5) {

          setGuess(userInput[nextRow].join(""))
          setprevRow(nextRow)
          /* Check 2:LOST:  If User is in the last row check to see if the word does not equal the user inputs,
             return so it stops the whole function;  */
          if (nextRow === 5 && userInput[nextRow].join("") !== word) {
            setLost(true)
            return alert("You Lost! Correct word was: " + word);
          }
        }
        /*.JOIN("") :: WE remove the commas and convert it into a string, 
        users guess becomes a string and setguess(). */
      }


      //NEED TO FIX: IF THERE ARE REPEATED LETTERS AND GUESS RIGHT ONE TIME IT SHOULD STAY YELLOW IN KEYBOARD.

      //NEED TO DO: Once User has won/loss create a play again button and reset the game board.
      //NEED TO DO: SHOULD ONLY ALLOW REAL WORDS NOT FAKE ONES.


    }
    /*************************************************************************** */

    //if user wants to delete a letter, continue to FOLLOWING functions
    else if (e.target.name === 'DELETE') {

      if (lost === true || won === true) {
        return;
      }

      //if current letter position is less than 1 we should stop return and end the function.
      if (letterPos <= 5 && letterPos >= 1) {

        setletterPos(letterPos - 1)// it will go back to the previous letter position; 
        userInput[nextRow][letterPos - 1] = '' //and it will set that position into a blank space for a new letter
      }



    }

    /*************************************************************************** */



    else {

      if (lost === true) {
        return;
      }

      if (letterPos > 4) return; //if current letter position is greater than 4 we should stop return and end the function.

      userInput[nextRow][letterPos] = e.target.name
      setUserInput(userInput)
      setletterPos(letterPos + 1)


    }


  }


  useEffect(() => {




    console.log("Word:", word, "UserInput:", guess)
    /*     console.log(letterPos, nextRow , prevRow) */

  })


  return (

    <div className='keyBoard'>
      <BoardTable lost={lost} won={won} prevRow={prevRow} letterPos={letterPos} nextRow={nextRow} clickData={userInput} guess={guess} word={word} />


      {/*Below we loop through the alphabet array using the javascript map() function.
    We return a <button> element for each item. */}

      {/* We use key to identify which items have changes o are removed.
      Keys should be given to the elements inside the array to give the elements
    a stable identity. We use the index as a key since we don't have stable ID's for each element. */}


      <div className='keyboardBody'>

        <div className='AMEkeyboard'>
          <div className='test1'>

            {alphabet1.map((letter, index) => (

              <button
                key={index}
                onClick={handleClick}
                onChange={handleChange}
                disabled={disabled.includes(letter)}
                name={letter}
                className='buttonBox'
                style={{

                  backgroundColor
                    : green.includes(letter)
                      ? 'green'
                      : yellow.includes(letter)
                        ? 'yellow'
                        : disabled.includes(letter)
                          ? 'gray'
                          : '#84a98c'
                }}>

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
                disabled={disabled.includes(letter)}
                name={letter}
                className='buttonBox'

                style={{
                  backgroundColor
                    : green.includes(letter)
                      ? 'green'
                      : yellow.includes(letter)
                        ? 'yellow'
                        : disabled.includes(letter)
                          ? 'gray'
                          : '#84a98c'
                }}
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
                disabled={disabled.includes(letter)}
                name={letter}
                className='buttonBox'
                style={{
                  backgroundColor
                    : green.includes(letter)
                      ? 'green'
                      : yellow.includes(letter)
                        ? 'yellow'
                        : disabled.includes(letter)
                          ? 'gray'
                          : '#84a98c'
                }} >
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


        <div className='SPAkeyboard'>
          <div className='test4'>
            {alphabet4.map((letter, index) => (


              <button
                key={index}
                onClick={handleClick}
                onChange={handleChange}
                disabled={disabled.includes(letter)}
                name={letter}
                className='buttonBox'
                style={{
                  backgroundColor
                    : green.includes(letter)
                      ? 'green'
                      : yellow.includes(letter)
                        ? 'yellow'
                        : disabled.includes(letter)
                          ? 'gray'
                          : '#84a98c'
                }} >
                {letter}
              </button>

            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Keyboard