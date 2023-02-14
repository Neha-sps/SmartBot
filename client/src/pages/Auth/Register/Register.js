import React, { useState, useRef } from "react";
import { Link} from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

import CustomInput from "../../../components/CustomInput/CustomInput";
import Button from "../../../components/CustomButtons/Button";
import CustomNotification from "../../../components/CustomNotification/CustomNotification";

import "../Login/login.css";

import useRegister from "./useRegister";

const Register = () => {

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

  const { state, handleInputChange, handleRegister } = useRegister();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValid = validator.current.allValid();
    if (!formValid) {
      validator.current.showMessages();
      forceUpdate(1);
      return;
    }else{
      handleRegister(e);   
    }
  }

  return(
    <>
      <div className="App">
        <form className="form">
          <CustomInput
            labelText="Name"
            id="name"
            name="name"
            formControlProps={{
              fullWidth: true
            }}
            handleInputChange={handleInputChange}
            type="text"
          />
          {validator.current.message('name', state.name, 'required')}
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
          {validator.current.message('email', state.email, 'required')}
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
            Submit
          </Button>
          <br/>
          <p>
            Already have an account?{" "}
            <Link to="/login" color="primary">Sign In</Link>
          </p>
        </form>
        <CustomNotification />
      </div>
    </>
  )
}
export default Register;