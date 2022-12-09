import React, { useEffect, useState } from 'react'
import Keyboard from './Keyboard'
/* import wordList from './spanish-word.json' */

 
function Words(props) {

    const [guess, setGuess] = useState(props.clickguess)
    const [correct, setCorrect] = useState('')
    const [wrong, setWrong] = useState('')




  console.log("Word that will be used:" + guess ) 
 

    return (
        <div>
           
        </div>
    )
}

export default Words