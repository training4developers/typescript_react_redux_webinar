import { Action } from "redux";

import {actionTypes} from "../action-types";
import {Widget} from "../models/widget";

declare var fetch;

export interface WidgetAction extends Action {
	widgets: Widget[];
}

const createRefreshWidgetsRequestAction: () => WidgetAction =
	() => ({
    type: actionTypes.REFRESH_WIDGETS_REQUEST,
    widgets: [],
	});

const createRefreshWidgetsDoneAction: (widget: Widget[]) => WidgetAction =
	(widgets: Widget[]) => ({
			type: actionTypes.REFRESH_WIDGETS_DONE,
			widgets,
	});

export const refreshWidgets = () => {

    return (dispatch, getState) => {

        dispatch(createRefreshWidgetsRequestAction());

        // return promise so that when invoked in the component,
        // subsequent operations can be chained off of it
        return fetch("http://localhost:3010/widgets")
            .then(res => res.json())
            .then(widgets => {

								const widgetModels = widgets.map(w => {
                    const widget = new Widget();
                    widget.id = w.id;
                    widget.name = w.name;
                    widget.description = w.description;
                    widget.color = w.color;
                    widget.size = w.size;
                    widget.quantity = w.quantity;
                    return widget;
                });

                dispatch(createRefreshWidgetsDoneAction(widgetModels));

								return widgetModels;
            });
    };

};
