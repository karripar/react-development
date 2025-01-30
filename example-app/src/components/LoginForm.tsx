import { useNavigate } from 'react-router-dom';
import {useAuthentication} from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';
import {Credentials} from '../types/localTypes';

// LoginForm.tsx
const LoginForm = () => {
  const navigate = useNavigate();
  const {postLogin} = useAuthentication();

  const initValues: Credentials = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
    const loginResult = await postLogin(inputs as Credentials);
    console.log('doLogin result: ',loginResult);
    if (loginResult) {
      console.log('Login successful');
      localStorage.setItem('token', loginResult.token);
      navigate('/');
    }
  } catch (error) {
    console.error((error as Error).message);
    // TODO: Display failed login message

  }
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doLogin,
    initValues,
  );
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginusername">Username</label>
          <input
            name="username"
            type="text"
            id="loginusername"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
