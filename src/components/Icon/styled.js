import styled, { css } from 'styled-components';

export const StyledIcon = styled.i`
	display: flex;
	color: ${({ color }) => color};
	font-size: ${({ size }) => size};
	padding: ${({ padding }) => padding};

	${({ hasAction }) =>
		hasAction &&
		css`
			cursor: pointer;
		`};
`;
