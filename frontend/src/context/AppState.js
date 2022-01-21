import { useState } from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
	const [courses, newCourses] = useState(null);

	return <AppContext.Provider value={{ courses }}>{props.children}</AppContext.Provider>;
};

export default AppState;
