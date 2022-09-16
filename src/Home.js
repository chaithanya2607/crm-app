import React from 'react';
import "./App.css";
import { AddUser } from './AddUser';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';



export default function Home() {
  const navigate=useNavigate();
  return (
    <div className='home'>
      <h1 id="h1">CMR APPLICATION</h1>
   
      <button class="btn dropdown-toggle usebut" type="button" data-toggle="dropdown">
 User Type
  <div class="dropdown-menu ">
    <a class="dropdown-item" href="#">Admin</a>
    <a class="dropdown-item" href="#">Manager</a>
    <a class="dropdown-item" href="#">Employee</a>
  </div>
  
  </button>
  <div className='logreg'>
  <Button id="logbut"
       onClick={() => navigate("/login")} 
      type="button" class="btn btn-success">Login</Button><br></br>
       <Button id="regbut"
       onClick={() => navigate("/register")} type="button" class="btn btn-primary">Register</Button>
  </div>
      
    </div>
  );
}
