import React from "react";

export default class SearchInput extends React.Component {
	handleUsernameSubmission(e) {
		if (e) {
			e.preventDefault();
		}
		const name = this.refs.searchTerm.value;
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleUsernameSubmission}>
					<input placeholder="enter username" ref="searchTerm" />
					<input type="submit" value="Submit username" />
				</form>
			</div>
		);
	}
}
