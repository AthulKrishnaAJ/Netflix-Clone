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

  const userAuth = async (event) => {
    event.preventDefault();
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

  return (
    loading ? <div className="loading-spinner">
      <img src={netflixSpinner} alt="" />
    </div> : 
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className='login-form'>
        <h1>{signState}</h1>
        <form >
            { signState === 'Sign Up' ? 
            <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder='Your name'/> : <></> }
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder='Email'/>
            <input value={pass} onChange={(event) => setPass(event.target.value)} type="password" placeholder='Password'/>
            <button onClick={userAuth} type='submit'>{signState}</button>
            <div className="form-help">
                <div className="remember">
                    <input type="checkbox" />
                    <label htmlFor="">Remember me</label>
                </div>
                <p>Need Help ?</p>
            </div>
        </form>
        <div className="form-switch">
            { signState === 'Sign In' ? <p>New to Netflix ? <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span></p> :
                    <p>Already have an account ? <span onClick={() => setSignState('Sign In')}>Sign In Now</span></p> }
        </div>
      </div>
    </div>
  )
}

export {
    Login
}
