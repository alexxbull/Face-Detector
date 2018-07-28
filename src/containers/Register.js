import React, {Component} from 'react'
// import styles from '../styles/Signin.module.css'
import '../styles/Register.css'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmedPassword: '',
   };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
     const name = event.target.name
     this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A form was submitted: ' + this.state.email + ' ' + this.state.password + ' ' + this.state.confirmedPassword);
    event.preventDefault();
  }

  render() {
    return (
      <div className='middle'>
         <form onSubmit={this.handleSubmit}>
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
