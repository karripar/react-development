import { useUser } from "../hooks/apiHooks";
import {useForm} from "../hooks/formHooks";
import { RegisterCredentials } from "../types/localTypes";


interface RegisterFormProps {
  toggleRegister: () => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({toggleRegister}) => {

  const {postRegister} = useUser();

  const initValues: RegisterCredentials = {
    username: '',
    password: '',
    email: '',
  };

  const doRegister = async () => {
    try {
    const registerResult = await postRegister(inputs as RegisterCredentials);
    console.log('doRegister result: ', registerResult);
    if (registerResult) {
      console.log('register successful');
    }
  } catch (error) {
    console.error((error as Error).message);
    // TODO: Display failed register message

  }
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doRegister,
    initValues,
  );
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="regusername">Username</label>
          <input
            name="username"
            type="text"
            id="regusername"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="regEmail">Email</label>
          <input
            name="email"
            type="email"
            id="regEmail"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="regPassword">Password</label>
          <input
            name="password"
            type="password"
            id="regPassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Register</button>
        <button type="button" onClick={toggleRegister}>
          Already have an account? Login
        </button>
      </form>
    </>
  );
};

export {RegisterForm};
