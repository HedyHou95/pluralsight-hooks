import React, { useRef, useEffect, useState } from 'react'
import logo from './logo.png'

export default function ImageToggleOnScroll(props) {
	const { primaryImg, secondImg } = props;
	const imageRef = useRef(null)
	const [inView, setInView] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	const isInView = ()=>{
		const rect = imageRef.current.getBoundingClientRect();
		return rect.top >=0 && rect.bottom <= window.innerHeight;
	}

	useEffect(()=>{
		setIsLoading(false)
		setInView(isInView())
		window.addEventListener('scroll', scrollHandler)
		return ()=>{
			window.removeEventListener('scroll', scrollHandler)
		}
	},[])

	const scrollHandler = ()=>{
		setInView(isInView())
	}

	// src={ isLoading? logo : inView ? secondImg : primaryImg} 

	return(
		<div>
			<img 
			width="200px"
			height="200px"
			src={ inView ? secondImg : primaryImg} 
			alt=""
			ref={imageRef}
			
			/>
		</div>
	)
}