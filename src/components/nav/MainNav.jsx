import React from 'react';
import { FaPiggyBank, FaUserCircle } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

const MainNav = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
			<Navbar.Brand>
				<FaPiggyBank /> Bank NavBar Lol
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home">Country Roads</Nav.Link>
					<Nav.Link href="#link">Take Me Home</Nav.Link>
					<NavDropdown title="To The Place" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">I belong</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">West Virginia</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">mountain mama</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Take me home, country roads</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Navbar.Text>
					<FaUserCircle color="white" size="1.5rem" className="mr-1" />
					<a href="#login">Luke Przekwas</a>
				</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MainNav;
