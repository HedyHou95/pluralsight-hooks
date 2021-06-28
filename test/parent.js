import React from 'react'
import SonA from './sonA'
import SonB from './sonB'
import logo from './logo.png'

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
			<img 
			width="200px"
			height="200px"
			src={logo} alt=""/>
			<SonA 
				value={this.state.name}
				onChange={this._onChange.bind(this)}
			></SonA>
			<SonB value={this.state.name}></SonB>
			</div>
		)
	}
}