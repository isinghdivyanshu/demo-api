import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Posts from "./pages/Posts";
import Details from "./pages/Details";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Posts />}></Route>
					<Route path="/posts/:id" element={<Details />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
