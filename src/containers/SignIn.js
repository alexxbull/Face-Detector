import React, {Component} from 'react'
import '../styles/SignIn.css'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      toHomePage: () => this.props.changeRoute('home'),
      toRegisterPage: () => this.props.changeRoute('register'),
   };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
     const name = event.target.type
     this.setState({[name]: event.target.value});
  }

  render() {
    return (
      <div className='middle'>
         <form onSubmit={this.state.toHomePage}>
           <h1>Sign In</h1>

           <label>Email:</label>
           <input className='inputField' type="email" value={this.state.email} onChange={this.handleChange} />

           <label>Password:</label>
           <input className='inputField' type="password" value={this.state.password} onChange={this.handleChange} />

           <input type="submit" value="Submit" />
           
           <button className='register' onClick={this.state.toRegisterPage}>Register</button>
         </form>
      </div>
    );
  }
}

export default SignIn;
