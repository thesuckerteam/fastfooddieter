
import React from "react";
import { FastFoodConsumer } from "../context";

export default function FoodVisualization() {
	return (
		<FastFoodConsumer>
			{value => {
				const {

				} = value;
				return (
					<>
					</>
				);
			}}
		</FastFoodConsumer>
	);
}