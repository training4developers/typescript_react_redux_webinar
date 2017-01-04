import * as React from 'react';

interface WidgetTableProps {
	widgets: any[]
}

export class WidgetTable extends React.Component<WidgetTableProps, {}> {
	
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

}