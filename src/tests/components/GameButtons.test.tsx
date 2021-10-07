import React from 'react';
import {renderWithRedux} from "../renderWithRedux";
import GameButtons from "../../components/gameButtons/GameButtons";

describe('Test Game Buttons', () => {

    it('Check buttons are present', () => {
        const {getByTestId} = renderWithRedux(<GameButtons />);
        expect(getByTestId("newGame")).toBeInTheDocument();
        expect(getByTestId("nextAutoStep")).toBeInTheDocument();
        expect(getByTestId("fullAuto")).toBeInTheDocument();
    });
});
