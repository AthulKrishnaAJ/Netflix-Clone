import React, {useState} from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { signUp, login } from '../../firebase.js'
import netflixSpinner from '../../assets/netflix_spinner.gif'

function Login() {

  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({})

  const handleValidation = () => {
    let isValid = false
    let validations = {}

    if(!name.trim()){
      validations.nameError = 'Field is required'
      isValid = false
    }
    if(!email.trim()){
      validations.emailError = 'Field is required'
      isValid = false
    }

    if(!pass.trim()){
      validations.passError = 'Field is required'
      isValid = false
    }

    setError(validations)
    return isValid
  }

  const userAuth = async (event) => {
    event.preventDefault();
    if(handleValidation()){
      setLoading(true)
      try {
        if (signState === 'Sign In') {
            await login(email, pass)
        } else {
            await signUp(name, email, pass)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
      }

    }
  }

  const {nameError, emailError, passError} = error

  const errorStyle = {
    fonSize : '12px',
    color: 'red'
  }

  return (
    loading ? (
      <div className="loading-spinner">
        <img src={netflixSpinner} alt="" />
      </div>
    ) : (
      <div className="login">
        <img src={logo} alt="" className="login-logo" />
        <div className="login-form">
          <h1>{signState}</h1>
          <form>
            {/* Show name input and validation error for sign up */}
            {signState === 'Sign Up' && (
              <>
                {nameError && <p style={errorStyle}>{nameError}</p>}
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  placeholder="Your name"
                />
              </>
            )}
            {/* Email input and validation */}
            {emailError && <p style={errorStyle}>{emailError}</p>}
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Email"
            />
            {/* Password input and validation */}
            {passError && <p style={errorStyle}>{passError}</p>}
            <input
              value={pass}
              onChange={(event) => setPass(event.target.value)}
              type="password"
              placeholder="Password"
            />
            <button onClick={userAuth} type="submit">
              {signState}
            </button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState === 'Sign In' ? (
              <p>
                New to Netflix? <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span>
              </p>
            ) : (
              <p>
                Already have an account? <span onClick={() => setSignState('Sign In')}>Login In Now</span>
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export {
    Login
}
