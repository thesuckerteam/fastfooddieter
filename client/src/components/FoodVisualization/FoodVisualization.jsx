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
				return (
					<>
						<FoodHistogram
							title='Burger'
							labels={[
								"kfc pork burger",
								"kfc beef burger",
								"kfc fish burger",
								"mcdonald's pork burger",
								"mcdonald's beef burger",
								"mcdonald's fish burger",
							]}
							data={[330, 530, 290, 250, 320, 280]}
							salads={salads}
						/>

						<FoodHistogram
							title='Chicken'
							labels={[
								"kfc chicken wings",
								"kfc chicken strips",
								"kfc chicken drumsticks",
								"bonchon chicken wings",
								"bonchon chicken strips",
								"bonchon chicken drumsticks",
							]}
							data={[120, 220, 180, 100, 200, 160]}
							salads={salads}
						/>

						<FoodHistogram
							title='Salad'
							labels={[
								"bonchon caeser salad",
								"kfc tuna salad",
								"kfc side salad",
								"bonchon becon salad",
								"bonchon chicken salad",
							]}
							data={[60, 53, 55, 48, 30 ]}
							salads={salads}
						/>

						<FoodHistogram
							title='Rice'
							labels={[
								"kfc fried chicken rice",
								"kfc roasted chicken rice",
								"mcdonald fried chicken rice",
								"mcdonald roasted chicken rice",
							]}
							data={[530, 430, 490, 440]}
							salads={salads}
						/>
					</>
				);
			}}
		</FastFoodConsumer>
	);
}
