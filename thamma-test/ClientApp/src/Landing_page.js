import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function Landing_page() {

  const{
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
              value: 8,
              message: "this need to be min length of 4",
            },
          })}
        />
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
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Register
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="#">log in?</a>
      </p>
    </form>
  );
}

export default Landing_page;
