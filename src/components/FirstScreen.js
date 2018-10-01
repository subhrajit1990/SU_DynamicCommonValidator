import React from 'react';
import CommonValidator from '../utils/CommonValidator';

export default class FirstScreen extends React.Component{
	constructor(props){
		super(props);
		this.submit = this.submit.bind(this);
	}


	submit(e){
		if(e) e.preventDefault();
		const formData = {};
		
  		var tempObj = this.refs;
  		CommonValidator(tempObj);

    // Object.keys(textmpObj).map((a,b)=> {
    // 	console.log(a);
    // 	//formData[a] = this.refs[a].value;
    // })
		
		  console.log('FORM DATA ', formData);
};
	

	render(){
		return(			
			<form onSubmit ={this.submit}>
      			<input ref="phone" className="phone" type="phone"  name="phone"/>
            	<input ref="email" className="email" type="email"  name="email"/>
            	<input ref="text" className="name" type="text" name="firstName" />
           		<input type="submit" value="Submit"/>
   			 </form>
		);
	}
}


