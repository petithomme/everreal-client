import { createStore } from "redux";
import {boardReducer} from "../reducers/reducers";

export const store = createStore(boardReducer);
