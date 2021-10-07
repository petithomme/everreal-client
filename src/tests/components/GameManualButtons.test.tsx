import React from 'react';
import {renderWithRedux} from "../renderWithRedux";
import GameManualButtons from "../../components/gameManualButtons/GameManualButtons";

describe('Test Manual Game Buttons', () => {

    it('Check buttons are present', () => {
        const {getByTestId} = renderWithRedux(<GameManualButtons />);
        expect(getByTestId("redButton")).toBeInTheDocument();
        expect(getByTestId("yellowButton")).toBeInTheDocument();
        expect(getByTestId("greenButton")).toBeInTheDocument();
        expect(getByTestId("blueButton")).toBeInTheDocument();
    });
});
