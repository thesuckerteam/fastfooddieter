import React from "react";
import { FastFoodConsumer } from "../context";

export default function Home() {
	return (
		<FastFoodConsumer>
			{value => {
				const {
					average_parcel,
					average_weight,
					average_location,
					average_service,
					average_wl,
				} = value;
				return (
					<div>
						
					</div>
				);
			}}
		</FastFoodConsumer>
	);
}
