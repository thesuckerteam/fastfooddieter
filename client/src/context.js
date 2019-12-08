import React, { Component } from "react";

const FastFoodContext = React.createContext();

class FastFoodProvider extends Component {

	constructor(props) {
		super(props);
		this.state = {
			salads: [],
			rice: [],
			chickens: [],
			burgers: [],
			calories_salads: [],
			calories_chickens: [],
			calories_rice: [],
			calories_burgers: [],
			loadingBurger: true,
			loadingChicken: true,
			loadingSalad: true,
			loadingRice: true,
		};
	  }
	
	componentDidMount() {
        // this.queryBurger();
        this.queryRice();
        // this.queryChicken();
		// this.querySalad()
    }
	querySalad = () => {
		fetch("http://localhost:9000/foods/salads")
			.then(data => data.json())
			.then(res => this.setState({salads: res, loadingSalad: false}));
	};
	queryRice = () => {
		fetch("http://localhost:9000/foods/rice")
			.then(data => data.json())
			.then(res => this.setState({rice: res, loadingRice: false}));
	};
	queryChicken = () => {
		fetch("http://localhost:9000/foods/chickens")
			.then(data => data.json())
			.then(res => this.setState({chickens: res, loadingChicken: false}));
	};
	queryBurger = () => {
		fetch("http://localhost:9000/foods/burgers")
			.then(data => data.json())
			.then(res => this.setState({burgers: res, loadingBurger: false}))
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
			.then(res => this.setState({calories_burgers: res}));
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

export { FastFoodContext, FastFoodConsumer, FastFoodProvider};
