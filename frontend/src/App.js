import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Navigate from="/" to="/home" exact />} />
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/profile" element={<Profile />} />
			</Routes>
		</Router>
	);
}

export default App;
