import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
	const isAuthenticated =  true;    //localStorage.getItem("isAuthenticated");

	if (isAuthenticated) return <Component />;
	return <Navigate to="/login" />;
};

export default ProtectedRoute;
