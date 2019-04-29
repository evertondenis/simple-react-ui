import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	margin-bottom: 1rem;
	margin-top: 1rem;
	max-width: 71.75rem;
	padding-left: 1rem;
	padding-right: 1rem;

	@media only screen and (min-width: 62em) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
`;

export default Container;
