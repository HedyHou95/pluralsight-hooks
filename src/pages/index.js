import React from 'react';
import App from '../component/app'
import Home from '../component/home'
import Speakers from '../component/speakers'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "../assets/site.css";

import EmailValidatingForm from '../component/emailValidatingForm'



// export default function Index() {
// 	return (
// 		<HashRouter>
// 			<Switch>
// 				<Route exact path='/' component={Home} />
// 				<Route exact path='/speakers' component={Speakers} />
// 			</Switch>
// 		</HashRouter>
// 	)
// }


export default function Index() {
	return (
		<div>
			<EmailValidatingForm></EmailValidatingForm>
		</div>
	)
}