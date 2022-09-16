import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";



const emailValidationSchema = yup.object({
  name: yup
  .string()  
  .required("Why not fill the name?"),  
  email: yup
  .string()  
  .required("Why not fill the name?"), 
  password: yup
  .string() ,
  status: yup
  .string()
  .required("Why not fill the status?"),  
  service: yup
  .string()
  .required("Why not fill the service"),  
})

export function AddUser() {

  const formik = useFormik({
    initialValues: { 
      name: "", 
      email: "" , 
      password: ""
    },
    validationSchema: emailValidationSchema,
    onSubmit: (newUser) => {    
      createUser(newUser);
    }
  })
   
  const createUser = (newUser) => {
    console.log("createUser", newUser)

  //   fetch(`${API}/user`,{
  //     method: "POST",
  //     body: JSON.stringify(newUser),
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   })
  //   .then((data) => data.json())
  //   .then(() => navigate("/user"));
  // }
  }
 const navigate  = useNavigate();

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="add-user">
        <TextField 
         id="name"
         name="name"
         value={formik.values.name} 
         onChange={formik.handleChange} 
         onBlur={formik.handleBlur}
         type="name" 
         label="Name" 
         error
         variant="standard" />
      {formik.touched.name && formik.errors.name? formik.errors.name : ''}

        <TextField 
        id="email"
        name="email"
        value={formik.values.rating} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        type="email" 
        label="Email" 
        error
        variant="standard" />
      {formik.touched.email && formik.errors.email? formik.errors.email : ''}

        <TextField 
        id="password"
        name="password"
        value={formik.values.poster} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        type="password" 
        label="password" 
        error
        variant="standard" />
      {formik.touched.password && formik.errors.password? formik.errors.password : ''}

        <TextField 
       id="status"
       name="status"
       value={formik.values.summary} 
       onChange={formik.handleChange} 
       onBlur={formik.handleBlur}
       type="status" 
       label="Status" 
       error
       variant="standard" />
      {formik.touched.status && formik.errors.status? formik.errors.status : ''}

    <TextField 
       id="service"
       name="service"
       value={formik.values.service} 
       onChange={formik.handleChange} 
       onBlur={formik.handleBlur}
       type="service" 
       label="service" 
       error
       variant="standard" />
      {formik.touched.service && formik.errors.service? formik.errors.service : ''}
        <Button  type="submit" onClick={createUser} variant="contained" >Add User</Button>
      </form>

    </div>
  );
}