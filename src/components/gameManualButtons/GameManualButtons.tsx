import React from "react";
import './GameManualButtons.css';
import axios, {AxiosResponse} from "axios";
import {Backend} from "../../enums/Backend";
import {Colors} from "../../enums/Colors";
import {useDispatch, useSelector} from "react-redux";
import {ActionType} from "../../enums/ActionType";
import {BoardState} from "../../reducers/reducers";

const GameManualButtons: React.FC = () => {

    const dispatch = useDispatch();
    function playManual(color: Colors) {
        axios.get(Backend.IP + "play", {params: { color }})
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
        <div id={"gameManualButtons"}>
            { isFinished &&
                <div>
                    <div>Play Manual</div>
                    <div id={"colors"}>
                        <div data-testid="redButton" className={"colorButton"} id={"red"} onClick={() => {
                            playManual(Colors.Red)
                        }}></div>
                        <div data-testid="blueButton" className={"colorButton"} id={"blue"} onClick={() => {
                            playManual(Colors.Blue)
                        }}></div>
                        <div data-testid="greenButton" className={"colorButton"} id={"green"} onClick={() => {
                            playManual(Colors.Green)
                        }}></div>
                        <div data-testid="yellowButton" className={"colorButton"} id={"yellow"} onClick={() => {
                            playManual(Colors.Yellow)
                        }}></div>
                    </div>
                </div>
            }
        </div>

    );
}

export default GameManualButtons;
