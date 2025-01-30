import { useEffect, useState } from "react";
import { useUser } from "../hooks/apiHooks"
import { UserWithNoPassword } from "hybrid-types/DBTypes";


const Profile = () => {
  const [user, setUser] = useState<UserWithNoPassword | null>(null);
  const {getUserByToken} = useUser();

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
      const userResponse = await getUserByToken(token as string);
      setUser(userResponse.user);
      } else {
        console.error('No token found');
      }
    };
    getUser();
  }, []);


  return (
    <>
    <div className="profile">
      <h2>Profile</h2>
      <p>Profile information</p>
      <ul>
        {user && (
          <>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
            <li>User level: {user.level_name}</li>
            <li>Created at: {new Date(user.created_at).toLocaleString('fi-FI')}</li>
          </>
        )}
      </ul>
    </div>
    </>
  )
}

export default Profile
