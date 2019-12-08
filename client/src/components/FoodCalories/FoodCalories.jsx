import React, { Component } from "react";
import { FastFoodConsumer } from "../../context";
import "./style.css";

export default class FoodCalories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			renderTable: false,
		};
	}
	render() {
		return (
			<FastFoodConsumer>
				{value => {
					const {
						calories_salads,
                        calories_chickens,
                        calories_rice,
                        calories_burgers,
					} = value;
					return (
						<>
							<h1>helloworld</h1>
						</>
					);
				}}
			</FastFoodConsumer>
		);
	}
}
