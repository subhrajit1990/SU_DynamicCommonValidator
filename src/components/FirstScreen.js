import React,{Fragment} from 'react';
import CV from '../utils/CommonValidator';
import Timer from '../utils/Timer'

export default class FirstScreen extends React.Component{
	constructor(props){
		super(props);
		this.submit = this.submit.bind(this);
	}


	submit(e){
		if(e) e.preventDefault();
		const formData = {};
	 	var form = this.refs,
        form_validator_check = {
            phone: {
                verify: CV.nullcheck,
                message: "Please enter the phone number"
            },
            email: {
                verify: CV.nullcheck,
                message:"Please enter the correct email"
            }            
        };

  		if(CV.CommonValidator(form,form_validator_check )){
  			console.log("error true");
  		}else{
  			console.log("Error false");
  		}		
		  console.log('FORM DATA ', formData);
	};
	

	render(){
		return(		

			<Fragment>
				<Timer/>	
				<form onSubmit ={this.submit}>
	      			<input ref="phone" className="phone" type="phone"  name="phone"/>
	            	<input ref="email" className="email" type="email"  name="email"/>
	            	<input ref="text" className="name" type="text" name="firstName" />
	           		<input type="submit" value="Submit"/>
	   			 </form>
 			</Fragment>
		);
	}
}


