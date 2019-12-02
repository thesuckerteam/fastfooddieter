import React, { Component } from "react";

const FastFoodContext = React.createContext();

class FastFoodProvider extends Component {
	state = {
		average_parcel: [],
	};
	componentDidMount() {
	}
	queryAverageSendType = month => {
		fetch("http://localhost:5000/api/delivery/average/send-type/" + month)
			.then(data => data.json())
			.then(res => this.state.average_parcel.push(res));
	};
	queryAverageWeight = month => {
		fetch("http://localhost:5000/api/delivery/average/weight/" + month)
			.then(data => data.json())
			.then(res => this.state.average_weight.push(res));
	};
	queryAverageService = month => {
		fetch("http://localhost:5000/api/delivery/average/service/" + month)
			.then(data => data.json())
			.then(res => this.state.average_service.push(res));
	};
	queryAverageLocation = month => {
		fetch("http://localhost:5000/api/delivery/average/location/" + month)
			.then(data => data.json())
			.then(res => this.state.average_location.push(res));
	};
	queryAverageWeightLocation = month => {
		fetch("http://localhost:5000/api/delivery/average/weight-location/" + month)
			.then(data => data.json())
			.then(res => this.state.average_wl.push(res));
	};
	queryBranchCar = () => {
		fetch("http://localhost:5000/api/delivery/branch/car")
			.then(data => data.json())
			.then(res => this.state.branch_car.push(res));
	};
	queryBranchStaff = () => {
		fetch("http://localhost:5000/api/delivery/branch/staff")
			.then(data => data.json())
			.then(res => this.state.branch_staff.push(res));
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
