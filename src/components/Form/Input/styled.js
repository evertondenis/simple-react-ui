import styled from 'styled-components';

export const ContainerInput = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Input = styled.input`
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	width: 100%;
	height: 3rem;
	padding: 0.375rem 0.75rem;
	border-width: 1px;
	border-style: solid;
	border-color: rgba(0, 0, 0, 0.24);
	border-radius: 4px;
	font-family: Open Sans, sans-serif;
	font-size: 1rem;
	line-height: 1.5rem;
	color: rgba(0, 0, 0, 0.87);
	outline: none;
	-webkit-transition: border-color;
	transition: border-color;
	-webkit-transition-duration: 100ms;
	transition-duration: 100ms;
	-webkit-transition-timing-function: ease-out;
	transition-timing-function: ease-out;

	&:hover {
		border-color: ${({ theme }) => theme.blackSecondary};
	}

	&:focus,
	&:active {
		padding-left: calc(0.75rem - 1px);
		border-width: 2px;
		border-style: solid;
		border-color: ${({ theme }) => theme.primarylight};
	}
`;
