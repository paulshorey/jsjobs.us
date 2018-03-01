import React from "react";

export default class SearchInput extends React.Component {
	handleUsernameSubmission(e) {
		if (e) {
			e.preventDefault();
		}
		const name = this.refs.usernameItem.value;
		console.log("Your name is", name);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleUsernameSubmission}>
					<input placeholder="enter username" ref="usernameItem" />
					<input type="submit" value="Submit username" />
				</form>
			</div>
		);
	}
}
