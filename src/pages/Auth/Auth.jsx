import { useState } from "react";
import "./Auth.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader2 from "../../components/Loader2/Loader2";

const Auth = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState("signup");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phoneNumber: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const notify = (message) => toast(message);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (auth === "signup") {
      if (
        !user.name ||
        !user.password ||
        !user.age ||
        !user.phoneNumber ||
        !user.email
      ) {
        notify("All fields required");
        setIsLoading(false);
        return;
      }
    }
    if (auth === "login") {
      if (!user.email || !user.password) {
        notify("All fields required");
        setIsLoading(false);
        return;
      }
    }
    try {
      if (auth === "signup") {
        const response = await axios.post(
          import.meta.env.VITE_HOST_URL + "/user/new",
          user,
          { withCredentials: true }
        );

        if (!response.data.success) {
          notify(response.data.message);
          setIsLoading(false);
          return;
        }

        navigate("/home");
        setIsLoading(false);
      } else if (auth === "login") {
        const response = await axios.post(
          import.meta.env.VITE_HOST_URL + "/user/login",
          {
            email: user.email,
            password: user.password,
          },
          { withCredentials: true }
        );
        if (!response.data.success) {
          notify(response.data.message);
          setIsLoading(false);
          return;
        }
        navigate("/home");
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="auth-main">
      {isLoading && <Loader2 />}
      <div className="auth">
        <h2>{auth === "signup" ? "Sign up" : "Login"}</h2>
        <div className="auth-content">
          {auth === "signup" && (
            <div className="a-c-c">
              <label>name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="a-c-c">
            <label>email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          {auth === "signup" && (
            <div className="a-c-c">
              <label>phoneNumber</label>
              <input
                type="number"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleChange}
              />
            </div>
          )}
          {auth === "signup" && (
            <div className="a-c-c">
              <label>age</label>
              <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="a-c-c">
            <label>password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <p
          className="a-user"
          onClick={() => {
            const authTemp = auth === "signup" ? "login" : "signup";
            setAuth(authTemp);
          }}
        >
          {auth === "signup"
            ? "Already having an account? login"
            : "new user? Sign up"}
        </p>
        <button className="auth-btn" onClick={handleSubmit}>
          {auth === "signup" ? "Sign up" : "Login"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Auth;
