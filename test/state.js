import React, { Component } from 'react';

export default class Input extends Component {
	constructor(props) {
		super(props);	

		this.state={
			name: 'hello'
		}	
	}

	_onChange(e) {
		// do something
	}


	componentDidMount() {
		setTimeout(()=>{
			this.setState({
				name:' world'
			})
			console.log(this.state.name); //world
		}, 1000)
	}

  render () {
    return (
      <div className='cp'>
        <input className='cp-input'  value={this.state.name}  onChange={this._onChange.bind(this)} type="text"/>				
      </div>
    );
  }
}
