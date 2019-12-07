import React from "react";
import { FastFoodConsumer } from "../../context";
import FoodHistogram from "./FoodHistogram";
import "./style.css";

export default function FoodVisualization() {
	return (
		<FastFoodConsumer>
			{value => {
				const {
					salads,
					rice,
					chickens,
					burgers,
					calories_salads,
					calories_chickens,
					calories_rice,
					calories_burgers,
				} = value;
				console.log(burgers.map(burger => burger.name))
				console.log(burgers.map(burger => burger.calories))
				return (
					<>
						<FoodHistogram
							title='Burger'
							name={burgers.map(burger => burger.name)}
							calories={burgers.map(burger => burger.calories)}
						/>
						<FoodHistogram
							title='Chicken'
							name={[
								"kfc chicken wings",
								"kfc chicken strips",
								"kfc chicken drumsticks",
								"bonchon chicken wings",
								"bonchon chicken strips",
								"bonchon chicken drumsticks",
							]}
							calories={[120, 220, 180, 100, 200, 160]}
						/>

						<FoodHistogram
							title='Salad'
							name={[
								"bonchon caeser salad",
								"kfc tuna salad",
								"kfc side salad",
								"bonchon becon salad",
								"bonchon chicken salad",
							]}
							calories={[60, 53, 55, 48, 30 ]}
						/>

						<FoodHistogram
							title='Rice'
							name={[
								"kfc fried chicken rice",
								"kfc roasted chicken rice",
								"mcdonald fried chicken rice",
								"mcdonald roasted chicken rice",
							]}
							calories={[530, 430, 490, 440]}
						/>
					</>
				);
			}}
		</FastFoodConsumer>
	);
}
