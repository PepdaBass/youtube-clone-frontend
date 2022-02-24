import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
  <div className="App">
    <NavBar />
    <Routes>
      <Route path="loginform" element={<LoginForm/>}/>
      <Route path="registration" element={<RegistrationForm/>}/>
    </Routes>
  </div>
  );
}

export default App;
