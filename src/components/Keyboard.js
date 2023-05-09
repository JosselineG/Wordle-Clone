import React, { useState, useEffect } from 'react'
import BoardTable from './BoardTable'
import './Keyboard.css'
import { listOfWords } from './spanish-word'



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

  const [word, setWord] = useState(listOfWords[Math.floor(Math.random() * listOfWords.length)])//word that will be used to guess
  const [guess, setGuess] = useState("")
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);

  const [close, setClose] = useState(false)

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

      /* Using the .find method on the array of listOfWords to check if the word the user inputs is real.
        This way we avoid that the user enters repeated letters or words that don't make sense, but
        there might be real words that aren't listed in the array. */
      if (listOfWords.find((word) => word === userInput[nextRow].join(""))) {



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
              return alert("Perdiste! La palabra correcta era: " + word);
            }
          }
          /*.JOIN("") :: WE remove the commas and convert it into a string, 
          users guess becomes a string and setguess(). */
        }

      } else {
        alert("No esta en la lista de palabras")
      }




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



    } else if (e.target.name === 'retry') {
      console.log("retry button clicked")

      /* User is able to reset the game once they win or lose to continue playing */
      setWord(listOfWords[Math.floor(Math.random() * listOfWords.length)])
      setUserInput([['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']])
      setGuess("")
      setWon(false);
      setLost(false);

      setDisabled([]);
      setYellow([]);
      setGreen([]);
      setletterPos(0)

      setNextRow(0)
      setprevRow(0)

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

  const handleClose = () => {
    setClose(true)
  }

  useEffect(() => {
    console.log("UserInput:", guess,word)
  })


  return (

    <div className='keyBoard'>


      <BoardTable won={won} prevRow={prevRow} nextRow={nextRow} clickData={userInput} guess={guess} word={word} />


      {/*Below we loop through the alphabet array using the javascript map() function.
    We return a <button> element for each item. */}

      {/* We use key to identify which items have changes o are removed.
      Keys should be given to the elements inside the array to give the elements
    a stable identity. We use the index as a key since we don't have stable ID's for each element. */}

      {won
        ? <div className='PopUpMessage'>
          <h1>¡Felicitaciones! Has ganado!</h1>
          <button
            onClick={handleClick}
            onChange={handleChange}
            name='retry'
            className='retryCloseButton'>
            Reiniciar
          </button>
        </div>
        : null
      }


      {lost
        ? <div className='PopUpMessage'>
          <h1>¡Perdiste! La palabra correcta era: {word}</h1>
          <button
            onClick={handleClick}
            onChange={handleChange}
            name='retry'
            className='retryCloseButton'>
            Reiniciar
          </button>
        </div>
        : null
      }


      {close

        ?


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

        : <div className='RulesMessage'>
          <h1>Cómo jugar</h1>
          <ul>
            <li>
              Tienes 6 intentos para adivinar la palabra correcta.
            </li>
            <li>
              Cada fila requiere una palabra válida de 5 letras.
            </li>
            <li>
              El color del cuadro representa qué tan cerca estuvo su suposición de la palabra.
            </li>
          </ul>

          <div>
            <div>Cuadro verde significa que la letra está en la posicion correcta.</div>
            <div>Cuadro amarilla significa que la letra pertenece en la palabra pero está en la posicion incorrecta.</div>
            <div>Cuadro gris significa que la letra no pertenece en la palabra.</div>
          </div>

          <button
            className='retryCloseButton'
            onClick={handleClose}
            onChange={handleChange}>
            Cerrar
          </button>

        </div>

      }
    </div>
  )
}

export default Keyboard