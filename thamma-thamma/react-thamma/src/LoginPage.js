import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./Profile.css";
import { Card } from "react-bootstrap";
// import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Tillana&display=swap');

function LoginPage() {
  const navigate = useNavigate();
  const url = `https://localhost:7290/authenticate`;

  const { register, handleSubmit } = useForm();

  async function authen(authenData) {
    const userSignin = await axios.get(url, {
      params: { username: authenData.username, password: authenData.password },
    });
    if (userSignin.status == 200) {
      navigate("/");
    }
    // console.log(userSignin); // credential
  }

  const onSubmit = (authen_data) => {
    authen(authen_data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {
        <div className="App">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-4">
                <div class="bg-img-login">
                  <Card className="card-size">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="https://mdbcdn.b-cdn.net/img/new/fluid/nature/015.webp" className="card-login" ></img> 
                      </div>
                      <div class="col-md-8 pb-3 pt-3 pe-3">
                      <h3 class="text-center">Sign In</h3>
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
                      <div className="form-group d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-primary mt-3" type="submit">
                          Sign in
                        </button>
                        <button
                          class="btn btn-primary"
                          type="button"
                          className="btn btn-primary btn-block"
                          onClick={() => {
                            navigate("/register");
                          }}
                        >
                          Register
                        </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </form>
  );
}

export default LoginPage;
