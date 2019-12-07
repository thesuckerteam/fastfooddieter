import React from "react";
import "./style.css";
import { MdNearMe } from 'react-icons/md';

export default function Home() {
	return (
		<div>
			<div class="header">
			<h2><MdNearMe/>    Endpoints:</h2>
			</div>
			<div class="container">
				GET: http://(url)/food/salads
			</div>
			<div class="container">
				GET: http://(url)/food/chickens
			</div>
			<div class="container">
				GET: http://(url)/food/rice
			</div>
			<div class="container">
				GET: http://(url)/food/burgers
			</div>
			<div class="container">
				GET: http://(url)/food/salads/limit-calories/:calories
			</div>
			<div class="container">
				GET: http://(url)/food/chickens/limit-calories/:calories
			</div>
			<div class="container">
				GET: http://(url)/food/rice/limit-calories/:calories
			</div>
			<div class="container">
				GET: http://(url)/food/burgers/limit-calories/:calories
			</div>
		</div>
	);
}