import { injectGlobal } from "styled-components";
import theme from "./Document.theme.js";

/**************************************************
THIS LOADS INLINE IN HEAD
Pro: It loads instantly before page is loaded - so, put any background colors, fonts, sizes, and noticeable styles here
Con: THIS BLOCKS ALL HTML - SO BE VERY BRIEF - PUT EVERYTHING POSSIBLE INTO /src/client.css
**************************************************/

injectGlobal`

	/**************************************************
		reset
	**************************************************/
	html, body, #app, #pages {
		height:100%;
		width:100%;
	}
	body {
		margin: 0;
		padding: 0;
        color:navy;      
        background:lightblue;
	}
	pre {
		margin:0;
	}
	::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		color: #999;
	}
	::-moz-placeholder {
		/* Firefox 19+ */
		color: #999;
	}
	:-ms-input-placeholder {
		/* IE 10+ */
		color: #999;
	}
	:-moz-placeholder {
		/* Firefox 18- */
		color: #999;
	}
	ul, li {list-style:none;padding:0;margin:0;text-indent: 0;}

	/**************************************************
		responsive text
	**************************************************/
	body {
		margin: 0;
	}
	html {
		font-size:14px;
	}
	@media (max-width:950px), (max-height:750px) {
		html {
			font-size:14px;
		}
	}
	@media (max-width:750px), (max-height:650px) {
		html {
			font-size:14px;
		}
	}
	@media (max-width:380px), (max-height:380px) {
		html {
			font-size:12px;
		}
	}
	@media (max-width:330px), (max-height:330px) {
		html {
			font-size:10px;
		}
	}
	h1,h2,h3,h4,h5,h6,p {
		margin:0;
		padding:0;
		line-height:1.5rem;
	}
	p {
		margin:0.75rem 0;
		font-size:1rem;
	}
	h1 {
		font-size:1.9rem;
	}
	h2 {
		font-size:1.75rem;
	}
	h3 {
		font-size:1.6rem;
	}
	h4 {
		font-size:1.45rem;
	}
	h5 {
		font-size:1.3rem;
	}
	h6 {
		font-size:1.15rem;
	}

	/**************************************************
		style
	**************************************************/
	* {
		font-family: ${theme.fontFamily} !important;
		vertical-align:middle; /* hope this doesn't mess anything up - but in my experience, having vertical-align middle was always more useful than not - PS */
	}
	body {
		background: ${theme.color_bg1};
		color: ${theme.color_text1};
	}
	a {
		color:${theme.color_link1};
		text-decoration: none;
	}
`;
