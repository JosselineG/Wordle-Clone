import './App.css';
import Navbar from './components/Navbar';
import Board from './components/Board';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Board/>
     <Keyboard/>
    </div>
  );
}

export default App;
