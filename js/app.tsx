import * as React from "react";
import * as ReactDOM from "react-dom";

import {appStore} from "./app-store";
import {WidgetTableContainer} from "./components/widget-table-container";

ReactDOM.render(<WidgetTableContainer store={appStore}/>, document.querySelector("main"));

