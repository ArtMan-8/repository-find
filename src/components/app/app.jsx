import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Main from "../main";
import Card from "../card";
import "./app.module.css";

export default function App() {
	return (
		<HashRouter>
			<Switch>
				<Route path="/" component={Main} exact />
				<Route
					path="/:id"
					render={(routeProps) => {
						return <Card props={routeProps.match.params.id} />;
					}}
				/>
			</Switch>
		</HashRouter>
	);
}
