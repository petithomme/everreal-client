import React from "react";
import './GameManualButtons.css';

const GameManualButtons: React.FC = () => {
    return (
        <div id={"gameManualButtons"}>
            <div>Play Manual</div>
            <div id={"colors"}>
                <div className={"colorButton"} id={"red"}></div>
                <div className={"colorButton"} id={"blue"}></div>
                <div className={"colorButton"} id={"green"}></div>
                <div className={"colorButton"} id={"yellow"}></div>
            </div>
        </div>
    );
}

export default GameManualButtons;
