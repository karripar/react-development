import { useUserContext } from "../hooks/ContextHooks";


const Profile = () => {
  const {user} = useUserContext();

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
