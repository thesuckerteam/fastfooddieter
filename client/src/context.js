import React, { Component } from "react";

const FastFoodContext = React.createContext();

class FastFoodProvider extends Component {
	state = {
        salads: [],
        rice: [],
        chickens: [],
        burger: [],
        calories_salads: [],
        calories_chickens: [],
        calories_rice: [],
        calories_burgers: [],
	};
	componentDidMount() {}
	querySalad = () => {
		fetch("http://localhost:9000/food/salads")
			.then(data => data.json())
			.then(res => this.state.salads.push(res));
	};
	queryRice = () => {
		fetch("http://localhost:9000/food/rice")
			.then(data => data.json())
			.then(res => this.state.rice.push(res));
	};
	queryChicken = () => {
		fetch("http://localhost:9000/food/chickens")
			.then(data => data.json())
			.then(res => this.state.chickens.push(res));
	};
	queryBurger = () => {
		fetch("http://localhost:9000/food/burger")
			.then(data => data.json())
			.then(res => this.state.burger.push(res));
	};
	querySalad = calories => {
		fetch("http://localhost:9000/food/salads/limit-calories/" + calories)
			.then(data => data.json())
			.then(res => this.state.calories_salads.push(res));
	};
	queryChicken = calories => {
		fetch("http://localhost:9000/food/chickens/limit-calories/" + calories)
			.then(data => data.json())
			.then(res => this.state.calories_chickens.push(res));
	};
	queryRice = calories => {
		fetch("http://localhost:9000/food/rice/limit-calories/" + calories)
			.then(data => data.json())
			.then(res => this.state.calories_rice.push(res));
	};
	queryBurger = calories => {
		fetch("http://localhost:9000/food/burgers/limit-calories/" + calories)
			.then(data => data.json())
			.then(res => this.state.calories_burgers.push(res));
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
