import * as React from 'react';
import { Store } from 'redux';
import { WidgetTable } from './widget-table';
import { AppState } from '../app-state';

export interface WidgetTableContainerProps {
	store: Store<AppState>
}

export interface WidgetTableContainerState {
	widgets: any[]
}

export class WidgetTableContainer extends React.Component<WidgetTableContainerProps, WidgetTableContainerState> {

	private unsubscribe: Function;

	constructor(props) {
		super(props);

		this.state = {
			widgets: []
		};
	}

	componentDidMount() {

		this.unsubscribe = this.props.store.subscribe(() => {
			this.setState({
				widgets: this.props.store.getState().widgets
			});
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {

		return <WidgetTable widgets={this.state.widgets} />;

	}

}