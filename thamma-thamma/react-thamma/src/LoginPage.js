import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./Profile.css";

function LoginPage() {
  const navigate = useNavigate();
  const url = `https://localhost:7290/api/authenticate`;

  const {
    register,
    handleSubmit,
  } = useForm();

  const [usernamelogin, setUsernameLogin] = useState("");
  const [passwordlogin, setPasswordLogin] = useState("");

  const [isPass, setisPass] = useState(0);

  async function authen(authenData) {
    const userSignin = await axios.get(url, {
      params: { username: authenData.username, password: authenData.password },
    });
    if (userSignin.status == 200){
        navigate("/")
    }
    // console.log(userSignin); // credential
  }

  const onSubmit = (authen_data) => {
    authen(authen_data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Sign In</h3>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Username"
          {...register("username")}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          {...register("password")}
        />
      </div>
      <div className="form-group"></div>
      <button
        type="submit"
        className="btn btn-primary btn-block"
      >
        Submit
      </button>
      <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={()=>{navigate("/register")}}
      >
        Sign Up
      </button>
    </form>
  );
}

export default LoginPage;
