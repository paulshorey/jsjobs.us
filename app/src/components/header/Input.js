import React from "react";

const query = {
	start: 0,
	limit: 50
};
const queryAdvance = function() {
	query.start += query.limit;
};

export default class SearchInput extends React.Component {
	handleUsernameSubmission(e) {
		if (e) {
			e.preventDefault();
		}
		const name = this.refs.skill.value;
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleUsernameSubmission}>
					<input placeholder="skill..." ref="skill" />
					<input type="submit" value="Search" />
				</form>
			</div>
		);
	}
}
