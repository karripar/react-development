import { useEffect } from "react"
import { useUserContext } from "../hooks/ContextHooks";


const Logout = () => {
  // call handlelogout function inside useEffect to logout the user (in user context)
  const {handleLogout} = useUserContext();
  useEffect(() => {
    handleLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1>Logout</h1>
    </>
  )
}

export default Logout
