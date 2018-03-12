import styled from "styled-components";
import theme from "Document.theme.js";

export const Results = styled.div`
	.results {
		margin: 1.5rem 0;
		.result {
			margin: 1rem;
			b {
				color: #666;
			}
			.location {
				color: ${theme.color_mapsLink};
			}
			.rating {
				font-size: 1rem;
				&.plus {
					color: ${theme.color_textGreen1};
				}
				&.minus {
					color: ${theme.color_textRed1};
				}
			}
		}
		[class^="icon-"],
		[class*=" icon-"] {
			vertical-align: baseline;
		}
	}
	.queries {
		padding: 0.5rem 0;
		background: #cccccc;
		.queries_content {
			text-align: center;
			overflow: visible;
		}
	}
`;
