import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Session from "./pages/Session/Session";
import Profile from "./pages/Profile";
import MentorsDasboard from "./pages/MentorsDasboard/MentorsDashboard";
import NavBar from "./components/NavBar";
import AppState from "./context/AppState";
import ProfileState from "./context/ProfileState";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MyFooter from "./components/MyFooter";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
	return (
		<>
			<ProfileState>
				<AppState>
					<Router>
						<NavBar />
						<Routes>
							<Route exact path="/" element={<Navigate from="/" to="/home" exact />} />
							<Route exact path="/login" element={<Login />} />
							<Route exact path="/register" element={<Register />} />
							<Route exact path="/home" element={<ProtectedRoute component={Home} />} />
							<Route exact path="/profile" element={<ProtectedRoute component={Profile} />} />
							<Route exact path="/mentors" element={<MentorsDasboard />} />
						</Routes>
						<MyFooter />
					</Router>
				</AppState>
			</ProfileState>
		</>
	);
}

export default App;
