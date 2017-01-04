import * as React from 'react';
import { createStore, Store, Action, Reducer } from 'redux';
import { AppState } from './app-state';
import { widgetReducer } from './reducers/widget-reducer';

export const appStore: Store<AppState> = createStore<AppState>(widgetReducer);