import styled from "styled-components";
import theme from "Document.theme.js";

export const Results = styled.div`
	&.Items {
		&.isLoading {
			.title {
				background: url("/assets/loading/3dots.gif") center -13px no-repeat;
				span {
					opacity:0;
				}
			}
		}
		.title {
			font-size:1.25rem;
			line-height: 1.25rem;
			text-align:center;
			color:#111;
			span {
				transition: opacity 0.2s;
			}
		}
		.content {
			max-width: 53.8rem;
			margin: 0.5rem auto;
			.item {
				/* display: flex; */
				margin: 1.5rem 1rem;
				&.new.not_new {
					display:none; /* because Javascript was being buggy! */
				}
				a {
					color:#666;
					&:hover {
						text-decoration:underline;
					}
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
							cursor:pointer;
							border: solid 1px #999;
							margin:0 0 0 0.4rem;
							padding: 0rem 0.5rem 0.1rem;
							border-radius: 1rem;
							display:inline-block;
							[class^="icon-"] {
								position: relative;
								top:0.1rem;
							}
							&:hover {
								background:#999;
								color:#fff;
							}
						}
					}
				}
				&.status--applied .pill.status--applied,
				&.status--intrigued .pill.status--intrigued,
				&.status--ignored .pill.status--ignored {
					background:#999;
					color:#fff;
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
				.location,
				.location a {
					color: salmon; /*${theme.color_mapsLink};*/
				}
				.company,
				.company a {
					color: slategrey; /*${theme.color_mapsLink};*/
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
		.queries {
			margin-bottom: 1rem;
			padding: 0.5rem 1rem;
			background: #cccccc;
			border-bottom: solid 1px ${theme.color_border2};
			text-align: center;
			overflow: visible;
			color:#999;
			a {
				color:darkslateblue;
			}
			.moreOptions {
				p {
					margin: 0.5rem 0 0.33rem;
					line-height: 1rem;
				}
				b {
					color:#666;
					font-weight:normal;
				}
				.moreOptions_link {
					color: #666;
					margin: 0;
					text-decoration: underline;
					line-height: 0.5rem;
					padding: 0 0 0.5rem;
					span {
						padding:0 2rem;
						cursor:pointer;
					}
				}
				.moreOptions_content {
					display:none;
				}
				&.active {
					.moreOptions_content {
						display:block;
					}
				}
			}
		}
	}
`;
