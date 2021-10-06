import React from 'react';
import './App.css';
import GameButtons from './components/gameButtons/GameButtons';
import GameBoard from "./components/gameBoard/GameBoard";
import GameManualButtons from "./components/gameManualButtons/GameManualButtons";

function App() {
  return (
    <div className="App">
      <GameBoard/>
      <GameButtons />
      <GameManualButtons />
    </div>
  );
}

export default App;
