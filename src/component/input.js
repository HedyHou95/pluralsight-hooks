import React, { useState, useEffect } from 'react';

export default function InputElement() {
	
	const [isLoading,setIsLoading] = useState(true)
	
	useEffect(()=>{

		setTimeout(()=>{
			setIsLoading(false)
			console.log(isLoading)
		}, 1000)
	})

	return (
		<div>
			{isLoading}
		</div>		
	)
}