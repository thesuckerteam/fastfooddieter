import React from "react";
import { FastFoodConsumer } from "../context";

export default function Home() {
	return (
		<FastFoodConsumer>
			{value => {
				const {
                    food,
				} = value;
				return (
					<div>
						{food}
					</div>
				);
			}}
		</FastFoodConsumer>
	);
}
