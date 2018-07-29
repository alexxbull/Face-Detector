import React, {Component} from 'react'
import '../styles/SignIn.css'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmedPassword: '',
      toHomePage: () => this.props.changeRoute('home'),
   };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
     const name = event.target.name
     this.setState({[name]: event.target.value});
  }

  render() {
    return (
      <div className='middle'>
         <form onSubmit={this.state.toHomePage}>
           <h1>Sign Up</h1>

           <label>Email:</label>
           <input className='inputField' name='email' type="email" value={this.state.email} onChange={this.handleChange} />

           <label>Password:</label>
           <input className='inputField' name='password' type="password" value={this.state.password} onChange={this.handleChange} />

           <label>Confirm Password:</label>
           <input className='inputField' name='confirmedPassword' type="password" value={this.state.confirmedPassword} onChange={this.handleChange} />

           <input type="submit" value="Register" />
         </form>
      </div>
    );
  }
}

export default Register;
