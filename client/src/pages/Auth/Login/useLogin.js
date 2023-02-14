import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  isLogin,
} from "../../../redux/actions/auth.action";
import authSelectors from "../../../redux/selectors/auth.selectors";

const useLogin =()=>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { logedIn } = useSelector(authSelectors);
  const { data, isSuccessful, isLoading } = logedIn;
 
  const [state , setState] = useState({
    email : "",
    password : ""
  })

  const handleInputChange = useCallback((e)=>{
    const {name , value} = e.target;
    setState(prevState => ({
      ...prevState,
      [name] : value
    }))
  });

  const handleLogin = useCallback((e) => {
    e.preventDefault();
    if(state.email !== "" && state.password !== "") {
      dispatch(isLogin(state))
    }
  });
  const handelNavigate = useCallback((pathname) => {
    navigate(pathname);
  }, []);
  useEffect(() =>{
    if(isSuccessful){
      handelNavigate('/dashboard')
    }
  },[isSuccessful])
  return {
    state,
    handleInputChange,
    handleLogin,
  }
}

export default useLogin;