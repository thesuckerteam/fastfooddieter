import React from "react";
import loadingGif from "./images/loading.gif";
import "./style.css";

export default function Loading({ name }) {
	return (
		<div className='loadingBox'>
			<h4 className='loadingTitle'>Loading {name}...</h4>
			<img src={loadingGif} height='150' width='150' />
		</div>
	);
}
