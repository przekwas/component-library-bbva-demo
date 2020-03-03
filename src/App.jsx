import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/shared/Header';
import MainLayout from './components/layout/MainLayout';
import ProfileCard from './components/card/ProfileCard';
import Transactions from './components/transactions/Transactions';
import MainNav from './components/nav/MainNav';
import SideNav from './components/nav/SideNav';

const App = () => {
	return (
		<>
			<MainNav />
			<Container>
				<Header />
				<MainLayout>
					<ProfileCard />
					<Transactions />
					<SideNav />
				</MainLayout>
			</Container>
		</>
	);
};

export default App;