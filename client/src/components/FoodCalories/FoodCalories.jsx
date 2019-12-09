import React, { Component } from "react";
import { FastFoodConsumer } from "../../context";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Loading from "../../components/Loading/Loading";
import Alert from "react-bootstrap/Alert";
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
			loadingFood: true,
			alertPop: false,
		};
	}

	handleChange = event => {
		this.setState({
			inputText: event.target.value,
		});
	};

	handleEnterClick = () => {
		if (this.state.typeName === "Select Food Type") {
			this.setState({ alertPop: true });
		} else {
			this.queryFoodLimit(this.state.typeName, this.state.inputText);
			this.setState({ renderTable: true });
		}
	};

	queryFoodLimit = (foodName, calories) => {
		fetch(
			"http://localhost:9000/foods/" + foodName + "/limit-calories/" + calories
		)
			.then(data => data.json())
			.then(res => this.setState({ food: res, loadingFood: false }));
	};

	render() {
		const FoodItems = this.state.foodTypes.map(item => {
			return (
				<Dropdown.Item
					as='button'
					onClick={() => this.setState({ typeName: item , alertPop: false})}>
					{item}
				</Dropdown.Item>
			);
		});

		return (
			<div className='boxContainer'>
				{this.state.alertPop === true && (
					<Alert variant='danger'>Please select type of food</Alert>
				)}

				<div className='formBox'>
					<div className='inputGroup'>
						<DropdownButton variant='warning' title={this.state.typeName}>
							{FoodItems}
						</DropdownButton>

							<input className='input'
								type='text'
								onChange={this.handleChange}
								placeholder='please insert number of calories'
							/>
					</div>
						<Button
							variant='secondary'
							size='lg'
							block
							onClick={this.handleEnterClick}>
							Enter
						</Button>
				</div>

				{this.state.renderTable === true &&
					(this.state.loadingFood === true ? (
						<Loading name='Data' />
					) : (
						<FoodTable food={this.state.food} />
					))}
			</div>
		);
	}
}
