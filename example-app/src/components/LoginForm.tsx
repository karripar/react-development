import { useForm } from '../hooks/formHooks';
import {Credentials} from '../types/localTypes';
import { useUserContext } from '../hooks/ContextHooks';

interface LoginFormProps {
  toggleRegister: () => void;
}

// LoginForm.tsx
const LoginForm: React.FC<LoginFormProps> = ({toggleRegister}) => {

  const initValues: Credentials = {
    username: '',
    password: '',
  };

  const { handleLogin } = useUserContext();

  const doSubmit = async () => {
     try {
         handleLogin(inputs as Credentials);
     } catch (e) {
         console.log((e as Error).message);
     }
  }

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doSubmit,
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
        <button type="button" onClick={toggleRegister}>
          Create an account instead
        </button>
      </form>
    </>
  );
};

export default LoginForm;
