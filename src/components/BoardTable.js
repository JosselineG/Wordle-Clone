import React, { useState } from "react";
import './BoardTable.css'


function BoardTable(props){
   

/*     const [row, setRow] = useState 
    ([props.clickData, props.clickData, props.clickData, props.clickData, props.clickData,
        props.clickData, props.clickData, props.clickData, props.clickData, props.clickData,
    props.clickData, props.clickData, props.clickData, props.clickData, props.clickData, 
    props.clickData, props.clickData, props.clickData, props.clickData,props.clickData, 
    props.clickData, props.clickData, props.clickData, props.clickData, props.clickData, 
    props.clickData,props.clickData,props.clickData,props.clickData,props.clickData]) */
/*     
  
       const TableBody = (props) => {

        console.log('This is coming from Props', props.clickData)

         const rows = row.map((row, index) => { 

        return (

                   
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

 
   */ 


   /*     const BoardTable = (props) => {
            const { clickData, clickId } = props; */
    return (
        <div className='Body'>
            <div className="Table">
              {/*    <table className="tableBoxes">
                    <TableBody clickData={clickData} clickId={clickId} />
                </table>  */} 
                 <table className="tableBoxes" >

    

                   <tr>


                    <tr className="row1"><td id="1">{props.clickData}</td><td id="2">{props.clickData}</td><td  id="3">{props.clickData}</td><td  id="4">{props.clickData}</td><td  id="5">{props.clickData}</td></tr>
                    <tr><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
                    <tr><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
                    <tr><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
                    <tr><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
                    <tr><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td></tr>
                   
                  

                    </tr>
                </table>   
            </div>
        </div>
    )
            
}

export default BoardTable;