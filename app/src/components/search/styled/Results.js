import styled from "styled-components";
import theme from "Document.theme.js";

export const Results = styled.div`
	.moreOptions {
		color:#666;
		margin:0;
		text-decoration:underline;
	}
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
				* {
					vertical-align: baseline;
				}
				> * {
					margin:0.2rem 0.2rem 0;
					display:inline-block;
				}
				.pills {
					white-space:nowrap;
					.pill {
						border: solid 1px #999;
						margin:0 0 0 0.4rem;
						padding: 0rem 0.5rem 0.1rem;
						border-radius: 1rem;
						display:inline-block;
						[class^="icon-"] {
							position: relative;
							top:0.1rem;
						}
					}
				}
			}
			&.first {
				.meta {
					.pills {
						margin-top:0.4rem;
					}
				}
			}
			&:not(.first) {
				.pill {
					.icon-check,
					.icon-ui-thumbs-up {
						/* margin:0 -0.2rem 0 0.2rem; */
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
		border-bottom: solid 1px ${theme.color_border2};
		.page-title {
			margin-top: 0.5rem;
		}
		.queries_content {
			text-align: center;
			overflow: visible;
		}
	}
`;
