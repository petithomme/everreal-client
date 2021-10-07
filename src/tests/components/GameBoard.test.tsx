import React from 'react';
import {renderWithRedux} from "../renderWithRedux";
import GameBoard from "../../components/gameBoard/GameBoard";

describe('Test Game Board', () => {

    it('Check board is present', () => {
        const {getByTestId} = renderWithRedux(<GameBoard />);
        expect(getByTestId("container")).toBeInTheDocument();
    });
});
