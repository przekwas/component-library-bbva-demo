import React from 'react';
import Row from 'react-bootstrap/Row';

const MainLayout = ({ children }) => {
	return <Row className="justify-content-center">{children}</Row>;
};

export default MainLayout;
