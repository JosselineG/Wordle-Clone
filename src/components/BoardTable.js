import React from "react";
import './BoardTable.css'


function BoardTable(props) {



    return (

        <div className='Table'>
            <div className="TableBox" >


                {props.clickData.map((row, index) => (

                    <div className="rows" key={index}>
                 
                        {row.map((col, idx) => (

                            <div className="letterBox" key={idx}
                                   //NEED TO FIX: BOX SHOULD BE GRAYED OUT IF THE LETTER IS NOT PART OF THE WORD.
                                style={{
                                    backgroundColor: props.won && props.nextRow === index 
                                            ?'green'
                                            :(props.guess[idx] === props.word[idx]) && props.prevRow === index
                                            ?'green'
                                            :props.word.includes(props.guess[idx]) && props.prevRow === index
                                            ?'yellow'
                                         /*    :(props.guess[idx] !== props.word[idx]) && props.prevRow === index 
                                            ?'grey' */
                                            :'transparent'
                                }}>
                                    
                                {col}
                            </div>


                        ))}
                    </div>

                ))}
            </div>

        </div>

    )


}

export default BoardTable;