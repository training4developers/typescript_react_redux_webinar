import {actionTypes} from "../action-types";
import {Widget} from "../models/widget";

const createRefreshWidgetsRequestAction = () => ({
    type: actionTypes.REFRESH_WIDGETS_REQUEST,
    widgets: [],
});

const createRefreshWidgetsDoneAction = widgets => ({
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
                dispatch(createRefreshWidgetsDoneAction(widgets.map(w => {
                    const widget = new Widget();
                    widget.id = w.id;
                    widget.name = w.name;
                    widget.description = w.description;
                    widget.color = w.color;
                    widget.size = w.size;
                    widget.quantity = w.quantity;
                    return widget;
                })));
            });
    };

};
