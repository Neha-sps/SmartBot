import React, { useState, useRef } from "react";
import { Link} from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";
import CustomNotification from "../../../components/CustomNotification/CustomNotification";
import "./login.css";

import useLogin from "./useLogin";

const Login =()=>{
  const [, forceUpdate] = useState()
  const validator = useRef(
    new SimpleReactValidator(
      {
        element: message => {
          return <div className="error" color="error">{message}</div>;
        },
        autoForceUpdate: {forceUpdate: forceUpdate}
      }
    )
  )

  const { state, handleInputChange, handleLogin } = useLogin();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValid = validator.current.allValid();
    if (!formValid) {
      validator.current.showMessages();
      forceUpdate(1);
      return;
    }else{
      handleLogin(e);   
    }
  }

  //const classes = useStyles();
  return(
    <>
      <div className="App">
        <form className="form">
          <CustomInput
            labelText="Email"
            id="email"
            name="email"
            formControlProps={{
              fullWidth: true
            }}
            handleInputChange={handleInputChange}
            type="text"
          />
          {validator.current.message('email', state.email, 'required|email')}
          <CustomInput
            labelText="Password"
            id="password"
            name="password"
            formControlProps={{
              fullWidth: true
            }}
            handleInputChange={handleInputChange}
            type="password"
          />
          {validator.current.message('password', state.password, 'required')}
          <Button 
            type="button" 
            color="primary" 
            className="form__custom-button"
            onClick={(e) => handleSubmit(e) }
          >
            Log in
          </Button>
          <br/>
          <p>
            Don’t have an account?{" "}
            <Link to="/register" color="primary">Sign Up</Link>
          </p>
        </form>
      </div>
      <CustomNotification />
    </>
  )  
}

export default Login;