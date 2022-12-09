import './App.css';
import Navbar from './components/Navbar';
import BoardTable from './components/BoardTable';
import Keyboard from './components/Keyboard';
import Words from './components/Words';

function App() {
  return (
    <div className="App">
     <Keyboard/>
     <Words/>
    </div>
  );
}

export default App;
