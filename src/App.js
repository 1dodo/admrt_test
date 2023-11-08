/** @format */

import { useState } from "react";
import "./App.css";
import Login from "./Layout/AuthPage/Login";
import Home from "./Layout/Home/Home";
import Navbar from "./Layout/Navbar/Navbar";
import Register from "./Layout/AuthPage/Register";
import CreateFolder from "./Layout/Modals/CreateFolder";
import Header from "./Layout/Header/Header";
import UploadFIleModal from "./Layout/Modals/UploadFIleModal";
import { Route, Routes } from "react-router-dom";
import Folder from "./Layout/Folder/Folder";
import { auth } from "./api/firebase";
import UserPage from "./Layout/UserPage/UserPage";
import SlideShow from './Layout/SlideShow'
import './Layout/style.css'

function App() {
  // const [user, setUser] = useState(true);
  const [visibleUploadModal, setVisibleUploadModal] = useState(false);
  const [visibleCreateFolderModal, setVisibleCreateFolderModal] =
  useState(false);
  
  let user = JSON.parse(localStorage.getItem("localUser"));
  auth.onAuthStateChanged((el) => {
    if (!user) {
      localStorage.setItem("localUser", JSON.stringify(el));
    }
  });
  return (
 <div className="login-container min-h-screen md:flex">
  <div className="md:w-1/2">
    <SlideShow/>
    </div>
    <div className="md:w-1/2 px-2 max-w-screen-2xl mx-auto h-full  md:block justify-center items-center">
      <Routes>
        <Route path='/' element={user ? <Home /> : <Login />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/home' element={user ? <Home /> : <Login />} />
        <Route path='/home/user/:id' element={user ? <UserPage /> : <Login />} />
        <Route
          path='/home/folder/:id'
          element={user ? <Folder /> : <Login />}
        />
      </Routes>
      </div>
      </div>
  );
}

export default App;
