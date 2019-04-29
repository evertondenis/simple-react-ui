import React from 'react';
import PropTypes from 'prop-types';
import { StyledTable } from './styled';

const Table = props => <StyledTable {...props}>{props.children}</StyledTable>;

const TableHead = props => (
	<thead>
		<tr>{props.children}</tr>
	</thead>
);

const TableBody = ({ children }) => <tbody>{children}</tbody>;

TableHead.propTypes = {
	children: PropTypes.node.isRequired
};

TableBody.propTypes = {
	children: PropTypes.node.isRequired
};

Table.Head = TableHead;
Table.Body = TableBody;

export default Table;
