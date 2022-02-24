import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import React, { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";


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
        <Route path="loginform" element={<LoginForm user={user}/>} />
        <Route exact path="loginform/registration" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
}

export default App;
