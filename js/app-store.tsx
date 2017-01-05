import * as React from "react";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

import {widgetReducer} from "./reducers/widget-reducer";

export const appStore = createStore(widgetReducer, applyMiddleware(thunk));
