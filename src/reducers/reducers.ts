import { PayloadAction } from '@reduxjs/toolkit'
import {Colors} from "../enums/Colors";
import {ActionType} from "../enums/ActionType";

export interface BoardState {
    board: Colors[][];
    completed: boolean;
}

const initialState: BoardState = {
    board: [],
    completed: false,
};

export const boardReducer: any = (state: BoardState = initialState, action: PayloadAction) => {
    switch (action.type) {
        case ActionType.UPDATE: {
            return {...state, board: action.payload };
        }
        case ActionType.SET_COMPLETED: {
            return {...state, completed: action.payload };
        }
        default: {
            return state;
        }
    }
}
