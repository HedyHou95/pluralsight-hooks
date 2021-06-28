import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/site.css";

export default function MyApp({Component, pageProps}) {
	return <Component {...pageProps}/>
}