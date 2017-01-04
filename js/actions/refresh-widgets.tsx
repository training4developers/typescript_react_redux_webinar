import { Action } from 'redux';
import { actionTypes } from '../action-types';
import { appStore } from '../app-store';

declare var fetch;

export interface WidgetAction extends Action {
	 widgets: any[]
}

const createRefreshWidgetsRequestAction: () => WidgetAction = () => ({
	type: actionTypes.REFRESH_WIDGETS_REQUEST,
	widgets: []
});

const createRefreshWidgetsDoneAction: (widgets: any[]) => WidgetAction = (widgets) => ({
	type: actionTypes.REFRESH_WIDGETS_DONE,
	widgets
});

export const refreshWidgets = () => {
	appStore.dispatch(createRefreshWidgetsRequestAction());
	fetch('http://localhost:3010/widgets')
		.then(res => res.json())
		.then(widgets => {
			appStore.dispatch(createRefreshWidgetsDoneAction(widgets));
		});
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;