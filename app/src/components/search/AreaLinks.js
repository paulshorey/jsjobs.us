import React from "react";
import * as Styled from "./styled/AreaLinks.js";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
/* redux */
import { connect } from "react-redux";
import * as actions from "data/actions";

/* 
	Component 
*/
class AreaLinks extends React.Component {
	render() {
		const areas = this.props.areas; // from Redux connect
		const Links = [];
		for (let key in areas) {
			const area = areas[key];
			Links.push(
				<Link
					className={"option " + (this.props.history.location.pathname === area.route ? " selected" : "")}
					to={area.route}
					key={area.route}
					onClick={e => {
						if (area.route === this.props.history.location.pathname) {
							e.preventDefault();
						}
					}}
				>
					{area.label}
				</Link>
			);
		}
		return (
			<Styled.AreaLinks
				{...this.props}
				innerRef={el => {
					this.AreaLinks = el;
				}}
			>
				<div
					className="overlay"
					ref="overlay"
					onClick={e => {
						this.AreaLinks.classList.toggle("active");
					}}
				/>
				<div
					className="content"
					ref="content"
					onClick={e => {
						this.AreaLinks.classList.remove("active");
					}}
				>
					<div
						className="dropdown"
						onClick={e => {
							e.stopPropagation();
							this.AreaLinks.classList.toggle("active");
						}}
					>
						{Links}
					</div>
					<span
						className="button"
						onClick={e => {
							e.stopPropagation();
							this.AreaLinks.classList.toggle("active");
						}}
					>
						<span className="icon-top-select" />
					</span>
				</div>
			</Styled.AreaLinks>
		);
	}
}
const mapStateToProps = (store, ownProps) => ({
	areas: store.areas
});
const mapDispatchToProps = (dispatch, ownProps) => ({});
const ConnectedAreaLinks = connect(mapStateToProps, mapDispatchToProps)(AreaLinks);

/*
	Components
*/
export default withRouter(ConnectedAreaLinks);
