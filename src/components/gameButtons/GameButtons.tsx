import React from "react";
import "./GameButtons.css";
import {useDispatch} from "react-redux";
import axios, {AxiosResponse} from "axios";
import {Backend} from "../../enums/Backend";

const GameButtons: React.FC = () => {

    const dispatch = useDispatch();

    function startNewGame(): void {
        const boardSize: string | null = prompt("Enter board size (max 15)", '6');
        const colorsNumber: string | null = prompt("Enter Number of color (max 4)", '4');
        const boardSizeValue = boardSize == null ? 6 : Math.min((parseInt(boardSize) || 6), 15);
        const colorsNumberValue = colorsNumber == null ? 4 : Math.min((parseInt(colorsNumber) || 4), 4);
        axios.get(Backend.IP+"startNewGame", {params: { size: boardSizeValue, colorsAmount: colorsNumberValue }})
            .then( (response: AxiosResponse) => {
                dispatch({type: "UPDATE", payload: response.data['data']});
            });
    }

    function nextAutoStep(): void {
        axios.get(Backend.IP + "autoPlay")
            .then( (response: AxiosResponse) => {
                dispatch({type: "UPDATE", payload: response.data['data']});
            });
    }

    function fullAuto(): void {
        axios.get(Backend.IP + "fullAutoPlay ")
            .then( (response: AxiosResponse) => {
                dispatch({type: "UPDATE", payload: response.data['data']});
            });
    }

    return (
        <div id="gameButtons">
            <button data-testid="newGame" className="gameButton" onClick={startNewGame}> NEW GAME</button>
            <button data-testid="nextAutoStep" className="gameButton" onClick={nextAutoStep}> NEXT AUTO STEP</button>
            <button data-testid="fullAuto" className="gameButton" onClick={fullAuto}> FULL AUTO</button>
        </div>
    );
}

export default GameButtons;
