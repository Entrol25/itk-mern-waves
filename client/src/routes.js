import React from 'react'
//import {Switch, Route, Redirect} from 'react-router-dom'
import { Switch, Redirect } from 'react-router-dom'
//import {InformationPage} from './pages/InformationPage'
//import {ContactPage} from './pages/ContactPage'

export const useRoutes = isAutentificated => {
	if (!isAutentificated)// it - kamasutra
	{
		return (
			<Switch>
				<Redirect to="/home/en" />
			</Switch>

		)
	}
	/* Vladilen =>
	if(!isAutentificated)//if(!isAutentificated) если не авторизован // if(isAutentificated) - если авторизован 
	{
		return(
			<Switch>
				<Route path="/information" exact>
					<InformationPage />
				</Route>
				<Route path="/contact" exact>
					<ContactPage />
				</Route>
				<Redirect to="/" />
			</Switch>
		)
	}
	else if(!isAutentificated)
	{
		return(
			<Switch>
				<Route path="/" exact>
					<InformationPage />
				</Route>
				<Redirect to="/" />
			</Switch>
		)
	}
	*/
}