import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { API } from "./global";
import { useParams } from "react-router-dom";

// export function EditUser() {

//   const { id } = useParams();

//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     fetch(`${API}/user/${id}`, {method: "GET",})
//     .then((data) => data.json())
//     .then((mv) => setUser(mv));
//   },     []);

  

//   return user ? <EditUser user={user}/> : "Loading...";   
 
// }


function EditUser({user}){

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [status, setStatus] = useState(user.status);
  const [service, setService] = useState(user.service);
 const navigate  = useNavigate();
 
  return (
    <div className="add-user-form">
    <TextField value={name} onChange={(event) => setName(event.target.value)}
      label="Name" variant="standard" />

    <TextField value={email} onChange={(event) => setEmail(event.target.value)}
      label="Email Address" variant="standard" />

    <TextField value={password} onChange={(event) => setPassword(event.target.value)}
      label="Password" variant="standard" />

    <TextField value={status} onChange={(event) => setStatus(event.target.value)}
      label="Lead Status" variant="standard" />

    <TextField value={service} onChange={(event) => setService(event.target.value)}
      label="Trailer" variant="standard" />

    <Button onClick={() => {
      const updateduser = {
        name: name,
        email: email,
        password: password,
        status: status,
        service: service,
      };
    
      // fetch(`${API}/user/${user.id}`,{
      //   method: "PUT",
      //   body: JSON.stringify(updateduser),
      //   headers: {
      //     "Content-Type": "application/json",
      //   }
      // })
      // .then((data) => data.json())
      // .then(() => navigate("/users"));
   
    }} 
      variant="contained" >Save</Button>
  </div>
  )
}