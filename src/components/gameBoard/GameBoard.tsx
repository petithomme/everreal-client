import React from "react";
import {useSelector} from "react-redux";
import {BoardState} from "../../reducers/reducers";
import {Colors} from "../../enums/Colors";
import "./GameBoard.css";

const GameBoard: React.FC = () => {
    let rows: any;
    const board: Colors[][] = useSelector<BoardState, BoardState["board"]>(
        (state) => state.board
    );

    rows = getAllRows(board);
    const display = showAllRows(rows);
    return (
        <div id="container">
            { display }
        </div>
    );
}

const showAllRows = (rows: any[]) => {
    const result: any[] = [];
    rows.forEach( (row:any[]) => {
        result.push(<div className={"row"}>{row}</div>);
    });
    return result;
}

const getAllRows = (board: Colors[][] ) => {
    const rows: any[] = [];
    let row: any[] = [];
    board.forEach( (values: Colors[]) => {
        values.forEach( value => {
            row.push(<div className={Colors[value]}></div>);
        });
        rows.push(row);
        row = [];
    });
    return rows;
}

export default GameBoard;
