import styled from "styled-components";
import theme from "Document.theme.js";

export const Header = styled.div`
	&.row {
		position: relative;
		padding: 0.75rem;
		background: #111;
		display: flex;
		align-items: baseline;
		a {
			color: ${theme.color_jsYellow};
		}
		@media (max-width: 600px) {
			.only-wide {
				display: none !important;
			}
		}
		[class^="icon-"] {
			font-size: 2.1rem;
			line-height: 1.25rem;
			&.icon-ui-more {
				font-size: 2.2rem;
			}
		}
		[class^="row_"] {
			width: 25%;
			font-size: 1.25rem;
			color: white;
			flex-grow: 1;
			text-align: center;
			/* vertical-align: bottom; */
			/* * {
				vertical-align: bottom;
			} */
			.caption {
				color: #fff;
				font-size: 1.25rem;
				line-height: 1.25rem;
				padding: 0.75rem 0.33rem 0.1rem;
				display: inline-block;
				.ext {
					color: ${theme.color_jsYellow};
				}
			}
		}
		.row_left {
			text-align: left;
			color: ${theme.color_text1};
		}
		.row_center {
			white-space: nowrap;
			span.icon-select {
				color: ${theme.color_jsYellow};
			}
		}
		.row_right {
			text-align: right;
			.icon-ui-thumbs-up {
				font-size: 1.6rem;
				line-height: 1rem;
				margin-top: 0.4rem;
				display: inline-block;
			}
		}
	}
`;
