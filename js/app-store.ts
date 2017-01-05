import * as React from "react";
import {applyMiddleware, createStore, Store} from "redux";
import thunk from "redux-thunk";

import {widgetReducer} from "./reducers/widget-reducer";
import {AppState} from "./app-state";

export const appStore: Store<AppState> =
	createStore(widgetReducer, applyMiddleware(thunk));
