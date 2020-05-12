import React from 'react';
import Item from './Item';
import Row from './Row';
import uuid from 'react-uuid';



export default class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
	}

	componentDidMount() {
		const temp = [];
		temp.push(new Item('Milk', 0.5, 15));
		temp.push(new Item('Tea', 3, 10));
		temp.push(new Item('Coffee', 4, 12));
		this.setState({
			items: temp
		})
	}

	render() {
		return (
			<>
				<h3>Shopping list</h3>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Amount</th>

						</tr>
					</thead>
					<tbody>
							{this.state.items.map(item => (
							<Row key={uuid()} item={item} />
						))}
					</tbody>
				</table>
			</>
		);
	}
}
