/*
	DOCS:
	* this is 3 components: 1) the actual <Layout /> 2) <ConnectedLayout /> with Redux data 3) <LayoutExport /> which connects the Redux store and provider
	* this seems complicated, and is, but actually relieves complications later on in the app
	* this can possibly be divided into separate files, but that would not bring any additional benefits, because these 3 components are divided and exported as one because of Redux data stucture concerns, not modular architecture concerns
	* UNFORTUNATELY, unable to include Redux store provider in a more global file like App.js or Document.js (there is no App.js, and Document.js is weird SSR After.js/Next.js code)
	* UNFORTUNATELY ALSO, unable to include any Redux in the "src/routes/*.js" components/pages
*/
import React from "react";
import Header from "components/header/Header.js";
/* redux initialize */
import { compose, applyMiddleware, createStore } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import { Provider } from "react-redux";
import reducer from "data/reducers";
import { createLogger } from "redux-logger";
/* redux connect */
import { connect } from "react-redux";
import * as actions from "data/actions";
/* redux store */
const logger = createLogger({
	collapsed: true
});
const store = createStore(reducer, applyMiddleware(logger));
// const store = createStore(reducer, compose(applyMiddleware(logger), autoRehydrate()));
/*
	Original layout template
*/
class Layout extends React.Component {
	render() {
		if (this.props.area_key !== undefined) {
			this.props.dispatch(actions.my_area(this.props.area_key));
		}
		return (
			<div className="Layout" style={Object.assign({ minHeight: "100vh" }, this.props.style || {})}>
				<Header />
				{this.props.children || null}
			</div>
		);
	}
}
/*
	Connect redux data
*/
const mapStateToProps = (data, ownProps) => {
	/*
		do not return {data.my} properties as props --- because {data.my.area_key} it is updated in this same component's "render" function, which is, yes, dangerous, so do not remove this comment
	*/
	return {};
};
const ConnectedLayout = connect(mapStateToProps)(Layout);
/*
	Layout as the page component will receive it
*/
class LayoutExport extends React.Component {
	render() {
		// if (this.props.purge) {
		// 	persistStore(store)
		// 		.purge()
		// 		.then(function(what) {
		// 			console.info("PURGE", what);
		// 		})
		// 		.catch(function(what) {
		// 			console.error("PURGE", what);
		// 		});
		// } else {
		// 	persistStore(store);
		// }
		const { children, ...props } = this.props;
		return (
			<Provider store={store}>
				<ConnectedLayout {...props}>{children}</ConnectedLayout>
			</Provider>
		);
	}
}

export default LayoutExport;
