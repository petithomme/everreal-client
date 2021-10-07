import React from 'react';
import './App.css';
import GameButtons from './components/gameButtons/GameButtons';
import GameBoard from "./components/gameBoard/GameBoard";
import GameManualButtons from "./components/gameManualButtons/GameManualButtons";
import {useDispatch} from "react-redux";
import axios, {AxiosResponse} from "axios";
import {ActionType} from "./enums/ActionType";

function App() {
    GetIndex();
    return (
      <div className="App" key="App">
        <GameBoard/>
        <GameButtons/>
        <GameManualButtons />
      </div>
    );
}

export const GetIndex = () => {
    const dispatch = useDispatch();
    axios.get("http://51.38.127.87:3000/").then( (response: AxiosResponse) => {
        dispatch({type: ActionType.UPDATE, payload: response.data['data']});
        dispatch({type: ActionType.SET_COMPLETED, payload: response.data['done']});
    });
}

export default App;
