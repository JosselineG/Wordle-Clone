import React, { useState } from 'react'
import './Keyboard.css'
function Keyboard() {

//Created an array of alphabet
 const [alphabet,setAlphabet] = useState(['A','B','C','D','E',
                                             'F','G','H','I','J',
                                             'K','L','M','N','O',
                                             'P','Q','R','S','T',
                                             'U','V','W','X','Y','Z'])
  
  

return (
    <div className='keyBoard'>
        <button>
           b
        </button>
    </div>
  )
}

export default Keyboard