import React from "react";
import './style/App.css'
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Notfound from "./pages/Notfound";
import Navbar from "./components/UI/navbar/Navbar";
import OnePost from "./pages/OnePost";
import Login from "./pages/Login";

import RequireAuth from "./hoc/RequireAuth";
import EditePost from "./pages/EditePost";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
        <Route path="onePost/:id" element={<OnePost />} />
        <Route path="editePost/:id" element={
          <RequireAuth>
            <EditePost />
          </RequireAuth>
        } />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;
