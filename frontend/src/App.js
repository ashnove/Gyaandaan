import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Session from "./pages/Session/Session";
import Profile from "./pages/Profile";
import MentorsDasboard from "./pages/MentorsDasboard/MentorsDashboard"
import NavBar from "./components/NavBar";
import AppState from "./context/AppState";

function App() {
	return (
		<>
			<AppState>
				<Router>
					<NavBar />
					<Routes>
						<Route exact path="/" element={<Navigate from="/" to="/home" exact />} />
						<Route exact path="/home" element={<Home />} />
						<Route exact path="/profile" element={<Profile />} />
						<Route exact path="/mentors" element={<MentorsDasboard />} />
					</Routes>
				</Router>
			</AppState>
		</>
	);
}

export default App;
