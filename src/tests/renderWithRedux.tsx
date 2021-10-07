import { createStore } from "@reduxjs/toolkit";
import {boardReducer} from "../reducers/reducers";
import {Provider} from "react-redux";
import {render} from "@testing-library/react";

export const renderWithRedux = ( component: any,  { store = createStore(boardReducer)} = {} ) =>
    {
        return {
            ...render(<Provider store={store}> { component} </Provider>)
        };
    }
