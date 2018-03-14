import styled from "styled-components";
import theme from "Document.theme.js";

export const Results = styled.div`
	.results {
		max-width: 53.8rem;
		margin: 0.5rem auto;
		.result {
			/* display: flex; */
			margin: 1.5rem 1rem;
			b {
				color: #666;
			}
			.meta {
				display: block;
				text-align: right;
				margin:0.2rem 0 0 0;
				> * {
					vertical-align: baseline;
				}
				.pill {
					border: solid 1px #999;
					padding: 0rem 0.5rem;
					border-radius: 1rem;
					> * {
						vertical-align:baseline;
					}
					[class^="icon-"] {
						position: relative;
						top:0.1rem;
					}
				}
			}
			&:not(.first) {
				.pill {
					.icon-check,
					.icon-ui-thumbs-up {
						margin:0 -0.2rem 0 0.2rem;
						top:0.05rem;
					}
					.text {
						display:none;
					}
				}
			}
			.controls {
				margin: 0.125rem;
				flex-direction: column;
				div {
					display: flex;
					span {
						display: inline-block;
						margin: 0.125rem 0.125rem 0.25rem 0.125rem;
						font-size: 1.25rem;
					}
				}
			}
			.content {
			}
			.location {
				color: salmon; /*${theme.color_mapsLink};*/
			}
			.rating {
				font-size: 1rem;
				color:#999;
				&.plus {
					/* color: ${theme.color_textGreen1}; */
				}
				&.minus {
					/* color: ${theme.color_textRed1}; */
				}
			}
		}
		[class^="icon-"],
		[class*=" icon-"] {
			vertical-align: baseline;
		}
	}
	.title {
		background:#999;
		text-align:center;
		color:#111;
		padding:1rem;
		font-size:1.25rem;
		font-weight:bold;
		[class^="icon-"] {
			font-size:2rem;
		}
	}
	.queries {
		padding: 0.5rem 1rem;
		background: #cccccc;
		.page-title {
			margin-top: 0.5rem;
		}
		.queries_content {
			text-align: center;
			overflow: visible;
		}
	}
`;
