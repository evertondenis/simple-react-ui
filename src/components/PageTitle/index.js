import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './styled';

const PageTitle = ({ children }) => (
	<Title>
		<h5>{children}</h5>
	</Title>
);

PageTitle.propTypes = {
	children: PropTypes.node.isRequired
};

export default PageTitle;
