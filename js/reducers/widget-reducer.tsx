import {actionTypes} from "../action-types";

export const widgetReducer = (state = {widgets: []}, action) => {

    switch (action.type) {
        case actionTypes.REFRESH_WIDGETS_REQUEST:
            return Object.assign({}, state, {widgets: []});
        case actionTypes.REFRESH_WIDGETS_DONE:
            return Object.assign({}, state, {widgets: action.widgets});
        default:
            return state;
    }

};
