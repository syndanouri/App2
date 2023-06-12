import React, { useState } from "react";
import { signin } from "../api/auth";
import { isAuthenticated, setAuthentification } from "./helpers/auth";
import { useNavigate } from "react-router-dom";
// import "./login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handelSubmit = async () => {
    await signin({ email, password })
      .then((res) => {
        console.log(res);
        setAuthentification(res.data.token, res.data.found);
        if (isAuthenticated() && isAuthenticated().role === "admin") {
          navigate("/admin");
        } else if (isAuthenticated() && isAuthenticated().role === "user") {
          navigate("/user");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   useEffect(()=>{

  //   },[navigate])
  return (
    <div className="auth-form">
      <h1>Sign In</h1>
      <form className="login-form" onSubmit={handelSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => handelSubmit()}> CONNEXTION</button>
      </form>

      <button
        className="Link_btn"
        onClick={() => props.onFormSwitch("Register")}
      >
        Don't have an account?Register here.
      </button>
    </div>
  );
};

export default Login;
