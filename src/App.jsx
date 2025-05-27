import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./components/Loader/Loader";
import SideBar from "./components/SideBar/SideBar";
import { useDispatch } from "react-redux";
import {addUser} from "./config/userSlice";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAuth = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        import.meta.env.VITE_HOST_URL + "/user/auth",
        { withCredentials: true }
      );

      if (!response.data.success) {
        navigate("/authentication");
        setIsLoading(false);
      } else {
        dispatch(addUser(response.data.data))
        if (
          location.pathname == "/authentication" ||
          location.pathname == "/"
        ) {
          navigate("/home");
          setIsLoading(false);
          return;
        }
        navigate(location.pathname);
        setIsLoading(false);
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleAuth();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="app">
      {location.pathname != "/authentication" && <SideBar />}
      <Outlet />
    </div>
  );
};

export default App;
