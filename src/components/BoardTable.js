import React, { useState } from "react";
import './BoardTable.css'


function BoardTable(props) {

    const [board, setBoard] = useState(props.clickData)
 
    const [color, setColor] = useState('')

   
console.log(props.isMatching,props.word,props.guess)
    return (
        <div className='Body'>
            <div className='Table'>
                <table className="rowBoxes" >
                    <tbody>

                        {board.map((row, index) => (

                           
                            <tr key={index}>
                              {index}

                                {row.map((col, idx) => (
                              

                                    <td key={idx}>
                                            
                            
                                        <h1 style={{backgroundColor: props.word === props.guess? 'black': props.word[idx] === props.guess[idx]? 'green': props.word.includes(props.guess[idx])}}>{col}</h1>
                                    
                                    </td>

                                ))}

                            </tr>


                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )


}

export default BoardTable;