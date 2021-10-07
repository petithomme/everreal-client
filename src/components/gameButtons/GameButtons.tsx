import React from "react";
import "./GameButtons.css";
import {useDispatch, useSelector} from "react-redux";
import axios, {AxiosResponse} from "axios";
import {Backend} from "../../enums/Backend";
import {ActionType} from "../../enums/ActionType";
import {BoardState} from "../../reducers/reducers";

const GameButtons: React.FC = () => {

    const dispatch = useDispatch();

    function startNewGame(): void {
        const boardSize: string | null = prompt("Enter board size (max 15)", '6');
        const colorsNumber: string | null = prompt("Enter Number of color (max 4)", '4');
        const boardSizeValue = boardSize == null ? 6 : Math.max(Math.min((parseInt(boardSize) || 6), 15), 2);
        const colorsNumberValue = colorsNumber == null ? 4 : Math.max(Math.min((parseInt(colorsNumber) || 4), 4), 2);
        axios.get(Backend.IP+"startNewGame", {params: { size: boardSizeValue, colorsAmount: colorsNumberValue }})
            .then( (response: AxiosResponse) => {
                dispatch({type: ActionType.UPDATE, payload: response.data['data']});
                dispatch({type: ActionType.SET_COMPLETED, payload: false});
            });
    }

    function nextAutoStep(): void {
        axios.get(Backend.IP + "autoPlay")
            .then( (response: AxiosResponse) => {
                dispatch({type: ActionType.UPDATE, payload: response.data['data']});
                if ( response.data['done']) {
                    alert("You won !");
                    dispatch({type: ActionType.SET_COMPLETED, payload: response.data['done']});
                }
            });
    }

    function fullAuto(): void {
        axios.get(Backend.IP + "fullAutoPlay ")
            .then( (response: AxiosResponse) => {
                dispatch({type: ActionType.UPDATE, payload: response.data['data']});
                if ( response.data['done']) {
                    alert("You won !");
                    dispatch({type: ActionType.SET_COMPLETED, payload: response.data['done']});
                }
            });
    }

    const isFinished: boolean = useSelector<BoardState, BoardState["completed"]>(
        (state) => !state.completed
    );

    return (
        <div id="gameButtons">
            <button data-testid="newGame" className="gameButton" onClick={startNewGame}> NEW GAME</button>
            { isFinished &&
                <button data-testid="nextAutoStep" className="gameButton" onClick={nextAutoStep}> NEXT AUTO STEP</button>
            }
            { isFinished &&
                <button data-testid="fullAuto" className="gameButton" onClick={fullAuto}> FULL AUTO</button>
            }
        </div>
    );
}

export default GameButtons;
