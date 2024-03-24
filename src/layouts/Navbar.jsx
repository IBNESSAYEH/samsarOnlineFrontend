import { NavLink } from "react-router-dom"
import { useUserAuthenticatedContext } from "../contexts/UserAuthenticatedContext/UserAuthenticatedContextProvider"
import { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthenticationContext/AuthContexts";
import axiosClient from "../axios";
import Aos from "aos";
function Navbar() {
  const {  currentUser, setCurrentUser, userToken, setUserToken, logout } = useContext(AuthContext);
  const current_user = JSON.parse(localStorage.getItem('currentUser'));

  // check if the token exist ornot

  if (!userToken) {
    window.location.href = "/login"
  }
  useEffect(() => {
    axiosClient.get('/currentUSer')
      .then(({ data }) => {
        setCurrentUser(data)
      });
    
  }, [])

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
    
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid ">
    <NavLink to="/"><img  src="/assets/photos/Logo.png" className="nav__logo" alt="" /></NavLink>
    <div >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className="nav-link active " aria-current="page" to="/" style={{ color: 'black', textAlign :'center', marginLeft: "1rem" }}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/detail" style={{ color: 'black', textAlign :'center', marginLeft: "1rem" }}>detail</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle " style={{ color: 'black', textAlign :'center', marginLeft: "1rem" }} to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {currentUser.first_name}
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="#" style={{ color: 'black', textAlign :'center', marginLeft: "1rem" }}>Profile</NavLink></li>
            <li><NavLink className="dropdown-item" to="#" style={{ color: 'black', textAlign :'center', marginLeft: "1rem" }}>Dashboard</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li onClick={logout}><NavLink className="dropdown-item" to="#" style={{ color: 'black', textAlign :'center', marginLeft: "1rem" }}>Logout</NavLink></li>
          </ul>
        </li>
      </ul>
     
    </div>
  </div>
  </div>
</nav>

    </>
  )
}

export default Navbar