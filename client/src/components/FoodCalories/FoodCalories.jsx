import React, { Component } from "react";
import { FastFoodConsumer } from "../../context";
import Table from "react-bootstrap/Table";
import "./style.css";
import FoodTable from "./FoodTable";

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
			            rice,
                        
                    } = value;
					return (
						<div className="table">
							<FoodTable food={rice}/>
						</div>
					);
				}}
			</FastFoodConsumer>
		);
	}
}
