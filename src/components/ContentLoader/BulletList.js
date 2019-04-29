import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

const BulletList = (props, { width, height, speed }) => (
	<ContentLoader
		width={width}
		height={height}
		speed={speed}
		primaryColor="#f3f3f3"
		secondaryColor="#dcdcdc"
		{...props}>
		<circle cx="10" cy="20" r="8" />
		<rect x="25" y="15" rx="3" ry="3" width="100%" height="10" />
		<circle cx="10" cy="50" r="8" />
		<rect x="25" y="45" rx="3" ry="3" width="100%" height="10" />
		<circle cx="10" cy="80" r="8" />
		<rect x="25" y="75" rx="3" ry="3" width="100%" height="10" />
		<circle cx="10" cy="110" r="8" />
		<rect x="25" y="105" rx="3" ry="3" width="100%" height="10" />
		<circle cx="10" cy="140" r="8" />
		<rect x="25" y="135" rx="3" ry="3" width="100%" height="10" />
	</ContentLoader>
);

BulletList.defaultProps = {
	height: '160',
	width: '400',
	speed: 2
};

BulletList.propTypes = {
	height: PropTypes.string,
	width: PropTypes.string,
	speed: PropTypes.number
};

export default BulletList;
