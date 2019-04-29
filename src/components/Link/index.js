import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { StyledLink } from './styled';

class Link extends PureComponent {
	state = { id: this.props.uid };

	onClick = event => {
		const { href, onClick, disabled } = this.props;

		if (!disabled && !isEmpty(href)) {
			return window.location.replace(href);
		}

		if (onClick && !disabled) {
			onClick(event);
		}

		event.preventDefault();
		event.stopPropagation();
	};

	render() {
		const { href, children, className, disabled, tabIndex } = this.props;
		const { id } = this.state;

		return (
			<StyledLink
				disabled={disabled}
				href={href}
				id={id}
				className={className}
				onClick={this.onClick}
				tabIndex={tabIndex}>
				{children}
			</StyledLink>
		);
	}
}

Link.defaultProps = {
	href: '',
	className: '',
	id: '',
	tabIndex: '',
	disabled: false,
	children: '',
	onClick: () => null
};

Link.propTypes = {
	id: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	href: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	tabIndex: PropTypes.string
};

export default Link;
