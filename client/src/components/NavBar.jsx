import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Navbar, Nav, Button, FormControl, Form} from 'react-bootstrap';

export default class NavbarContainer extends Component {
	state = {
		isOpen: false,
	};
	handleToggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">Fast Food Dieter</Navbar.Brand>
				<Nav className="mr-auto">
				<Nav.Link href="/">APIs</Nav.Link>
				<Nav.Link href="/">Histogram</Nav.Link>
				</Nav>
				<Form inline>
				</Form>
			</Navbar>

		);
	}
}
