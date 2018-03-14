import styled from "styled-components";
import theme from "Document.theme.js";

export const Header = styled.div`
	&.row {
		position: relative;
		padding: 0.125rem 0 0 0;
		background: #ccc;
		display: flex;
		align-items: baseline;
		a {
			color: blue;
		}
		@media (max-width: 600px) {
			.only-wide {
				display: none !important;
			}
		}
		[class^="icon-"] {
			font-size: 2.1rem;
			line-height: 1.25rem;
			color: #666;
		}
		[class^="row_"] {
			width: 25%;
			font-size: 1.25rem;
			flex-grow: 1;
			text-align: center;
			.caption {
				color: #666;
				font-size: 1.25rem;
				line-height: 1.25rem;
				padding: 0.75rem 0.25rem 0;
				display: inline-block;
			}
		}
		.row_center {
			white-space: nowrap;
			span.icon-select {
				color: #111;
			}
		}
	}
`;
