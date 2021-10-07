import React from 'react';
import {renderWithRedux} from "./renderWithRedux";
import App from "../App";

describe('Appli does not crash', () => {
  it('Basic run', () => {
      renderWithRedux(<App />);
  })
});



