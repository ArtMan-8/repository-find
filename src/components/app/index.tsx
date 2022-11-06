import "./app.module.css";
import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Card from "../Card";
import Main from "../Main";

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/:id' element={<Card />} />
			</Routes>
		</BrowserRouter>
	);
}
