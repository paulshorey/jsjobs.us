import styled from "styled-components";
import theme from "Document.theme.js";

export const AreaLinks = styled.div`
	position: relative;
	text-align: center;
	.overlay {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	&.active .overlay {
		display: block;
	}
	.content {
		position: relative;
		min-height: 2rem;
		display: flex;
		justify-content: center;
		.button {
			cursor: pointer;
			min-width: 2rem;
			span {
				font-size: 2.1rem;
				line-height: 1.25rem;
				color: #111;
			}
		}
		.dropdown {
			.option {
				height: 1.5rem;
				line-height: 1.5rem;
				font-size: 1.25rem;
				padding: 0.25rem;
				display: none;
				color: ${theme.color_title2};
				&.selected {
					display: block;
				}
			}
		}
	}
	&.active .content {
		.dropdown {
			border: solid 1px ${theme.color_border2};
			position: absolute;
			background: #fff;
			padding: 0.5rem 1.6rem 0.5rem 1.5rem;
			margin: -0.75rem -1.5rem -0.75rem -1rem;
			border-radius: 1rem;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
			.option {
				padding: 0.5rem;
				display: block;
				&.selected {
					font-weight: bold;
				}
			}
		}
	}
`;
