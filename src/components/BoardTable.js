import React, { useState } from "react";
import './BoardTable.css'


function BoardTable(props) {

    const [board, setBoard] = useState
        ([['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']])


   
/* 
  const [Id, setId] = useState(props.clickId)



    const handleChange = (e) => {
        e.preventDefault();

    } */



/*     for (let i = 1; i < board.length; i++) {

            //[0,0] == '' //true
        if (board[0][i] == '') { 
            board[0][0] = props.clickData
        } 
    }
 */
/* 
    console.log(board, Id) */


    return (
        <div className='Body'>
            <div className='Table'>
                <table className="rowBoxes" >
                    <tbody>

                        {board.map((row, i) => (

                            <tr key={i}>
                                {row.map((col, idx) => (

                                    <td  key={idx}><h1>{col}</h1></td>

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