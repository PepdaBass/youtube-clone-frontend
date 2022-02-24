import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import axios from "axios";

const LoginForm = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(userInfo) {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/auth/login/",
      userInfo
    );
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let userInfo = {
      username: userName,
      password: password,
    };
    loginUser(userInfo);
  }

  return (
    <div className="login-form">
      <h3>Welcome! Please Sign in or Register</h3>
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          type="text"
          required
          className="user-name"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="password"
          required
          className="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Login</button>
        <button type="submit">Sign-Up</button>
      </form>
    </div>
  );
};

export default LoginForm;
