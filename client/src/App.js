// import logo from './logo.svg';
import './App.css';

// import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/css/material-dashboard-react.css?v=1.10.0";

// import Layouts from "./containers/Layout/Layout";
import Layout from "./containers/Layout/Layout";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import DashboardPage from "./pages/Dashboard/Dashboard";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route 
          path="/dashboard" 
          element={
            <Layout>
              <DashboardPage />
            </Layout>
          } 
        />
        <Route 
          path="/user" 
          element={
            <Layout>
              <UserProfile />
            </Layout>
          } 
        />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
