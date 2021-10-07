import { PayloadAction } from '@reduxjs/toolkit'
import {Colors} from "../enums/Colors";

export interface BoardState {
    board: Colors[][];
}

const initialState: BoardState = {
    board: [],
};

export const boardReducer: any = (state: BoardState = initialState, action: PayloadAction) => {
    switch (action.type) {
        case 'UPDATE': {
            return {...state, board: action.payload };
        }
        default: {
            return state;
        }
    }
}
