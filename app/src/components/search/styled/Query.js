import styled from "styled-components";
import theme from "Document.theme.js";

export const Query = styled.div`
	text-align: center;
	display: block;
	margin: 0.33rem auto;
	max-width: 52rem;
	> * {
		background: #fff;
	}
	.query_go {
		display: none;
		cursor: pointer;
		position: relative;
		width: 1.8rem;
		border-radius: 50%;
		margin-left: 0.2rem;
		> * {
			display: block;
			white-space: nowrap;
			padding: 0.4rem 0.33rem;
			text-align: center;
			font-size: 1.2rem;
			line-height: 1.2rem;
			color: #333;
			font-weight: normal;
		}
	}
	.query_input,
	.query_select {
		line-height: 1.5rem;
		border-radius: 1rem;
	}
	.query_input {
		font-size: 1.2rem;
		padding: 0.3rem 0.6rem 0.3rem 2rem;
		flex-grow: 1;
		min-width: 21rem;
		margin: 0 auto;
		border: solid 1px ${theme.color_border2};
		&.isLoading {
			background:yellow;
		}
	}
	.query_select {
		display: none;
		cursor: pointer;
		position: relative;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		/* border: solid 1px ${theme.color_border2}; */
		border-left: none;
		width: 30%;
		.icon {
			position: absolute;
			right: 0.175rem;
			top: 0;
			padding: 0.25rem 0.33rem;
			font-size: 1.25rem;
		}
		.overlay {
			display: none;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			/* background: rgba(0, 0, 0, 0.25); */
		}
		.dropdown {
			position: relative;
			padding: 0.15rem 0.3rem 0.2rem 0.3rem;
			width: calc(100% + 4px);
			box-sizing: border-box;
			border: solid 1px ${theme.color_border2};
			border-left: none;
			border-radius: 1rem;
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
			position: relative;
			display: inline-block;
			vertical-align: top;
			> * {
				padding: 0.25rem;
				display: none;
				vertical-align: baseline;
				line-height: 1rem;
				span {
					vertical-align: baseline;
					font-size: 1rem;
					&:first-child {
						font-size: 1.1rem;
					}
				}
				&.selected {
					display: block;
				}
				&.green {
					color: ${theme.color_textGreen1};
				}
				&.red {
					color: ${theme.color_textRed1};
				}
			}
		}
	}
	&.active .query_input {
		border-right:none;
	}
	&.active .query_select {
		.overlay {
			display: block;
		}
		.dropdown {
			z-index: 1000;
			padding: 0.4rem 0.2rem;
			border-bottom-left-radius: 1rem;
			position: absolute;
			background: white;
			box-shadow: 3px 3px 10px;
			> * {
				display: block;
				margin-bottom: 0.33rem;
				font-weight: bold;
				padding: 0.3rem;
			}
		}
	}
	&.selected_positive {
		/* background: #9ad35b;
		border-color: #9ad35b; */
		background-image: linear-gradient(to bottom, #abde6f, #9ad35b, #64b40a);
		border-top-color: #abde6f;
		border-right-color: #9ad35b;
		border-bottom-color: #64b40a;
		&:not(.active) {
			.dropdown {
				color: white;
				font-weight: bold;
				text-shadow: 0 0 2px #64b40a;
			}
		}
	}
	&.hasValue {
		display: flex;
		.query_input {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
		.query_select {
			display: flex;
		}
		.query_go {
			display: inline-block;
		}
	}
`;
