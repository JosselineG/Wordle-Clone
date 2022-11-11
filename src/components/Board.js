import React, { useState } from "react";
import './Board.css'

function Board() {

    const TableBody = (props) => { 
           

        const rows =  props.favData.map((row, index) => {
                       
            return(
                          
                <tr key={index}>
                    <td>{row.One}</td>
                    <td> {row.Two}</td>
                    <td>{row.Three}</td>
                    <td> {row.Four}</td>
                    <td> {row.Five}</td>
                </tr>

                
            )
        })
               
                    return <tbody>{rows}</tbody>;
    
    }

    return (
        <div className='Body'>
            <div className="Table">

                <table className="tableBoxes" >
                
                <tr><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
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