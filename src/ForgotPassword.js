import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
// import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

const emailValidationSchema = yup.object({
  email: yup
  .string()  
  .required("Why not fill the email?"), 
})
export function Addpassword() {

  const formik = useFormik({
    initialValues: { 
      password: ""
    },
    validationSchema: emailValidationSchema,
    onSubmit: (newPassword) => {    
      createPassword(newPassword);
    }
  })
   
  const createPassword = (newPassword) => {
    console.log("createPassword", newPassword)

    // fetch(`${API}/user`,{
    //   method: "POST",
    //   body: JSON.stringify(newPassword),
    //   headers: {
    //     "Content-Type": "application/json",
    //   }
    // })
    // .then((data) => data.json())
    // .then(() => navigate("/user"));
  }
   
 const navigate  = useNavigate();

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="add-password">
        <TextField 
         id="password"
         name="password"
         value={formik.values.password} 
         onChange={formik.handleChange} 
         onBlur={formik.handleBlur}
         type="password" 
         label="Password" 
         error
         variant="standard" />
      {formik.touched.password && formik.errors.password? formik.errors.password : ''}
      <Button  type="submit" onClick={createPassword} variant="contained" >Change Password</Button>
      </form>
</div>
  );}
