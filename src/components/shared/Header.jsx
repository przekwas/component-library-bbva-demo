import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Header = () => {
	return (
        <Jumbotron className="shadow-sm mt-2">
            <div className="display-4">Totally BBVA <span role="img" aria-label="ok hand">👌</span></div>
        </Jumbotron>
    );
};

export default Header;
