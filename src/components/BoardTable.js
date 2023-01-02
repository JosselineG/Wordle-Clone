import React, { useState } from "react";
import './BoardTable.css'


function BoardTable(props) {

    const [board, setBoard] = useState(props.clickData)





    return (

        <div className='Table'>
            <div className="TableBox" >


                {board.map((row, index) => (

                    <div
                        className="rows"
                        key={index}>

{index}

                        {row.map((col, idx) => (



                            <div
                                className="letterBox"
                                key={idx}
                                /* style={{ backgroundColor: props.isMatching?"green": !props.isMatching?"transparent":"black" }} */

                                style={{
                                    backgroundColor: 
                                    props.word[idx] === props.guess[idx] 
                                    && props.nextRow[index] === row[index]
                                  
                                    ? 'green'
                                        : props.word.includes(props.guess[idx]) 
                                        && props.nextRow[index] === row[index] 
                                            ? 'yellow'
                                            : 'transparent'
                                }}
                            >

                              
                      
{props.guess[idx]}
                              {idx}  {col}


                            </div>

                            
                        ))}
                    </div>



                ))}
            </div>

        </div>

    )


}

export default BoardTable;