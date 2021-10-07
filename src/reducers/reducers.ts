import { PayloadAction } from '@reduxjs/toolkit'
import {Colors} from "../enums/Colors";
import {ActionType} from "../enums/ActionType";

export interface BoardState {
    board: Colors[][];
}

const initialState: BoardState = {
    board: [],
};

export const boardReducer: any = (state: BoardState = initialState, action: PayloadAction) => {
    switch (action.type) {
        case ActionType.UPDATE: {
            return {...state, board: action.payload };
        }
        default: {
            return state;
        }
    }
}
