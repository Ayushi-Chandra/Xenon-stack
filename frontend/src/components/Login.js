import React, { useContext, useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Formik } from "formik";
import { AppContext } from '../AppContext';

import { EmailOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const {setloggedIn} = useContext(AppContext)
  const navigate = useNavigate();
  

  const [showPassword, setShowPassword] = useState(false);
  const loginform = {
    email: "ayushi@mail.com",
    password: "1234",
  };
  const userSubmit = async(formdata) => {
    console.log(formdata);
    const response = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      if (response.status === 200) {
        console.log(response.status);
            console.log('success')
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Login Success!!👍",
        });
         //  session m store krwa lenge jisse 
         const data= await response.json();
         console.log(data); 
         setloggedIn(true);
        //  this will store user data in session
         sessionStorage.setItem('user',JSON.stringify(data));
        
      } else if (response.status === 300) {
        console.log(response.status);
                    console.log('something went wrong')
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Login Failed!!",
        });
      }
    }


  return (
    
    <div>
    <section className="vh-100 bg-image"
      style={{
        backgroundImage:'url("https://www.wallpaperup.com/uploads/wallpapers/2012/10/02/17732/d24d52e2ab9c7933e839687ecc369cac-700.jpg")'
      }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <h1 className="mb-5">Login</h1>

                <Formik
                  initialValues={{
                    password: "",
                    email: "",
                    
                  }}
                  onSubmit={userSubmit}
                 //validationSchema={SignupSchema}
                >
                  {({ values, handleChange, handleSubmit, errors }) => (
                    <form
                      onSubmit={handleSubmit}
                      className="mx-1 mx-md-4"
                    >
                      <div className="form-outline mb-4">
                      <TextField
                          value={values.lastname}
                          onChange={handleChange}
                          id="email"
                          sx={{ mt: 5 }}
                          fullWidth
                          label="Email"
                          type="text"
                          // className="form-control"
                        />

                        
                        
                      </div>


                      <div className="form-outline mb-4">
                      <TextField
                          value={values.lastname}
                          onChange={handleChange}
                          id="password"
                          sx={{ mt: 2}}
                          fullWidth
                          label="Password"
                          type="password"
                          
                        />

                      </div>
                      
                      <div className="form-check d-flex justify-content-start mb-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="form1Example3"
                        />
                        <label className="form-check-label" htmlFor="form1Example3">
                          {" "}
                          Remember password{" "}
                        </label>
                      </div>
                      <button className="btn btn-primary btn-lg btn-block" type="submit">
                        Login
                      </button>
                      
                      
                      
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
  );
};

export default Login;