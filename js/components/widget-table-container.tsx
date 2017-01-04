import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {refreshWidgets} from "../actions/refresh-widgets";
import {AppState} from "../app-state";
import {WidgetTable} from "../components/widget-table";

const mapStateToProps = (state: AppState) => ({
    widgets: state.widgets,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ refreshWidgets }, dispatch);

export const WidgetTableContainer =
    connect(mapStateToProps, mapDispatchToProps)(WidgetTable);