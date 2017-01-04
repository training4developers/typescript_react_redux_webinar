import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { WidgetTableContainer } from './components/widget-table-container';
import { appStore } from './app-store';
import { refreshWidgets } from './actions/refresh-widgets';


ReactDOM.render(<WidgetTableContainer store={appStore} />, document.querySelector('main'));

refreshWidgets();