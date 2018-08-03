import React, {Component} from 'react'
import '../styles/SignIn.css'
import { FadeLoader } from 'react-spinners';

const withErrorHandling = WrappedComponent => ({ showError, children, errorMessage }) => {
  return (
    <WrappedComponent>
      {showError && <div className="error-message">{`${errorMessage}`}</div>}
      {children}
    </WrappedComponent>
  );
};

const DivWithErrorHandling = withErrorHandling(({children}) => <div>{children}</div>)

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      errorMessage: '',
      showError: '',
      toHomePage: () => this.props.changeRoute('home'),
      toRegisterPage: () => this.props.changeRoute('register'),
   };

    this.handleChange = this.handleChange.bind(this);
  }

  handleError = (err, errMessage) => {
    this.setState({
      errorMessage: errMessage,
      showError: err,
    })
};

  handleChange = (event) => {
    if (this.state.showError)
      this.setState({showError: false})

     const name = event.target.type
     this.setState({[name]: event.target.value});
  }

  handleSignIn = () => {
    // show loading spinner
    this.setState({loading: true})

     fetch('https://rocky-dawn-33996.herokuapp.com/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
           email: this.state.email,
           password: this.state.password,
        })
     })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.state.toHomePage();
        }
        else
          this.handleError(true, 'Invalid credentials')
      });

      // hide loading spinner
      this.setState({loading: false})
 }

  render() {
    return (
      <article className='middle'>
        <DivWithErrorHandling showError={this.state.showError} errorMessage={this.state.errorMessage}>
           <main>
                <h1>Sign In</h1>

                <label>Email:</label>
                <input className='inputField' type="email" value={this.state.email} placeholder='name@email.com' onChange={this.handleChange} />

                <label>Password:</label>
                <input className='inputField' type="password" value={this.state.password} placeholder='password'
                       onChange={this.handleChange} />

                <input className='submit' onClick={this.handleSignIn}type="submit" value="Sign in" />

                <button className='register' type="submit" onClick={this.state.toRegisterPage}>Register</button>

                <div className='spinner'>
                  <FadeLoader  color={'#FFFFFF'} loading={this.state.loading} />
                </div>
           </main>
        </DivWithErrorHandling>
      </article>
    );
  }
}

export default SignIn;
