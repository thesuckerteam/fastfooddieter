import React from "react";
import { FastFoodConsumer } from "../../context";
import FoodHistogram from "./FoodHistogram";
import "./style.css";
import Loading from "../Loading/Loading";

export default function FoodVisualization() {
	return (
		<FastFoodConsumer>
			{value => {
				const {
					salads,
					rice,
					chickens,
					burgers,
					loadingBurger,
					loadingChicken,
					loadingSalad,
					loadingRice,
				} = value;
				return (
					<>
						{loadingBurger === false ? 
							<FoodHistogram
								title='Burger'
								name={burgers}
							/> : <Loading name="Burger"/>
						}
						{loadingChicken === false ? 
							<FoodHistogram
								title='Chicken'
								name={chickens}
							/> : <Loading name="Chicken"/>
						}
						{loadingSalad === false ? 
							<FoodHistogram
								title='Salad'
								name={salads}
							/> : <Loading name="Salad"/>
						}
						{loadingRice === false ? 
							<FoodHistogram
								title='Rice'
								name={rice}
							/> : <Loading name="Rice"/>
						}	
					</>
				);
			}}
		</FastFoodConsumer>
	);
}
