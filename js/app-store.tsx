import * as React from "react";
import {applyMiddleware, createStore, Store} from "redux";
import thunk from "redux-thunk";

import {AppState} from "./app-state";
import {widgetReducer} from "./reducers/widget-reducer";

export const appStore: Store<AppState> =
    createStore<AppState>(widgetReducer, applyMiddleware(thunk));
