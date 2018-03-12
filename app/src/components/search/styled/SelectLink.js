import styled from "styled-components";
import theme from "Document.theme.js";

export const Select = styled.div`
	max-width: 23.6rem;
	margin: 0 auto;
	.query_group {
		display: flex;
		margin: 0.33rem auto;
		align-items: center;
		white-space: nowrap;
		> * {
			background: #fff;
		}
		.query_title {
			color: ${theme.color_text1};
		}
		.query_button {
			min-width: 3rem;
			border-radius: 1rem;
			border: solid 0px ${theme.color_border1};
			border-bottom-left-radius: 0;
			border-top-left-radius: 0;
			white-space: nowrap;
			padding: 0.16rem 0.9rem 0.2rem 0.9rem;
			font-size: 1.4rem;
			line-height: 1.6rem;
			box-sizing: border-box;
			text-align: right;
			span {
				display: inline-block;
			}
		}
		.query_select {
			position: relative;
			display: flex;
			line-height: 1.2rem;
			font-size: 1.2rem;
			cursor: pointer;
			position: relative;
			border-radius: 1rem;
			border: solid 0px ${theme.color_border1};
			border-bottom-right-radius: 0;
			border-top-right-radius: 0;
			border-right: none;
			flex-grow: 1;
			.option {
				display: block;
				white-space: nowrap;
				padding: 0.4rem 1rem 0.4rem 2rem;
				text-align: left;
				font-size: 1.2rem;
				line-height: 1.2rem;
				color: #333;
				font-weight: bold;
				flex-grow: 1;
			}
			.dropdown {
				position: relative;
				top: 0;
				right: 0;
				padding: 0.12rem 0.9rem 0.2rem 0.9rem;
				box-sizing: border-box;
				display: none;
				border-radius: 1rem;
				border: solid 0px ${theme.color_border1};
				border-top-right-radius: 0;
				min-width: calc(100% + 4px);
				> * {
					padding: 0.5rem 1rem 0.5rem 1.25rem;
				}
			}
		}
		&.opened {
			.query_button span {
				transform: rotate(180deg);
			}
			.dropdown {
				position: absolute;
				background: white;
				display: block;
				z-index: 1000;
				padding: 0.4rem 0.2rem;
				/* margin: -2px; */
				border: solid 0px ${theme.color_border1};
				box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
			}
		}
	}
`;
