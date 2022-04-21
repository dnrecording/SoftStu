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
    if (userSignin.status === 200) {
      navigate("/");
      localStorage.setItem("id", userSignin.data.id);
      // set credential
    }
  }

  const onSubmit = (authen_data) => {
    authen(authen_data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {
        <div class="bg">
          <img src="https://mdbootstrap.com/img/Photos/Others/images/76.jpg"></img>
          <div className="App">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                  <Card className="card-size">
                    <div class="row">
                      <div class="ps-5 pb-3 pt-3 pe-5">
                        <br></br>
                        <h3 class="text-center">Sign In</h3>
                        <br></br>
                        <h3 class="text-center">THAMMA</h3>
                        <br></br>
                        <br></br>
                        <br></br>
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
