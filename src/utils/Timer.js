import React from 'react';


export default class Timer extends React.Component{
	constructor(props){
		super(props);
		this.state = {click: 0}
		this.counter = this.counter.bind(this);
	};

	counter(){
		this.setState((prevState,props) => ({
      	   click: prevState.click + 1
        }));
	};

	render(){
		return(
			<button onClick= {this.counter} >clicked {this.state.click}</button>

		)
	}
} 