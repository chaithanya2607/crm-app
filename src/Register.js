import * as React from "react";
import { AddUser} from "./AddUser";
import { EditUser } from "./EditUser";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import './App.css';

export function Register() {
  return (
    <form className="regform">
      <h2>Register</h2>
      <TextField style={{width:'500px',padding:'10px'}}
       id="standard-basic" type="text" placeholder="Email address" />
      <br></br>
      <TextField style={{width:'500px',padding:'10px'}}
       id="standard-basic" type="text" placeholder="First Name" />
      <br></br>
      <TextField style={{width:'500px',padding:'10px'}}
       id="standard-basic" type="text" placeholder="Last Name" />
      <br></br>
      <TextField style={{width:'500px',padding:'10px'}}
      id="standard-basic" type="password" placeholder="Password" />
      <br></br>
      <div class="dropdown">
  <button class="btn dropdown-toggle " type="button" data-toggle="dropdown">
 User Type

  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Admin</a>
    <a class="dropdown-item" href="#">Manager</a>
    <a class="dropdown-item" href="#">Employee</a>
  </div>
  </button>
  </div>
      <button type="button" class="btn btn-primary">Register</button>
    </form>
  );
}
