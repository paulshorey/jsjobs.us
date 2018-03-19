import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Page.js";
import Layout from "components/Layout.js";
import Results from "components/search/Results";
/*
    components
*/
class Search extends Component {
	static async getInitialProps({ match }) {
		/*
			initial props - pass to page component by SSR
		*/
		const props = {
			area_key: match.params.area_key || "us",
			items: []
		};
		/*
			fetch content - initial data
		*/
		try {
			// fetch from CDN
			const res = await fetch(`https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs/${props.area_key}-50.json`); // Cloudfront CDN => data
			const data = await res.json();
			props.items = data || [];
			return props;
		} catch (e) {
			try {
				// fetch from API (failover)
				const res = await fetch(`http://localhost:1080/api/v1/jobs/${props.area_key}.json?limit=50`); // local API => json.data
				const json = await res.json();
				props.items = json.data || [];
				return props;
			} catch (e) {
				return props;
			}
		}
	}
	/*
		initial data in {this.props.items}, more complete data in {this.state.items}
	*/
	constructor() {
		super();
		this.state = {
			items: [],
			isLoading: false
		};
	}
	async updateContent(props = {}) {
		if (!props.area_key) {
			return;
		}
		this.setState({ isLoading: true });
		/*
			fetch content - all data
		*/
		try {
			// fetch from CDN
			const res = await fetch(`https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs/${props.area_key}.json`); // Cloudfront CDN => data
			const data = await res.json();
			this.setState({ items: data || [], isLoading: false });
		} catch (e) {
			try {
				// fetch from API (failover)
				const res = await fetch(`http://localhost:1080/api/v1/jobs/${props.area_key}.json`); // local API => json.data
				const json = await res.json();
				this.setState({ items: json.data || [], isLoading: false });
			} catch (e) {}
		}
	}
	componentWillReceiveProps(props = {}) {
		/*
			update Content - when page route changed
		*/
		if (props.items && props.items.length) {
			/*
				first - throw out old state and replace with new props
			*/
			this.setState({ items: props.items });
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
		if (!this.state.items.length && this.props.area_key) {
			this.updateContent(this.props);
		}
	}

	render() {
		/*
			this.props || this.state
		*/
		const items = this.state.items.length ? this.state.items : this.props.items;
		return (
			<Layout>
				<Styled.Page className={"Page " + (this.state.isLoading ? " isLoading" : "")}>
					<Results area_key={this.props.area_key || "us"} items={items || []} className={this.state.isLoading ? " isLoading" : ""} />
				</Styled.Page>
			</Layout>
		);
	}
}

export default Search;
