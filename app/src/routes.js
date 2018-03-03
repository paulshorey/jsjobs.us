import React from "react";

import { asyncComponent } from "@jaredpalmer/after";

export default [
	{
		path: "/",
		exact: true,
		component: asyncComponent({
			loader: () => import("./routes/Home"), // required
			Placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
		})
	},
	{
		path: "/about",
		exact: true,
		component: asyncComponent({
			loader: () => import("./routes/About"), // required
			Placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
		})
	},
	{
		path: "/search/:search?",
		exact: true,
		component: asyncComponent({
			loader: () => import("./routes/Search"), // required
			Placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
		})
	},
	{
		path: "*",
		component: asyncComponent({
			loader: () => import("./routes/404"), // required
			Placeholder: () => <div>...Page Not Found...</div> // this is optional, just returns null by default
		})
	}
];
