import React from "react";
import "./GameButtons.css";
import {useDispatch} from "react-redux";

const GameButtons: React.FC = () => {

    const dispatch = useDispatch();

    function startNewGame() {
        console.log("startGame");
        dispatch({ type: "UPDATE", payload:  [[2,2,2,2,2,2,2],
                                                    [2,2,2,2,2,2,2],
                                                    [1,1,1,1,1,1,1],
                                                    [1,1,1,1,1,1,1],
                                                    [1,1,1,1,1,1,1],
                                                    [1,1,1,1,1,1,1],
                                                    [1,1,1,1,1,1,1],
                                                    ], });
    }

    return (
        <div id={"gameButtons"}>
            <button className={"gameButton"} onClick={startNewGame}> NEW GAME</button>
            <button className={"gameButton"}> NEXT AUTO STEP</button>
            <button className={"gameButton"}> FULL AUTO</button>
        </div>
    );
}

export default GameButtons;
