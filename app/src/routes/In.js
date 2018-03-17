/*jshint esversion: 6 */
import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Page.js";
import Layout from "components/Layout.js";
import SearchResults from "components/search/Results";

class Search extends Component {
	static async getInitialProps({ match }) {
		/*
			initial props - pass to page component by SSR
		*/
		const props = {
			area_key: match.params.area_key || "us",
			jobs: []
		};
		/*
			fetch content - initial data
		*/
		try {
			// fetch from CDN
			const res = await fetch(`https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs/${props.area_key}-50.json`); // Cloudfront CDN => data
			const data = await res.json();
			props.jobs = data || [];
			return props;
		} catch (e) {
			try {
				// fetch from API (failover)
				const res = await fetch(`http://localhost:1080/api/v1/jobs/${props.area_key}.json?limit=50`); // local API => json.data
				const json = await res.json();
				props.jobs = json.data || [];
				return props;
			} catch (e) {
				return props;
			}
		}
	}
	/*
		initial data in {this.props.jobs}, more complete data in {this.state.jobs}
	*/
	constructor() {
		super();
		this.state = {
			jobs: []
		};
	}
	async updateContent(props = {}) {
		if (!props.area_key) {
			return;
		}
		/*
			fetch content - all data
		*/
		try {
			// fetch from CDN
			const res = await fetch(`https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs/${props.area_key}.json`); // Cloudfront CDN => data
			const data = await res.json();
			this.setState({ jobs: data || [] });
		} catch (e) {
			try {
				// fetch from API (failover)
				const res = await fetch(`http://localhost:1080/api/v1/jobs/${props.area_key}.json`); // local API => json.data
				const json = await res.json();
				this.setState({ jobs: json.data || [] });
			} catch (e) {}
		}
	}
	componentWillReceiveProps(props = {}) {
		/*
			update Content - when page route changed
		*/
		if (props.jobs && props.jobs.length) {
			/*
				first - throw out old state and replace with new props
			*/
			this.setState({ jobs: props.jobs });
			/*
				then - fetch the rest
			*/
			this.updateContent(props);
		}
	}
	componentDidMount() {
		/*
			update Content - only initial page load after page SSR'd with getInitialProps()
		*/
		if (!this.state.jobs.length && this.props.area_key) {
			this.updateContent(this.props);
		}
	}

	render() {
		/*
			this.props || this.state
		*/
		const jobs = this.state.jobs.length ? this.state.jobs : this.props.jobs;
		return (
			<Layout>
				<Styled.Page>
					<SearchResults area_key={this.props.area_key || "us"} jobs={jobs || []} />
				</Styled.Page>
			</Layout>
		);
	}
}

export default Search;
