import * as React from "react";
import { Addpassword } from "./ForgotPassword";
import { AddUser } from "./AddUser";
import { TextField } from "@mui/material";
import './App.css';

export function Login() {
  return (
    <form className="login">
      <h2>Login</h2>
      <TextField style={{width:'500px',padding:'30px'}}
       type="text"  placeholder="Enter your regsitered Email address" /><br></br>
      <TextField style={{width:'500px',padding:'30px'}}
      type="password"  placeholder="Enter your password" /><br></br>
      <button 
      onClick={<AddUser/>}
      type="button" class="btn btn-success">Login</button><br></br>
      <a onClick={<Addpassword/>}
      type="button"><small>Forgot password?</small></a><br></br>
    </form>
  );
}
