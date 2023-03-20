import './App.css';
import React, { useState} from 'react'
import Keyboard from './components/Keyboard';
import Navbar from './components/Navbar';

import { createContext } from "react";


export const ThemeContext = createContext(null);


function App() {


  const [theme, setTheme] = useState("lightMode");

  const toggleTheme = () => {
    //current theme we wanted to be equal to conditional operation if current is light we will switch to dark
    setTheme((curr) => (curr === "lightMode" ? "darkMode" : "lightMode"));
  }


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      <div className="App" id={theme}>
        <Navbar  theme={theme} toggleTheme={toggleTheme}/>
        <Keyboard />

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
