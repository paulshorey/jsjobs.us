import React from "react";
import * as Styled from "./styled/Links.js";
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
			const area_key_arr = area.route.split("/");
			const area_key = area_key_arr[area_key_arr.length - 1] || "";
			Links.push(
				<Link
					className={"option " + (this.props.area_key === area_key ? " selected" : "")}
					to={area.route}
					key={area.route}
					onClick={e => {
						if (area_key === this.props.area_key) {
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
						<span className="icon-ui-select-thin" />
					</span>
				</div>
			</Styled.AreaLinks>
		);
	}
}
const mapStateToProps = (store, ownProps) => ({
	areas: store.areas
});
const ConnectedAreaLinks = connect(mapStateToProps)(AreaLinks);

/*
	Components
*/
export default ConnectedAreaLinks;
