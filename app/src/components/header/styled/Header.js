import styled from "styled-components";
// import theme from "Document.theme.js";

export const Header = styled.div`
	position: relative;
	padding: 0.75rem 1.25rem;
	background: #111;
	display: flex;
	> *:first-child {
		flex-grow: 1;
	}
	.logo {
		> * {
			vertical-align: bottom;
		}
		img {
			height: 2rem;
			padding-right: 0.25rem;
		}
		span {
			color: #fff;
			font-size: 1.25rem;
			line-height: 1.25rem;
			&.ext {
				color: #f6da1d;
			}
		}
	}
`;
