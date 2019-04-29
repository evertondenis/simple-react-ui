import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { MsgLoaded } from './styled';
import { setElement } from './helpers';

class InfiniteScroll extends Component {
	state = {
		loadedAll: false,
		element: null
	};

	componentDidMount() {
		const { useWindow, element } = this.props;
		this.setState({ element: setElement(element) });
		if (!useWindow) {
			return document
				.querySelector(element)
				.addEventListener('scroll', this.handleGetNotifications, false);
		}

		window.addEventListener('scroll', this.handleGetNotifications, false);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.currentPage !== this.props.currentPage) {
			this.setState({ loadedAll: false });
		}
	}

	componentWillUnmount() {
		const { useWindow, element } = this.state;
		if (!useWindow) {
			element.removeEventListener('scroll', this.handleGetNotifications, false);
		}

		window.removeEventListener('scroll', this.handleGetNotifications, false);
	}

	handleGetNotifications = () => {
		const { useWindow, totalPages, currentPage, loadMore, loader } = this.props;
		const { element } = this.state;

		const inBottom = !useWindow
			? element.scrollHeight - element.scrollTop === element.clientHeight
			: window.innerHeight + window.scrollY === document.body.clientHeight;
		const condition = inBottom && currentPage < totalPages && !loader;

		if (condition) {
			return loadMore(currentPage + 1);
		}

		if (currentPage === totalPages) {
			return this.setState({ loadedAll: true });
		}
	};

	render() {
		const { loadedAll } = this.state;
		const { isLoading, messageLoadedAll } = this.props;
		return (
			<Fragment>
				<div>{this.props.children}</div>
				{loadedAll && !isLoading && <MsgLoaded>{messageLoadedAll}</MsgLoaded>}
			</Fragment>
		);
	}
}

InfiniteScroll.defaultProps = {
	isLoading: false,
	messageLoadedAll: 'All Loaded!'
};

InfiniteScroll.propTypes = {
	currentPage: PropTypes.number.isRequired,
	element: PropTypes.string,
	isLoading: PropTypes.bool,
	loadMore: PropTypes.func.isRequired,
	messageLoadedAll: PropTypes.node,
	totalPages: PropTypes.number.isRequired,
	useWindow: PropTypes.bool.isRequired
};

export default InfiniteScroll;
