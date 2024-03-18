import React from "react";
import './style/App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Notfound from "./pages/Notfound";
import Navbar from "./components/UI/navbar/Navbar";
import OnePost from "./pages/OnePost";
import Login from "./pages/Login";

import RequireAuth from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
import EditePost from "./pages/EditePost";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />}></Route>
          <Route path="about" element={<About />} />
          {/*К примеру, ранее был адрес - about-us, который потом переделали на about, но нужно 
        сделать переадресацию на новый адрес со старого, то поможет компонент - Navigate. 
        Ниже пример кода*/}
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Posts />} />
          <Route path="onePost/:id" element={<OnePost />} />
          <Route path="posts/editePost" element={
            <RequireAuth>
              <EditePost />
            </RequireAuth>
          } />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
