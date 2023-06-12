import React, { useState } from "react";
import { signup } from "../api/auth";
import { useNavigate } from "react-router-dom";
// import "./register.css";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handelSubmit = async () => {
    await signup({ name, email, password })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="auth-form">
      <h1> Sign up </h1>

      <form className="register-form" onSubmit={handelSubmit}>
        <label htmlFor="email">UserName</label>
        <input
          type="text"
          placeholder="userName"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email">Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => handelSubmit()}> CREATE AN ACCOUNT</button>
      </form>
      <button className="Link_btn" onClick={() => props.onFormSwitch("Login")}>
        Already have an account?Login here.
      </button>
    </div>
  );
};

export default Register;
