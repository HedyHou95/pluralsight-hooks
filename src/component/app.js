import React from 'react';
import Home from './home';
import Speakers from './speakers'

export default function App({pageName}) {
	if(pageName === 'Home') {
		return <Home></Home>
	}

	if(pageName === 'Speakers') {
		return <Speakers></Speakers>
	}

	return <div>Not Found</div>
}