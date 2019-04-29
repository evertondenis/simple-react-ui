import styled from 'styled-components';

export const StyledLink = styled.a`
	display: inline-block;
	margin: 0;
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 1.5rem;
	text-decoration: none;
	word-break: break-word;
	color: ${({ theme }) => theme.primarylight};
	cursor: pointer;
	width: 100%;
	text-decoration: underline;
	transition: all 0.2s linear;

	&:hover {
		transition: all 0.2s linear;
		color: #088cca;
	}
`;
