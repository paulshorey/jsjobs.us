import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Page.js";
import Layout from "components/Layout.js";
import Results from "components/search/Results__new";
/*
    components
*/
class Search extends Component {
	static async getInitialProps({ match }) {
		/*
			props modified and propagated by SSR
		*/
		const props = {
			area_key: match.params.area_key || "",
			items: []
		};
		/*
			fetch content - initial data
		*/
		try {
			// fetch from CDN
			const res = await fetch(`https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs${props.area_key}-50.json`); // Cloudfront CDN => data
			const data = await res.json();
			// convert to object
			const items_object = {};
			data.forEach(function(item) {
				items_object[item._id] = item;
			});
			// done converting, use {items_object}
			props.items = items_object;
			return props;
		} catch (e) {
			try {
				// fetch from API (failover)
				const res = await fetch(`http://localhost:1080/api/v1/jobs${props.area_key}.json?limit=50`); // local API => json.data
				const json = await res.json();
				// convert to object
				const items_object = {};
				json.data.forEach(function(item) {
					items_object[item._id] = item;
				});
				// done converting, use {items_object}
				props.items = items_object;
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
			const res = await fetch(`https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs${props.area_key}.json`); // Cloudfront CDN => data
			const data = await res.json();
			// convert to object
			const items_object = {};
			data.forEach(function(item) {
				items_object[item._id] = item;
			});
			// done converting, use {items_object}
			this.setState({ items: items_object, isLoading: false });
		} catch (e) {
			try {
				// fetch from API (failover)
				const res = await fetch(`http://localhost:1080/api/v1/jobs${props.area_key}.json`); // local API => json.data
				const json = await res.json();
				// convert to object
				const items_object = {};
				json.data.forEach(function(item) {
					items_object[item._id] = item;
				});
				// done converting, use {items_object}
				this.setState({ items: items_object, isLoading: false });
			} catch (e) {}
		}
		/*
			service worker - cache FUTURE API calls
		*/
		/*	
			PWA --- cache
		*/
		// console.log("cache API requests for all {area_key}s except " + props.area_key);
		// caches.open("api").then(function(cache) {
		// 	return cache.addAll([`https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs${props.area_key}.json`]);
		// });
		/*
			PWA --- fetch
		*/
		// self.addEventListener("fetch", function(event) {
		// 	event.respondWith(
		// 		caches.match(event.request).then(function(response) {
		// 			return response || fetch(event.request);
		// 		})
		// 	);
		// });
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
		console.log("Search.js render ", this.props);
		const items = this.state.items.length ? this.state.items : this.props.items;
		return (
			<Layout area_key={this.props.area_key}>
				<Styled.Page className={"Page " + (this.state.isLoading ? " isLoading" : "")}>
					<Results area_key={this.props.area_key} items={items || {}} className={this.state.isLoading ? " isLoading" : ""} />
				</Styled.Page>
			</Layout>
		);
	}
}

export default Search;
