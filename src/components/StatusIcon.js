import React from 'react';
import { Icon } from './';

const StatusIcon = ({ status }) => {
	return {
		CLOSE: <Icon className="material-icons" icon="mail" hasAction />,
		OPEN: <Icon className="material-icons" icon="drafts" hasAction />
	}[status];
};

export default StatusIcon;
