import styled from "styled-components";
import theme from "Document.theme.js";

export const Filters = styled.div`
	margin: 0.5rem 0 0.33rem 0;
	.filter {
		display: block;
		text-align: center;
		margin-bottom: 0.33rem;
		> * {
			vertical-align: middle;
			display: inline-block;
			&::after {
				content: " ";
			}
		}

		color: #666;
		.value {
			i {
				color: #989898;
				&::after {
					content: " ";
				}
			}
			b {
				font-weight: 500;
				letter-spacing: 0.25px;
			}
			&.example {
				color: #989898;
			}
		}
		.multiplier {
			font-size: 75%;
			.icon-plus {
				color: ${theme.color_textGreen2};
			}
			.icon-minus {
				color: ${theme.color_textRed2};
			}
		}
		.multiplier_text {
			padding-left: 0.33rem;
			font-weight: normal;
			&.plus {
				color: ${theme.color_textGreen2};
			}
			&.minus {
				color: ${theme.color_textRed2};
			}
			* {
				/* vertical-align: baseline; */
			}
		}
		.delete {
			cursor: pointer;
			padding-left: 0.5rem;
			font-size: 1.1rem;
		}
		.x {
			cursor: pointer;
			padding-left: 0.5rem;
			font-size: 1.5rem;
			margin-top: -0.175rem;
		}
	}
`;
