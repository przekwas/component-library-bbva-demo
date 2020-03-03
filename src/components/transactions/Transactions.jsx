import React from 'react';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import TransactionRow from './TransactionRow';

const Transactions = () => {
	return (
		<Col md={7}>
			<Table hover responsive className="text-center">
				<thead>
					<tr>
						<th>Account</th>
						<th>Type</th>
						<th>Posted Balance</th>
						<th>Available Balance</th>
					</tr>
				</thead>
				<tbody>
					{[...Array(8).keys()].map(num => (
						<TransactionRow key={num} />
					))}
				</tbody>
			</Table>
		</Col>
	);
};

export default Transactions;
