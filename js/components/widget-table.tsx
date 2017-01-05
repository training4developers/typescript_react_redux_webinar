import * as React from "react";

import {Widget} from "../models/widget";

export class WidgetTable extends React.PureComponent {

    static get propTypes() {

        return {
            refreshWidgets: React.PropTypes.func.isRequired,
            widgets: React.PropTypes.arrayOf(
                React.PropTypes.instanceOf((Widget))).isRequired,
        };
    }

    static get defaultProps() {
        return { widgets: [] };
    }

    render() {
        return <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Size</th>
                <th>Quantity</th>
            </tr>
            </thead>
            <tbody>
            {this.props.widgets.map(widget => <tr key={widget.id}>
                <td>{widget.name}</td>
                <td>{widget.color}</td>
                <td>{widget.size}</td>
                <td>{widget.quantity}</td>
            </tr>)}
            </tbody>
        </table>;
    }

    componentDidMount() {
        this.props.refreshWidgets();
    }
}
