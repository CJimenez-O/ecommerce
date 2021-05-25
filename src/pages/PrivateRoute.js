import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// if user is logged in then creates a route with the params passed from APP.js else redirect to home page
// use children to return what is in private route
// rest operator grabs params when component is used
const PrivateRoute = ({ children, ...rest }) => {
	const { user } = useAuth0();
	return (
		<Route
			{...rest}
			render={() => {
				return user ? children : <Redirect to="/"></Redirect>;
			}}
		></Route>
	);
};

export default PrivateRoute;
