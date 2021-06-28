import React from 'react'

import ImageToggleOnScroll from './imageToggleOnScroll'

import Publisher from '../assets/publisher.png'
import Dispatcher from '../assets/dispatcher.png'


export default function ImageChangeOnScroll() {
	return(
		<div>
			<ImageToggleOnScroll
				primaryImg={Publisher}
				secondImg={Dispatcher}>
			</ImageToggleOnScroll>
			<ImageToggleOnScroll
				primaryImg={Publisher}
				secondImg={Dispatcher}>
			</ImageToggleOnScroll>
			<ImageToggleOnScroll
				primaryImg={Publisher}
				secondImg={Dispatcher}>
			</ImageToggleOnScroll>
			<ImageToggleOnScroll
				primaryImg={Publisher}
				secondImg={Dispatcher}>
			</ImageToggleOnScroll>
			<ImageToggleOnScroll
				primaryImg={Publisher}
				secondImg={Dispatcher}>
			</ImageToggleOnScroll>
			<ImageToggleOnScroll
				primaryImg={Publisher}
				secondImg={Dispatcher}>
			</ImageToggleOnScroll>
		</div>
	)
}
