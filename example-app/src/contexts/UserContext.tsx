// UserContext.tsx
import React, {createContext, useState} from 'react';
import {UserWithNoPassword} from 'hybrid-types/DBTypes';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {AuthContextType, Credentials} from '../types/localTypes';
import {useNavigate, useLocation} from 'react-router';

const UserContext = createContext<AuthContextType | null>(null);

const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<UserWithNoPassword | null>(null);
  const {postLogin} = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();

  // login, logout and autologin functions are here instead of components
  const handleLogin = async (credentials: Credentials) => {
    try {
      const loginResult = await postLogin(credentials);
      console.log('doLogin result: ', loginResult);
      if (loginResult) {
        console.log('Login successful');
        localStorage.setItem('token', loginResult.token);
        const userResponse = await getUserByToken(loginResult.token);
        setUser(userResponse.user);
        navigate('/');
      } else {
        console.log('Login failed, check credentials');
      }
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      setUser(null);
      navigate('/');
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
  const location = useLocation();

  const handleAutoLogin = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      const userResponse = await getUserByToken(token as string);
      setUser(userResponse.user);
      const origin = location.state.from.pathname || '/';
      navigate(origin);
    } catch (e) {
      console.log('Auto login failed, user not found');
      console.log((e as Error).message);
    }
  };

  return (
    <UserContext.Provider
      value={{user, handleLogin, handleLogout, handleAutoLogin}}
    >
      {children}
    </UserContext.Provider>
  );
};
export {UserProvider, UserContext};
