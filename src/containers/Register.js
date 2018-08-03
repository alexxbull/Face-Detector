import React, { Component } from 'react'
import '../styles/SignIn.css'
import { FadeLoader } from 'react-spinners';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loading: false,
      name: '',
      password: '',
      sendError: (err, msg) => this.props.handleError(err, msg),
      toHomePage: () => this.props.changeRoute('home'),
   };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // hide error message if user modifies input field
    if (this.props.showError)
      this.state.sendError(false, '');

     const name = event.target.name
     this.setState({[name]: event.target.value});
  }

  handleRegister = () => {
    // show loading spinner
    this.setState({loading: true})

    const { email, name, password, sendError, toHomePage } = this.state;

    // handle insufficient input to register
    if (!email || !name || !password)
      sendError(true, 'Incomplete registration form')

    // retrieve and load user profile
    else
    {
     fetch('https://rocky-dawn-33996.herokuapp.com/register', {
       method: 'post',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({
          email: email,
          name: name,
          password: password,
       })
     })
     .then(response => response.json())
     .then(user => {
       // load user profile
       if (user.id) {
          this.props.loadUser(user);
          toHomePage();
      }
      // handle email already registered error
      else
        sendError(true, 'This email has already been registered')
     })
   }
   // hide loading spinner
   this.setState({loading: false})
 }

  render() {
    const {email, loading, name, password} = this.state;

    return (
      <article className='middle'>
            <main>
                 <h1>Register</h1>

                 <label>Name:</label>
                 <input className='inputField' name='name' type="text" value={name} placeholder='name' onChange={this.handleChange} />

                 <label>Email:</label>
                 <input className='inputField' name='email' type="email" value={email} placeholder='name@email.com' onChange={this.handleChange} />

                 <label>Password:</label>
                 <input className='inputField' name='password' type="password" value={password} placeholder='password' onChange={this.handleChange} />

                 <input onClick={this.handleRegister} className='submit' type="submit" value="Register" />

                 <div className='spinner'>
                   <FadeLoader  color={'#FFFFFF'} loading={loading} />
                 </div>
          </main>
      </article>
    )
  }
}

export default Register;
