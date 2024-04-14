import { NavLink } from "react-router-dom"
import { useUserAuthenticatedContext } from "../contexts/UserAuthenticatedContext/UserAuthenticatedContextProvider"
import { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthenticationContext/AuthContexts";
import { CgProfile } from "react-icons/cg";
import axiosClient from "../axios";
import Aos from "aos";
import { HiOutlineLogout } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
function Navbar() {
  const {  currentUser, setCurrentUser, userToken, setUserToken, logout } = useContext(AuthContext);
  const current_user = JSON.parse(localStorage.getItem('currentUser'));

  // check if the token exist ornot

 
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
          <NavLink className="nav-link active " aria-current="page" to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/detail" >detail</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle "  to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {currentUser.first_name}
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="#" ><CgProfile /> Profile</NavLink></li>
            <li><NavLink className="dropdown-item" to="#" ><MdSpaceDashboard /> Dashboard</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li onClick={logout} className="logout"><NavLink className="dropdown-item " to="#" ><HiOutlineLogout className="fs-4 z"/> Logout</NavLink></li>
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