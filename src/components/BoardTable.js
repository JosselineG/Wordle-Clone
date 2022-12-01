import React, { useState } from "react";
import './BoardTable.css'


function BoardTable(props) {

    const [rows, setRows] = useState
      ([["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]])

   
        for(let i =0;i<rows.length;i++){
            for(let y =0; y < rows.length;y++){

                if(rows[0][y] == ""){
                    rows[0][y] = props.clickData
                }else if(rows[0][i] != ""){
                    rows[0][i+1] = props.clickData
                }
              
            }
           
        }
   
    console.log(rows)


    return (
        <div className='Body'>
            <div  className='Table'>
                 <table className="rowBoxes" >
            
                   
         {/*                {rows1.map((row, index) => (
                          
                         

                            <tr className="rowBoxes">
                               <td>{row}</td>
                            </tr>
                         
                        
                         
                        ))} */}
    

                  


                    <tr>

                        <tr className="row0"><td>{rows[0][0]}</td><td>{rows[0][1]}</td><td>{rows[0][2]}</td><td>{rows[0][3]}</td><td>{rows[0][4]}</td></tr>
                        <tr className="row1"><td>{rows[1][0]}</td><td>{rows[1][1]}</td><td>{rows[1][2]}</td><td>{rows[1][3]}</td><td>{rows[1][4]}</td></tr>
                        <tr className="row2"><td>{rows[2][0]}</td><td>{rows[2][1]}</td><td>{rows[2][2]}</td><td>{rows[2][3]}</td><td>{rows[2][4]}</td></tr>
                        <tr className="row3"><td>{rows[3][0]}</td><td>{rows[3][1]}</td><td>{rows[3][2]}</td><td>{rows[3][3]}</td><td>{rows[3][4]}</td></tr>
                        <tr className="row4"><td>{rows[4][0]}</td><td>{rows[4][1]}</td><td>{rows[4][2]}</td><td>{rows[4][3]}</td><td>{rows[4][4]}</td></tr>
                        <tr className="row5"><td>{rows[5][0]}</td><td>{rows[5][1]}</td><td>{rows[5][2]}</td><td>{rows[5][3]}</td><td>{rows[5][4]}</td></tr>

                    </tr>

                </table>
            </div>
        </div>
    )


}

export default BoardTable;