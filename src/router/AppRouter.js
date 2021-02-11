import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const { checking, uid } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(startChecking());
	}, [dispatch, checking]);

	if (checking) {
		return <h5>Espere...</h5>;
	}

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoutes
						exact
						path="/login"
						component={LoginScreen}
						isAuthenticated={!!uid}
					/>
					<PrivateRoutes
						exact
						path="/"
						component={CalendarScreen}
						isAuthenticated={!!uid}
					/>
					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};

// la !! antes del uid es para convertir a booleano el string
