import React, {Component} from 'react'
// import styles from '../styles/Signin.module.css'
import '../styles/SignIn.css'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      register: false,
   };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
     const name = event.target.type
     this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A form was submitted: ' + this.state.email + ' ' + this.state.password);
    event.preventDefault();
  }

  register(event) {
     this.setState({register: true});
 }

  render() {
    return (
      <div className='middle'>
         <form onSubmit={this.handleSubmit}>
           <h1>Sign In</h1>

           <label>Email:</label>
           <input className='inputField' type="email" value={this.state.email} onChange={this.handleChange} />

           <label>Password:</label>
           <input className='inputField' type="password" value={this.state.password} onChange={this.handleChange} />

           <input type="submit" value="Submit" />
           <div className='register'>
              <button onclick={this.register}>Register</button>
           </div>
         </form>
      </div>
    );
  }
}

export default SignIn;
