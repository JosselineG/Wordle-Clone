import React, { useState } from "react";
import './BoardTable.css'

function Board(props) {

      const TableBody = (props) => {


         const rows = props.clickData.map((row, index) => { 

        return (

              /*     <tr key={index}>
                     <td>{row.alphabet}</td>
                     <td> {row.alphabet}</td>
                     <td>{row.alphabet}</td>
                     <td> {row.alphabet}</td>
                     <td> {row.alphabet}</td>
                 </tr>  */
            <tbody>
                <tr key={index}>
                <tr><td>{row.clickData}</td><td>{row.clickData}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
                    <tr><td>{row.clickData}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
                    <tr><td>{row.clickData}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
                    <tr><td>{row.clickData}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
                    <tr><td>{row.clickData}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
                    <tr><td>{row.clickData}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>

                </tr>

            </tbody>
        )
            }) 

                 return <tbody>{rows}</tbody>; 

    }




    return (
        <div className='Body'>
            <div className="Table">
          {/*       <table className="tableBoxes">
                    <TableBody />
                </table> */}
                   <table className="tableBoxes" >

                    <tr><td>{props.clickData}</td><td>{props.handleClick}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
                    <tr><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
                    <tr><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
                    <tr><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
                    <tr><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
                    <tr><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>

                </table> 
            </div>
        </div>
    )
}

export default Board;