import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Home from "./Components/Home/Home";
import axios from "axios";
import keys from "./API_keys.json";

function App() {
  const [user, setUser] = useState(null);
  const [currentVideoId, setVideoId] = useState("erJAduG46ac");
  const [search, setSearch] = useState("");
  const [listRelatedVideos, setListRelatedVideos] = useState([]);

  useEffect(() => {
    const jwt = localStorage.getItem("token");

    try {
      const decodedUser = jwt_decode(jwt);
      setUser(decodedUser);
    } catch {}
    getVideo();
  }, []);

  useEffect(() => {
    getRelatedVideos();
  }, [currentVideoId]);

  async function getVideo(request) {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${keys.googleAPIkey}`
    );
    console.log(response.data);
    // console.log(response);
    // console.log(response.data.items[0].id.videoId);
    try {
      setVideoId(response.data.items[0].id.videoId);
    } catch {}
    //setListRelatedVideos(response.data.items);

    //console.log(listRelatedVideos);
  }

  async function getRelatedVideos() {
    console.log("hello!");
    if (currentVideoId) {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${currentVideoId}&type=video&key=${keys.googleAPIkey}&part=snippet`
      );
      setListRelatedVideos(response.data.items.snippet);
      console.log("related video list", response.data.items);
    } else {
      console.log("No current video ID");
    }
  }

  return (
    <div className="App">
      <NavBar search={search} setSearch={setSearch} getVideo={getVideo} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              videoId={currentVideoId}
              listRelatedVideos={listRelatedVideos}
              setVideoId={setVideoId}
              getRelatedVideos={getRelatedVideos}
            />
          }
        />
        <Route
          path="home"
          element={() => {
            if (!user) {
              return <LoginForm />;
            } else {
              return <Home user={user} />;
            }
          }}
        />
        <Route path="loginform/*" element={<LoginForm user={user} />} />
        <Route
          exact
          path="loginform/registration"
          element={<RegistrationForm />}
        />
      </Routes>
    </div>
  );
}

export default App;
