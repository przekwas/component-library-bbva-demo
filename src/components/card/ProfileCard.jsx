import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const ProfileCard = () => {
	return (
		<Col md={3}>
			<Card className="shadow-sm">
				<Card.Img src={require('../../assets/profile.jpg')} alt="profile" />
				<Card.Body>
					<Card.Title>Luke Przekwas</Card.Title>
					<Card.Text>
						When I'm not coding I'm practicing Super Smash. Bros Melee{' '}
						<span role="img" aria-label="video game">
							🎮
						</span>{' '}
						or playing World of Warcraft{' '}
						<span role="img" aria-label="crossed swords">
							⚔️
						</span>{' '}
						classic!
					</Card.Text>
					<Card.Text className="d-flex flex-wrap justify-content-start">
                        <span className="badge badge-dark badge-pill my-1 mr-1">#Developer</span>
                        <span className="badge badge-dark badge-pill my-1 mr-1">#FoxMains</span>
                        <span className="badge badge-dark badge-pill my-1 mr-1">#HolyPaladins</span>
                    </Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default ProfileCard;
