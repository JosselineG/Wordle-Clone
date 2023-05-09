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

                            /* NEED TO FIX :: When a letter ex.(A) is in the right position 
                            and there is only one in the word and user inputs the letter twice 
                            it should only be green when is in the right spot as for the other should be greyed out */
                                style={{

                                    backgroundColor: props.won && props.nextRow === index
                                        ? '#538D4E'
                                        : (props.guess[idx] === props.word[idx]) && props.prevRow === index
                                            ? '#538D4E'
                                            : props.word.includes(props.guess[idx]) && props.prevRow === index
                                                ? '#B59F3B'
                                                : !props.word.includes(props.guess) && (props.guess !== props.word) && props.prevRow === index
                                                    ? "grey"
                                                    : 'transparent'


                                }}>
                                <div className="Letters">
                                    {col}
                                </div>
                            </div>


                        ))}
                    </div>

                ))}
            </div>

        </div>

    )


}

export default BoardTable;