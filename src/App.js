import Game from './components/game.jsx'
import {useEffect} from 'react'
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Tic-tac-toe"
      })
  return (
    <div className="App">
     <Game></Game>
    </div>
  );
}

export default App;
