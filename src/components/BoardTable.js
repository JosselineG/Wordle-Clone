import React, { useState } from "react";
import './BoardTable.css'


function BoardTable(props) {

    const [board, setBoard] = useState
        ([["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]])


  
    for (let i = 0; i < 5; i++) {

        if (board[0][i] == "") {
            board[0][props.clickId] = props.clickData
        }

    }



    console.log(board)



    return (
        <div className='Body'>
            <div className='Table'>
                <table className="rowBoxes" >
                    <tbody>

                        {board.map((row, index) => (

                            <tr key={index}>
                                {row.map((col, idx) => (

                                    <td key={idx}>{col}</td>

                                ))}

                            </tr>


                        ))}

                        {/* 
                        <tr>

                            <tr className="row0"><td>{rows[0][0]}</td><td>{rows[0][1]}</td><td>{rows[0][2]}</td><td>{rows[0][3]}</td><td>{rows[0][4]}</td></tr>
                            <tr className="row1"><td>{rows[1][0]}</td><td>{rows[1][1]}</td><td>{rows[1][2]}</td><td>{rows[1][3]}</td><td>{rows[1][4]}</td></tr>
                            <tr className="row2"><td>{rows[2][0]}</td><td>{rows[2][1]}</td><td>{rows[2][2]}</td><td>{rows[2][3]}</td><td>{rows[2][4]}</td></tr>
                            <tr className="row3"><td>{rows[3][0]}</td><td>{rows[3][1]}</td><td>{rows[3][2]}</td><td>{rows[3][3]}</td><td>{rows[3][4]}</td></tr>
                            <tr className="row4"><td>{rows[4][0]}</td><td>{rows[4][1]}</td><td>{rows[4][2]}</td><td>{rows[4][3]}</td><td>{rows[4][4]}</td></tr>
                            <tr className="row5"><td>{rows[5][0]}</td><td>{rows[5][1]}</td><td>{rows[5][2]}</td><td>{rows[5][3]}</td><td>{rows[5][4]}</td></tr>

                        </tr>  */}
                    </tbody>
                </table>
            </div>
        </div>
    )


}

export default BoardTable;