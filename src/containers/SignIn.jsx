import React, {Component} from 'react'
import '../styles/SignIn.css'
import { FadeLoader } from 'react-spinners';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loading: false,
      password: '',
      sendError: (err, msg) => this.props.handleError(err, msg),
      toHomePage: () => this.props.changeRoute('home'),
      toRegisterPage: () => this.props.changeRoute('register'),
   };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    // hide error message if user modifies input field
    if (this.props.showError)
      this.state.sendError(false, '');

     const name = event.target.type
     this.setState({[name]: event.target.value});
  }

  handleSignIn = () => {
    // show loading spinner
    this.setState({loading: true})

    const {email, password, sendError, toHomePage} = this.state;

     fetch('https://rocky-dawn-33996.herokuapp.com/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
           email: email,
           password: password,
        })
     })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          toHomePage();
        }
        else
          sendError(true, 'Invalid credentials')
      });

      // hide loading spinner
      this.setState({loading: false})
 }

  render() {
    const {email, loading, password, toRegisterPage} = this.state;

    return (
      <article className='middle'>
           <main>
                <h1>Sign In</h1>

                <label>Email:</label>
                <input className='inputField' type="email" value={email} placeholder='name@email.com' onChange={this.handleChange} />

                <label>Password:</label>
                <input className='inputField' type="password" value={password} placeholder='password'
                       onChange={this.handleChange} />

                <input className='submit' onClick={this.handleSignIn} type="submit" value="Sign in" />

                <button className='register' type="submit" onClick={toRegisterPage}>Register</button>

                <div className='spinner'>
                  <FadeLoader  color={'#FFFFFF'} loading={loading} />
                </div>
           </main>
      </article>
    );
  }
}

export default SignIn;
