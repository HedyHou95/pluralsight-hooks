import React from 'react';

export default class Example extends React.Component {
	constructor(props) {
		super(props)
		this.state ={
			count: 0
		}
	}

	_onClick() {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		return (
			<div>
				<div>hello world</div>
				<p>You clicked {this.state.count} times</p>
				<button onClick ={this._onClick.bind(this)}>
					Click me
				</button>
			</div>
		)
	}
}