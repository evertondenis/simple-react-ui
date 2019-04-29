import styled, { css } from 'styled-components';

const Label = styled.label`
	color: rgba(0, 0, 0, 0.6);
	font-size: 0.875rem;
	position: absolute;
	top: 0.875rem;
	left: 0.625rem;
	padding-right: 0.5rem;
	padding-left: 0.25rem;
	margin: 0;
	background: #fff;
	pointer-events: none;
	will-change: transform;
	-webkit-transform-origin: left top;
	transform-origin: left top;
	-webkit-transition: color, opacity, -webkit-transform;
	transition: color, opacity, -webkit-transform;
	transition: color, transform, opacity;
	transition: color, transform, opacity, -webkit-transform;
	-webkit-transition-duration: 200ms;
	transition-duration: 200ms;
	-webkit-transition-timing-function: ease-out;
	transition-timing-function: ease-out;

	${({ floatingLabel }) =>
		!floatingLabel &&
		css`
			top: 0;
			left: 0;
			position: relative;
			padding: 0;
			margin-bottom: 0.25rem;
			line-height: 1.25rem;
			width: 100%;
		`};

	${({ fieldActivate }) =>
		fieldActivate &&
		css`
			-webkit-transform: translateY(-1.4375rem) scale(0.857);
			transform: translateY(-1.4375rem) scale(0.857);
			color: #005b95;
		`};
`;

export default Label;
