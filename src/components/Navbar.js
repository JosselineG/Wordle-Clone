import React from "react";
import './Navbar.css'
import Switch from '@mui/material/Switch';

function Navbar(props) {


    return (
    
        <nav className="NavBar">

            <div className='Title'>
                <h1>Wordle ESP</h1>
            </div>

            <div className="switch">
 
                <Switch
                    checked={props.theme === 'darkMode'}
                    onChange={props.toggleTheme}        
                    style={{backgroundColor: "darkMode"
                        ? "black"
                        : "white"}}
                />

            </div>

        </nav>
     
    )
}

export default Navbar;