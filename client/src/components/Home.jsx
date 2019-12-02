import React from "react";
import { FastFoodConsumer } from "../context";

export default function Home() {
	return (
		<div>
			<div class="left_corner">
			<h2>Endpoints:</h2>
			</div>
			<div class="box_color">
				GET: http://(url)/food/salads
			</div>
			<div class="box_color">
				GET: http://(url)/food/chickens
			</div>
			<div class="box_color">
				GET: http://(url)/food/rice
			</div>
			<div class="box_color">
				GET: http://(url)/food/burgers
			</div>
			<div class="box_color">
				GET: http://(url)/food/salads/limit-calories/:calories
			</div>
			<div class="box_color">
				GET: http://(url)/food/chickens/limit-calories/:calories
			</div>
			<div class="box_color">
				GET: http://(url)/food/rice/limit-calories/:calories
			</div>
			<div class="box_color">
				GET: http://(url)/food/burgers/limit-calories/:calories
			</div>
		</div>
	);
}