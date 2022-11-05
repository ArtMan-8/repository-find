import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "../main";
import Card from "../card";
import "./app.module.css";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/:id" element={<Card />} />
			</Routes>
		</BrowserRouter>
	);
}
