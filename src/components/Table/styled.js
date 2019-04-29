import styled, { css } from 'styled-components';

export const StyledTable = styled.table`
	font-size: 0.875rem;
	width: 100%;
	max-width: 100%;
	margin-bottom: 20px;
	border: none;
	border-collapse: collapse;
  border-spacing: 0;
	border-radius: 4px;
	background-color: #f5f5f5;
	overflow: auto;

	-webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14);
	box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14);

	thead {
		> tr {
			margin: 0;
			padding: 0;
			border: 0;
			vertical-align: baseline;
			display: table-row;

			> th {
				position: relative;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				height: 3rem;
				vertical-align: bottom;
				font-family: Montserrat, sans-serif;
				font-size: 0.75rem;
				font-weight: 600;
				color: #666;
				text-align: left;

				padding: 0 1rem 0.75rem;
				line-height: 1.5rem;
			}
		}
	}


	tbody > tr {
		margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
		position: relative;
    height: 3rem;
    -webkit-transition: background-color;
    transition: background-color;
    -webkit-transition-duration: 200ms;
    transition-duration: 200ms;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;

		${({ hasAction }) =>
			hasAction &&
			css`
				cursor: pointer;
			`}

		&:hover {
			background-color: rgba(0, 0, 0, 0.08);
		}

		/* background-color: #f3f3f3;
		&:hover {
			background: #e8e8e8;
		}

		${props =>
			!props.disableOdd &&
			css`
				&:nth-child(odd) {
					background-color: #fff;
				}
			`} &:hover {
			background-color: #e8e8e8;
		} */
	}

	td {
		display: table-cell;
		position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 3rem;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    vertical-align: middle;
    word-wrap: break-word;
		padding: 0.6875rem 1rem;
    line-height: 1.5rem;
	}

	/* .has-action {
		cursor: pointer;
	}

	.separator-line {
		&-t {
			border-top: 1px solid #979797;
		}
	} */
`;

/* export const StyledTableBody = styled.tbody`
	${props =>
		(props.selected || props.selected === 0) &&
		css`
			> tr:nth-child(${props.selected + 1}) {
				background-color: ${lighten(props.theme.primary)} !important;
			}
		`};
`; */
