import { NavLink, useNavigate } from "react-router-dom";
import "./SideBar.scss";
import axios from "axios";

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_HOST_URL + "/user/logout",
        { withCredentials: true }
      );

      navigate("/authentication");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar-main">
        <div className="sidebar-m-1">
          <i className="fa-solid fa-magnifying-glass-location"></i>
          <p>Events Finder</p>
        </div>
        <div className="sidebar-m-2">
          <p>hello, Ameer khan</p>
        </div>
        <div className="sidebar-m-3">
          <NavLink className="s-m-2-d" to={"/home"}>
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
          </NavLink>
          <NavLink className="s-m-2-d" to={"/application"}>
            <i className="fa-solid fa-bell"></i>
            <p>Application</p>
          </NavLink>
          <NavLink className="s-m-2-d" to={"/add-events"}>
            <i className="fa-solid fa-square-plus"></i>
            <p>Add Events</p>
          </NavLink>
        </div>
        <div className="sidebar-m-4">
          <div className="sidebar-m-4-m" onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket"></i>
            <p>log out</p>
          </div>
        </div>
      </div>
      <div className="sidebar-dup"></div>
    </div>
  );
};

export default SideBar;
