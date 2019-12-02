import React, { Component } from "react";

const FastFoodContext = React.createContext();

class FastFoodProvider extends Component {
	state = {
        salads: [],
        rice: [],
        chickens: [],
        burgers: [],
        calories_salads: [],
        calories_chickens: [],
        calories_rice: [],
        calories_burgers: [],
	};
	componentDidMount() {
        this.queryBurger();
        this.queryRice();
        this.queryChicken();
        this.querySalad();
        this.querySaladLimit();
        this.queryChickenLimit();
        this.queryBurgerLimit();
        this.queryRiceLimit();
    }
	querySalad = () => {
		fetch("http://localhost:9000/foods/salads")
			.then(data => data.json())
            .then(res => this.state.salads.push(res));
        console.log(123)
	};
	queryRice = () => {
		fetch("http://localhost:9000/foods/rice")
			.then(data => data.json())
			.then(res => this.state.rice.push(res));
	};
	queryChicken = () => {
		fetch("http://localhost:9000/foods/chickens")
			.then(data => data.json())
			.then(res => this.state.chickens.push(res));
	};
	queryBurger = () => {
		fetch("http://localhost:9000/foods/burgers")
			.then(data => data.json())
			.then(res => this.state.burgers.push(res));
	};
	querySaladLimit = calories => {
		fetch("http://localhost:9000/foods/salads/limit-calories/" + calories)
			.then(data => data.json())
			.then(res => this.state.calories_salads.push(res));
	};
	queryChickenLimit = calories => {
		fetch("http://localhost:9000/foods/chickens/limit-calories/" + calories)
			.then(data => data.json())
			.then(res => this.state.calories_chickens.push(res));
	};
	queryRiceLimit = calories => {
		fetch("http://localhost:9000/foods/rice/limit-calories/" + calories)
			.then(data => data.json())
			.then(res => this.state.calories_rice.push(res));
	};
	queryBurgerLimit = calories => {
		fetch("http://localhost:9000/foods/burgers/limit-calories/" + calories)
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
