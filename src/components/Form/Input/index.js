import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import Label from '../Label';
import { ContainerInput, Input } from './styled';

class TextInput extends PureComponent {
	state = {
		inputValue: '',
		placeHolder: '',
		fieldActivate: null
	};

	componentDidMount() {
		const { floatingLabel, onDebounce, delay, placeholder } = this.props;
		if (onDebounce) {
			this.handleOnDebounce = debounce(onDebounce, delay);
		}
		if (!floatingLabel) {
			this.setState({ placeHolder: placeholder });
		}
		this.textInput.addEventListener('mousedown', this.handleClick, false);
	}

	componentWillUnmount() {
		this.textInput.removeEventListener('mousedown', this.handleClick, false);
	}

	handleClick = e => {
		if (this.node !== null) {
			if (this.node.contains(e.target)) {
				return;
			}
		}

		this.handleClickOutside();
	};

	handleClickOutside = () => {
		this.setState({
			fieldActivate: false,
			placeHolder: this.props.floatingLabel ? '' : this.props.placeholder
		});
	};

	activateField = () => {
		this.setState(
			{
				fieldActivate: true,
				placeHolder: this.props.placeholder
			},
			() => this.textInput.focus()
		);
	};

	disableFocus = e => {
		if (e.target.value === '') {
			return this.setState({
				fieldActivate: false,
				placeHolder: this.props.floatingLabel ? '' : this.props.placeholder
			});
		}
		this.setState({
			fieldActivate: true
		});
	};

	handleChange = value => {
		const { onDebounce, onChange } = this.props;
		if (onDebounce) {
			this.handleOnDebounce();
		}

		return onChange(value);
	};

	render() {
		const { fieldActivate, placeHolder } = this.state;
		const { label, floatingLabel, name } = this.props;

		return (
			<ContainerInput ref={node => (this.node = node)}>
				{label && floatingLabel ? (
					<Label onClick={this.activateField} floatingLabel fieldActivate={fieldActivate}>
						{label}
					</Label>
				) : (
					<Label>{label}</Label>
				)}
				<Input
					name={name}
					type="text"
					placeholder={placeHolder}
					ref={nodeInput => (this.textInput = nodeInput)}
					onBlur={this.disableFocus}
					onFocus={this.activateField}
					onChange={this.handleChange}
				/>
			</ContainerInput>
		);
	}
}

TextInput.defaultProps = {
	floatingLabel: false,
	placeholder: '',
	name: '',
	delay: 500,
	onDebounce: null
};

TextInput.propTypes = {
	floatingLabel: PropTypes.bool,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	delay: PropTypes.number,
	onDebounce: PropTypes.func
};

export default TextInput;
