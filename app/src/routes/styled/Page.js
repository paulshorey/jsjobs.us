import styled from "styled-components";
import theme from "Document.theme.js";

export const Page = styled.div`
	&.isLoading {
		.query_input {
			background: #fff url("/assets/loading/3dots.gif") center no-repeat;
		}
	}
	.bottom {
		background: #111;
		color: #fff;
		padding: 1rem;
		* {
			color: #fff;
		}
	}
	.queries {
		padding: 0.5rem 0;
		background: #cccccc;
	}
	.page-title {
		margin: 2rem auto 1rem;
		text-align: center;
		color: ${theme.color_title1};
		white-space: nowrap;
		> * {
			display: inline-block;
		}
	}
	.home-map {
		margin: 1.5rem 0 1.5rem 0;
	}
	.home-map-content {
		position: relative;
		width: 100%;
		padding: 30% 0;
		background: url(/images/map-outline-us-states.png) no-repeat;
		background-size: contain;
	}
	.ui-hotspot.home-map-hotspot {
		width: 2rem;
		height: 2rem;
		&:before {
			background: #ffd700;
		}
		&:after {
			/* background-image: radial-gradient(circle, #ffd700, #ffca00, #ffbe00, #ffb100, #ffa505); */
			background: #ffbe00;
		}
	}
	.ui-hotspot {
		cursor: pointer;
		position: absolute;
		box-shadow: 0 0 10px #ffffff;
		@keyframes pulse {
			0% {
				transform: scale(1);
				opacity: 0.5;
			}
			70%,
			100% {
				transform: scale(2);
				opacity: 0;
			}
		}
		&:before {
			content: "";
			display: inline-block;
			border-radius: 50%;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0%;
			left: 0%;
			background: rgb(222, 222, 222);
			opacity: 0.5;
			animation: pulse 3s ease-in-out infinite;
		}
		&:after {
			content: "";
			display: inline-block;
			border-radius: 50%;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0%;
			left: 0%;
			background: orange;
			opacity: 1;
		}
		width: 20px;
		height: 20px;
		label {
			cursor: pointer;
			position: absolute;
			top: -0.05rem;
			left: 2.5rem;
			font-weight: bold;
			font-size: 1.25rem;
			color: #ffa505;
			text-shadow: 0 0 10px #ffffff;
		}
	}
`;
