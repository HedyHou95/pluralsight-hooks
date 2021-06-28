import React from 'react'

export default class Son extends React.Component{
	constructor(props){
		super(props)
	}

	_onChange(e) {
		this.props.onChange(e);
	}

	render() {
		return (
			<div className="son">
			<input 
				type="text" 
				value={this.props.value} 
				onChange={this._onChange.bind(this)}/>
			</div>
		)
	}
}