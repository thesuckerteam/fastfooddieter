import React from "react";
import "./style.css";
import { MdNearMe } from 'react-icons/md';

export default function Home() {
	return (
		<div>
			<div className="header">
			<h2><MdNearMe/>    Endpoints:</h2>
			</div>
			<div className="container">
				GET: http://(url)/food/salads
			</div>
			<div className="container">
				GET: http://(url)/food/chickens
			</div>
			<div className="container">
				GET: http://(url)/food/rice
			</div>
			<div className="container">
				GET: http://(url)/food/burgers
			</div>
			<div className="container">
				GET: http://(url)/food/salads/limit-calories/:calories
			</div>
			<div className="container">
				GET: http://(url)/food/chickens/limit-calories/:calories
			</div>
			<div className="container">
				GET: http://(url)/food/rice/limit-calories/:calories
			</div>
			<div className="container">
				GET: http://(url)/food/burgers/limit-calories/:calories
			</div>
		</div>
	);
}