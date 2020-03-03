import React from 'react';
import Nav from 'react-bootstrap/Nav';

const SideNavList = ({ children }) => {
	return (
		<Nav defaultActiveKey="/home" className="flex-column border rounded shadow-sm mb-3">
			{children}
		</Nav>
	);
};

export default SideNavList;
