import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class FoodHistogram extends Component {
	constructor(props) {
		super(props);
		this.state = {
			labels: this.props.name.map(element => element.name),
			datasets: [
				{
					label: "Calories",
					data: this.props.name.map(element => element.calories),
					backgroundColor: "#F7D679",
				},
			],
		};
	}
	render() {
		return (
			<div className='center'>
				<div className='title'>
					<h3>{this.props.title}</h3>
				</div>
				<div className='bar-chart'>
					<Bar
						height='50%'
						data={{
							labels: this.state.labels,
							datasets: this.state.datasets,
						}}
					/>
				</div>
				<br />
			</div>
		);
	}
}
