import React, {useEffect } from "react";
import './BoardTable.css'


function BoardTable(props) {


    useEffect(() => {

        console.log("inside board table" , props.guess,  props.word, props.nextRow,  props.isMatching)
    

    
      }) 

    return (

        <div className='Table'>
            <div className="TableBox" >


                {props.clickData.map((row, index) => (

                    <div className="rows" key={index}>
                        {index}
                        {row.map((col, idx) => (

                            <div className="letterBox" key={idx}
                             
                                style={{
                                    backgroundColor: props.isMatching && props.nextRow === index 
                                         ? 'green'
                                        :(props.guess[idx] === props.word[idx]) && props.nextRow === index
                                            ? 'green'
                                            :props.word.includes(props.guess[idx]) && props.nextRow === index
                                            ?'yellow'
                                            : 'transparent'
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