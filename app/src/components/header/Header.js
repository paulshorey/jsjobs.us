import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styled/Header.js";

export default class Header extends React.Component {
	render() {
		return (
			<Styled.Header className="Header">
				<h1 className="top-page-title">
					<Link to="/" className="logo">
						<img src="/images/js_logo.svg" alt="JS" />
						<span className="title">JOBS</span>
						<span className="ext">.US</span>
					</Link>
				</h1>
				{/* <h1>My</h1> */}
			</Styled.Header>
		);
	}
}
