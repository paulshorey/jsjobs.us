import styled from "styled-components";
import theme from "Document.theme.js";

export const Filters = styled.div`
	.filter {
		display: block;
		text-align: center;
		margin-bottom: 0.33rem;
		margin: 0.5rem 0 0.33rem 0;
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
				color: #666;
				&::after {
					content: " ";
				}
			}
			b {
				font-weight: 600;
				letter-spacing: 0.25px;
			}
			&.example {
				color: #666;
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
		}
		.delete {
			cursor: pointer;
			padding-left: 0.5rem;
			font-size: 1.25rem;
			margin-top: 0.125rem;
			display: inline-block;
			color: #666;
		}
		.x {
			cursor: pointer;
			padding-left: 0.5rem;
			font-size: 1.5rem;
			margin-top: -0.175rem;
		}
		&.plus {
			.multiplier_text,
			b {
				color: ${theme.color_textGreen2};
			}
		}
		&.minus {
			.multiplier_text,
			b {
				color: ${theme.color_textRed2};
			}
		}
	}
`;
