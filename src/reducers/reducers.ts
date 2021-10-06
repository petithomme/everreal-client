import { PayloadAction } from '@reduxjs/toolkit'
import {Colors} from "../enums/Colors";

export interface BoardState {
    board: Colors[][];
}

const initialState = {
    board: [[1,1,1,1,1,1,1],
            [1,1,2,1,1,1,1],
            [1,3,1,0,1,1,1],
            [1,1,1,0,1,1,1],
            [1,1,0,1,1,1,1],
            [1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1],
            ],
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
