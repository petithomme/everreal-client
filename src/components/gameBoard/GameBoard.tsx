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
        <div data-testid="container" id="container" key="container">
            { display }
        </div>
    );
}

const showAllRows = (rows: any[]) => {
    const result: any[] = [];
    let rowId: number = 0;
    rows.forEach( (row:any[]) => {
        result.push(<div key={rowId} className={"row"}>{row}</div>);
        rowId++;
    });
    return result;
}

const getAllRows = (board: Colors[][] ) => {
    const rows: any[] = [];
    let row: any[] = [];
    let rowId: number = 0;
    board.forEach( (values: Colors[]) => {
        values.forEach( value => {
            row.push(<div key={rowId} className={Colors[value]}></div>);
            rowId++;
        });
        rows.push(row);
        row = [];
    });
    return rows;
}

export default GameBoard;
