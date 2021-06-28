import React, { useRef } from 'react'

export default function ImageToggleOnMouseOver(props) {
	const { primaryImg, secondImg } = props;
	const imageRef = useRef(null)
	return(
		<div>
			hello
			<img 
			width="200px"
			height="200px"
			src={primaryImg} 
			alt=""
			ref={imageRef}
			onMouseOver={()=>{
				imageRef.current.src = secondImg
			}}
			onMouseOut={()=>{
				imageRef.current.src = primaryImg
			}}
			/>
		</div>
	)
}