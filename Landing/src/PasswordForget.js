import React from 'react';
import { Link } from 'react-router-dom';

class PasswordForget extends React.Component {
  render() {
  
  	return (
       
        
        <section className="bg-account-pages height-100vh">
            <div className="display-table">
                <div className="display-table-cell">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card account-card">
                                    <div className="card-body">
                                        <div className="text-center mt-3">
                                            <h3 className="font-weight-bold">  <Link to="home-page" className="text-dark text-uppercase account-pages-logo">Alumni Portal</Link></h3>
                                            <p className="text-muted">Reset Password</p>
                                        </div>
                                        <div className="p-3">
                                            <div className="alert alert-warning  text-center" role="alert">
                                                Enter your email address and we'll send you an email with instructions to reset your password.
                                            </div>
                                            <form>
                                                <div className="form-group">
                                                    <label for="email">Email</label>
                                                    <input type="password" className="form-control" id="email" placeholder="Enter Email" />
                                                </div>

                                                <div className="mt-3">
                                                    <button type="submit" className="btn btn-custom btn-block">Reset your Password</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        
  	);
  }
}

export default PasswordForget;