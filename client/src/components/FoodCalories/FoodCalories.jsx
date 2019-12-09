import React, { Component } from "react";
import { FastFoodConsumer } from "../../context";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "./style.css";
import FoodTable from "./FoodTable";

export default class FoodCalories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			foodTypes: ["burgers", "chickens", "salads", "rice"],
			typeName: "Select Food Type",
			inputText: "",
			food: [],
			renderTable: false,
		};
	}
	handleChange = event => {
		this.setState({
			inputText: event.target.value,
		});
	};

	queryFoodLimit = (foodName, calories) => {
		fetch(
			"http://localhost:9000/foods/" + foodName + "/limit-calories/" + calories
		)
			.then(data => data.json())
			.then(res => this.setState({ food: res }));
    };
    
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

					const FoodItems = this.state.foodTypes.map(item => {
						return (
							<Dropdown.Item
								as='button'
								onClick={() => this.setState({ typeName: item })}>
								{item}
							</Dropdown.Item>
						);
					});

					return (
						<div className='boxContainer'>
							<div className='inputGroup'>
								<DropdownButton variant='warning' title={this.state.typeName}>
									{FoodItems}
								</DropdownButton>

								<div className='input'>
									<input
										type='text'
										size='30'
										onChange={this.handleChange}
										placeholder='please insert number of calories'
									/>
								</div>
							</div>
							<div>
								<Button
									variant='secondary'
									size='lg'
									block
									onClick={() => {
										this.queryFoodLimit(
											this.state.typeName,
											this.state.inputText
										);
										this.setState({ renderTable: true });
									}}>
									Enter
								</Button>
							</div>
							{this.state.renderTable === true && (
								<FoodTable food={this.state.food} />
							)}
						</div>
					);
				}}
			</FastFoodConsumer>
		);
	}
}
