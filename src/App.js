import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import React, { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import Home from "./Components/Home/Home";


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const jwt = localStorage.getItem('token');
    
    try{
      const decodedUser = jwt_decode(jwt);
      setUser(decodedUser);
    
    } catch{}
  }, [])


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="home" element={() => {
          if (!user) {
            return <LoginForm />
          }
          else {
            return <Home user={user} />
          }
        }} />
        <Route path="loginform" element={<LoginForm user={user}/>} />
        <Route exact path="loginform/registration" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
}

export default App;
