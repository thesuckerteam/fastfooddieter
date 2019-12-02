import React from "react";
import { FastFoodConsumer } from "../../context";
import Navbar from "../NavBar";
import FoodHistogram from "./FoodHistogram";

export default function FoodVisualization() {
	return (
		<FastFoodConsumer>
			{value => {
				const {
					salads,
					rice,
					chickens,
					burger,
					calories_salads,
					calories_chickens,
					calories_rice,
					calories_burgers,
				} = value;
				return (
				<>
					<Navbar/>
					<FoodHistogram/>
				</>
				);
			}}
		</FastFoodConsumer>
	);
}
