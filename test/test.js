import React from 'react'
import Son from './son'


export default class Parent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: 'hello world'
		}
	}

	_onChange(e) {
		this.setState({
			name: e.target.value
		})
	}

	render() {
		return (
			<div className="parent">
				<Son 
					value={this.state.name}
					onChange={this._onChange.bind(this)}
				>
				</Son>
				<p>{this.state.name}</p>
			</div>
		)
	}
}