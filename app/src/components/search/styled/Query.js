import styled from "styled-components";
import theme from "Document.theme.js";

export const Query = styled.div`
	text-align: center;
	display: block;
	margin: 0.33rem auto;
	max-width: 50rem;
	> * {
		background: #fff;
	}
	.query_go {
		display: none;
		cursor: pointer;
		position: relative;
		border: solid 0px rgb(188, 188, 188);
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
		line-height: 1.2rem;
		border-radius: 1rem;
	}
	.query_input {
		font-size: 1.2rem;
		padding: 0.3rem 0.6rem 0.3rem 2rem;
		border: solid 0px ${theme.color_border1};
		flex-grow: 1;
		min-width: 21rem;
		margin: 0 auto;
	}
	.query_select {
		display: none;
		cursor: pointer;
		position: relative;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border: solid 0px ${theme.color_border1};
		border-left: none;
		width: 30%;
		.icon {
			position: absolute;
			right: 0.175rem;
			top: 0;
			padding: 0.33rem;
			font-size: 1.25rem;
		}
		.dropdown {
			position: relative;
			padding: 0.15rem 0.3rem 0.2rem 0.3rem;
			width: calc(100% + 4px);
			box-sizing: border-box;
			border-radius: 1rem;
			border-top-left-radius: 0;
			&.opened {
				z-index: 1000;
				padding: 0.4rem 0.2rem;
				/* margin: -2px; */
				border: solid 0px ${theme.color_border1};
			}
			position: relative;
			display: inline-block;
			vertical-align: top;
			&:not(.opened) {
				> * {
				}
			}
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
				&:not(.opened) {
					&.green {
						color: ${theme.color_textGreen1};
					}
					&.red {
						color: ${theme.color_textRed1};
					}
				}
			}
			&.opened {
				position: absolute;
				background: white;
				box-shadow: 3px 3px 10px;
				> * {
					display: block;
					margin-bottom: 0.33rem;
					font-weight: bold;
				}
			}
		}
	}
	/* &.selected_positive {
		// background: #9ad35b;
		// border-color: #9ad35b;
		background-image: linear-gradient(to bottom, #abde6f, #9ad35b, #64b40a);
		border-top-color: #abde6f;
		border-right-color: #9ad35b;
		border-bottom-color: #64b40a;
		.dropdown {
			&:not(.opened) {
				color: white;
				font-weight: bold;
				text-shadow: 0 0 2px #64b40a;
			}
		}
	} */
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
