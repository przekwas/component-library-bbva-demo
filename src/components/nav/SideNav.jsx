import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import SideNavList from './SideNavList';

const SideNav = () => {
	return (
		<Col md={2}>
			<SideNavList>
				<p className="text-center">Links</p>
				<Nav.Link>Home</Nav.Link>
				<Nav.Link>Profile</Nav.Link>
				<Nav.Link>Somewhere Else</Nav.Link>
				<Nav.Link>Elsewhere</Nav.Link>
			</SideNavList>
			<SideNavList>
				<p className="text-center">Add Products</p>
				<Nav.Link>Product</Nav.Link>
				<Nav.Link>Other Product</Nav.Link>
			</SideNavList>
			<SideNavList>
				<p className="text-center">Settings</p>
				<Nav.Link>Personal</Nav.Link>
				<Nav.Link>Address</Nav.Link>
				<Nav.Link>Password</Nav.Link>
				<Nav.Link>Accounts</Nav.Link>
			</SideNavList>
		</Col>
	);
};

export default SideNav;
