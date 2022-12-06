
import React, { useState } from "react";
import './BoardTable.css'


function BoardTable(props) {

    const [board, setBoard] = useState(props.clickData)



    return (
        <div className='Body'>
            <div className='Table'>
                <table className="rowBoxes" >
                    <tbody>

                        {board.map((row, index) => (

                            <tr key={index}>
                                {row.map((col, idx) => (

                                    <td key={idx}>
                                        
                                        <h1>{col}</h1>
                                    
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