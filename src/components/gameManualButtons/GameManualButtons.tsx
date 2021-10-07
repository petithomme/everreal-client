import React from "react";
import './GameManualButtons.css';
import axios, {AxiosResponse} from "axios";
import {Backend} from "../../enums/Backend";
import {Colors} from "../../enums/Colors";
import {useDispatch} from "react-redux";

const GameManualButtons: React.FC = () => {

    const dispatch = useDispatch();
    function playManual(color: Colors) {
        axios.get(Backend.IP + "play", {params: { color }})
            .then( (response: AxiosResponse) => {
                dispatch({type: "UPDATE", payload: response.data['data']});
                if ( response.data['done']) {
                    alert("You won !");
                }
            });
    }

    return (
        <div id={"gameManualButtons"}>
            <div>Play Manual</div>
            <div id={"colors"}>
                <div data-testid="redButton" className={"colorButton"} id={"red"} onClick={ () => {playManual(Colors.Red)}}></div>
                <div data-testid="blueButton" className={"colorButton"} id={"blue"} onClick={ () => {playManual(Colors.Blue)}}></div>
                <div data-testid="greenButton" className={"colorButton"} id={"green"} onClick={ () => {playManual(Colors.Green)}}></div>
                <div data-testid="yellowButton" className={"colorButton"} id={"yellow"} onClick={ () => {playManual(Colors.Yellow)}}></div>
            </div>
        </div>
    );
}

export default GameManualButtons;
