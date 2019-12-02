import React, { Component } from "react";

const FastFoodContext = React.createContext();

class FastFoodProvider extends Component {
	state = {
		foods: [],
	};
	componentDidMount() {
	}
	querySalad = () => {
		fetch("http://localhost:9000/food/salads")
			.then(data => data.json())
			.then(res => this.state.foods.push(res));
	};
	queryRice = () => {
		fetch("http://localhost:9000/food/rice")
			.then(data => data.json())
			.then(res => this.state.foods.push(res));
	};
	queryChicken = () => {
		fetch("http://localhost:9000/food/chickens")
			.then(data => data.json())
			.then(res => this.state.foods.push(res));
	};
	queryBurger = () => {
		fetch("http://localhost:9000/food/burger")
			.then(data => data.json())
			.then(res => this.state.foods.push(res));
	};
	querySalad = calories => {
		fetch("http://localhost:9000/food/salads/limit-calories/" + calories)
			.then(data => data.json())
			.then(res => this.state.foods.push(res));
	};
	queryChicken = calories => {
		fetch("http://localhost:9000/food/chickens/limit-calories/" + calories)
			.then(data => data.json())
			.then(res => this.state.foods.push(res));
	};
	queryRice = calories => {
		fetch("http://localhost:9000/food/rice/limit-calories/" + calories)
			.then(data => data.json())
			.then(res => this.state.foods.push(res));
	};
	queryBurger = calories => {
		fetch("http://localhost:9000/food/burgers/limit-calories/" + calories)
			.then(data => data.json())
			.then(res => this.state.foods.push(res));
	};
	

	render() {
		return (
			<FastFoodContext.Provider value={this.state}>
				{this.props.children}
			</FastFoodContext.Provider>
		);
	}
}

const FastFoodConsumer = FastFoodContext.Consumer;

export { FastFoodContext, FastFoodConsumer, FastFoodProvider };
