import React from "react";
import './Navbar.css'
import Switch from '@mui/material/Switch';

function Navbar(props) {

     //NEED TO DO: if in dark mode and we restart the board table the board shouldn't change back to lightmode


    return (
    
        <nav className="NavBar">

            <div className='Title'>
                <h1>Wordle ESP</h1>
            </div>

            <div className="switch">
 
                <Switch
                    checked={props.theme === 'darkMode'}
                    onChange={props.toggleTheme}       
                    color="default" 
                    style={{color: props.theme === 'darkMode'
                        ? "black"
                        : "white",
                    }}
                />

            </div>

        </nav>
     
    )
}

export default Navbar;