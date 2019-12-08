import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "./style.css";

export default class FoodTable extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		const foodList = this.props.food.map((food,index) => {
			return (
				<tr>
                    <td>{index+1}</td>
					<td>{food.name}</td>
					<td>{food.calories}</td>
				</tr>
			);
		});
		return (
			<div className="table">
				<Table responsive>
					<thead>
						<tr>
							<th>Number</th>
							<th>Food Name</th>
							<th>Calories</th>
						</tr>
					</thead>
					<tbody>{foodList}</tbody>
				</Table>
			</div>
		);
	}
}
