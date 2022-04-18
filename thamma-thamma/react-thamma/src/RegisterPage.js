import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const navigate = useNavigate();
  const url = "https://localhost:7290/api/test";

  const{
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function fetchCreate(create_data) {
    var allData = { ...create_data, status: "true", img: "https://sv1.picz.in.th/images/2022/04/14/8sJnIe.jpg" }
    const userCreated = await axios(url,{method: "POST", data: allData});
    if (userCreated.status == 201){
      navigate("/login")
  }
    // console.log(userCreated)
  }

  const onSubmit = (data) => {
    //craete user
    fetchCreate(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Register</h3>

      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          {...register("username", {
            required: true,
            maxLength: {
              value: 20,
              message: "this need to be max length of 20",
            },
            minLength: {
              value: 4,
              message: "this need to be min length of 4",
            },
          })}
        />
        <p class="text-danger">{errors.username?.message}</p>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          {...register("password", {
            required: true,
            maxLength: {
              value: 20,
              message: "this need to be max length of 20",
            },
            minLength: {
              value: 8,
              message: "this need to be min length of 4",
            },
          })}
        />
        <p class="text-danger">{errors.password?.message}</p>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <p class="text-danger">{errors.email?.message}</p>
      </div>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          {...register("fname", {
            required: true,
            maxLength: {
              value: 20,
              message: "this need to be max length of 20",
            },
            minLength: {
              value: 4,
              message: "this need to be min length of 4",
            },
          })}
        />
        <p class="text-danger">{errors.fname?.message}</p>
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          {...register("lname", {
            required: true,
            maxLength: {
              value: 20,
              message: "this need to be max length of 20",
            },
            minLength: {
              value: 4,
              message: "this need to be min length of 4",
            },
          })}
        />
        <p class="text-danger">{errors.lname?.message}</p>
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Register
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="login">log in?</a>
      </p>
    </form>
  );
}

export default RegisterPage;