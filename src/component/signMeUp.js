import React, { useState, useContext } from 'react';
import { ConfigContext } from '../App'

const SignMeUp = ({signUpCallback}) =>{
	const [email, setEmail] = useState("");
	const context = useContext(ConfigContext)
	return context.showSignMeUp === false ? null : (
		<div className="container">
			<div>
				<div className="content">
				 	<input 
				 	type="email" 
				 	placeholder="enter email" 
				 	name="email" 
				 	value={email}
				 	onChange={(e)=>{
				 		setEmail(e.target.value)
				 	}}
				 	/>
				 	&nbsp;
				 	<button 
				 	type="submit" 
				 	className="btn"
				 	disabled={!email.includes('@')}
				 	onClick={()=>{
				 		signUpCallback(email)
				 		setEmail('')
				 		alert('sigup confirmed')
				 	}}
				 	>Get Updates</button>
				</div>
			</div>
		</div>
	)
}

export default SignMeUp