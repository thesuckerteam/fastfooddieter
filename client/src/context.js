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
		this.queryBurger();
		this.queryRice();
		this.queryChicken();
		this.querySalad();
	}
	
	querySalad = () => {
		fetch("http://localhost:9000/foods/salads")
			.then(data => data.json())
			.then(res => this.setState({ salads: res, loadingSalad: false }));
	};
	queryRice = () => {
		fetch("http://localhost:9000/foods/rice")
			.then(data => data.json())
			.then(res => this.setState({ rice: res, loadingRice: false }));
	};
	queryChicken = () => {
		fetch("http://localhost:9000/foods/chickens")
			.then(data => data.json())
			.then(res => this.setState({ chickens: res, loadingChicken: false }));
	};
	queryBurger = () => {
		fetch("http://localhost:9000/foods/burgers")
			.then(data => data.json())
			.then(res => this.setState({ burgers: res, loadingBurger: false }));
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
