import "./App.css";
import * as React from "react";
import { Register } from "./Register";
import LeadStatus from "./LeadStatus";
import { Navigate,  Routes, Route,useNavigate} from "react-router-dom";
import { Login } from "./Login";
import ServiceRequest from "./ServiceRequest";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Home from "./Home";


function App() {
  
  return (
    <div className="App">
      <Navbar />
    {/* <Home/> */}
     
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/leadstatus" element={<LeadStatus/>} />
    <Route path="/servicerequest" element={<ServiceRequest/>} />
  </Routes>  
    </div>
  );
}

function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar>
      <Toolbar>
        <Button 
        color="inherit"
        onClick={() => navigate("/")}>Home</Button>
           <Button 
        color="inherit"
        onClick={() => navigate("/login")}>Login</Button>
        <Button 
        color="inherit"
        onClick={() => navigate("/register")}>Register</Button>
        <Button 
        color="inherit"
        onClick={() => navigate("/leadstatus")}>Lead Status</Button>
        <Button
        color="inherit"
        onClick={() => navigate("/servicerequest")}>Service Request</Button>
     
      </Toolbar>
    </AppBar>
  );
}
export default App;
