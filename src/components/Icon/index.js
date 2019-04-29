import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './styled';

const Icon = ({ className, icon, hasAction, size, color, padding }) => {
	return (
		<StyledIcon
			size={size}
			color={color}
			className={className}
			padding={padding}
			hasAction={hasAction}>
			{icon}
		</StyledIcon>
	);
};

Icon.defaultProps = {
	size: '1.5rem',
	color: 'rgba(0, 0, 0, 0.5)',
	className: '',
	padding: '0',
	hasAction: false
};

Icon.propTypes = {
	size: PropTypes.string,
	color: PropTypes.string,
	className: PropTypes.string,
	padding: PropTypes.string,
	hasAction: PropTypes.bool
};

export default Icon;
