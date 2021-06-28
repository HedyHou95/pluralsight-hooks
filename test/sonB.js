import React from 'react'

export default class SonB extends React.Component{
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div className="sonB">
				{this.props.value}
			</div>
		)
	}
}