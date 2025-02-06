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
    {displayRegister ? <RegisterForm toggleRegister={toggleRegister} /> : <LoginForm toggleRegister={toggleRegister}/>}
    </>
  )
}

export default Login
