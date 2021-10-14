import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import PasswordForget from './PasswordForget';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Root extends React.Component {
  render() {
  	return(
  		<BrowserRouter basename={'/'} >
		  	<Switch>
			   
			  <Route path={`${process.env.PUBLIC_URL}/login`} component={Login}/>    
			  <Route path={`${process.env.PUBLIC_URL}/password-forget`} component={PasswordForget}/>  
			    
			</Switch>
		</BrowserRouter>
  	);
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));

