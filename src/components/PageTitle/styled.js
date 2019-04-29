import styled from 'styled-components';

export const Title = styled.div`
	background-color: #ffffff;
	margin: 0 auto;
	width: 100%;
	max-width: 74.75rem;
	padding-top: 1rem;

	h5 {
		color: rgba(0, 0, 0, 0.87);
		font-family: 'Montserrat', sans-serif;
		font-size: 1.5rem;
		font-weight: 500;
		margin: 0;
		padding: 0.5rem 1.5rem;

		@media only screen and (max-width: 62em) {
			padding-right: 1rem;
			padding-left: 1rem;
		}
	}
`;
