import React, { Component } from 'react'
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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      loading: false,
      password: '',
      errorMessage: '',
      showError: '',
      toHomePage: () => this.props.changeRoute('home'),
   };

    this.handleChange = this.handleChange.bind(this);
  }

  handleError = (err, errMessage) => {
    this.setState({
      errorMessage: errMessage,
      showError: err,
    })
};

  handleChange(event) {
    if (this.state.showError)
      this.setState({showError: false});

     const name = event.target.name
     this.setState({[name]: event.target.value});
  }

  handleRegister = () => {
    // show loading spinner
    this.setState({loading: true})

    const { email, name, password } = this.state;

    // handle insufficient input to register
    if (!email || !name || !password)
      this.handleError(true, 'Incomplete registration form')
    else
    {
     fetch('https://rocky-dawn-33996.herokuapp.com/register', {
       method: 'post',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({
          email: this.state.email,
          name: this.state.name,
          password: this.state.password,
       })
     })
     .then(response => response.json())
     .then(user => {
       if (user.id) {
          this.props.loadUser(user);
          this.state.toHomePage();
      }
      else {
        // handle email already registered error
        this.handleError(true, 'The provided email has already been registered to another ')
      }
     })
   }
   // hide loading spinner
   this.setState({loading: false})
 }

  render() {
    return (
      <article className='middle'>
        <DivWithErrorHandling showError={this.state.showError} errorMessage={this.state.errorMessage}>
            <main>
                 <h1>Register</h1>

                 <label>Name:</label>
                 <input className='inputField' name='name' type="text" value={this.state.name} placeholder='name' onChange={this.handleChange} />

                 <label>Email:</label>
                 <input className='inputField' name='email' type="email" value={this.state.email} placeholder='name@email.com' onChange={this.handleChange} />

                 <label>Password:</label>
                 <input className='inputField' name='password' type="password" value={this.state.password} placeholder='password' onChange={this.handleChange} />

                 <input onClick={this.handleRegister} className='submit' type="submit" value="Register" />

                 <div className='spinner'>
                   <FadeLoader  color={'#FFFFFF'} loading={this.state.loading} />
                 </div>
          </main>
        </DivWithErrorHandling>
      </article>
    )
  }
}

export default Register;
