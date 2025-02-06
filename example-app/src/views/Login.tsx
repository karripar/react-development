import { useState } from "react"
import LoginForm from "../components/LoginForm"
import {RegisterForm} from "../components/RegisterForm"

const Login = () => {
  // state for toggling between login and register form
  const [displayRegister, setDisplayRegister] = useState(false);

  const toggleRegister = () => {
    setDisplayRegister(!displayRegister);
  }

  return (
    <>
    {displayRegister ? <RegisterForm /> : <LoginForm toggleRegister={toggleRegister}/>}
    <button onClick={toggleRegister}>
      {displayRegister ? "Already have an account? Login" : "Create an account"}
    </button>
    </>
  )
}

export default Login
