import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./Profile.css";
import { Card } from "react-bootstrap";
import Fade from "react-bootstrap/Fade";
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
          <div className="overflow-heidden">
            <img className="backgroundImage" src="https://buddho.org/wp-content/uploads/sites/2/herfst-blad.jpg"></img>
          </div>
          <div className="App">
            <div className="container">
              <div className="row d-flex justify-content-start">
                <div className="col-md-4">
                  <Fade in>
                    <Card className="card-size" style={{width:'550px',margin:'150px 0px 0px 370px'}}>
                      <div class="row">
                        <div class="ps-5 pb-3 pt-3 pe-5">
                          <br></br>
                          <h3 class="text-center">Sign In</h3>
                          <br></br>
                          <img src="https://sv1.picz.in.th/images/2022/04/24/8Jfd4Q.png" style={{width:"70px",margin:"10px 0px 10px 200px"}}></img>
                          <h3 class="text-center font-weight-bold">
                            <strong>THAMMA</strong>
                          </h3>
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
                            <label className="mt-3">Password</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Enter password"
                              {...register("password")}
                            />
                          </div>
                          <div className="form-group d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-primary mt-4" type="submit">
                              Sign in
                            </button>
                            {/* <button
                              class="btn btn-primary"
                              type="button"
                              className="btn btn-link btn-block"
                              onClick={() => {
                                navigate("/register");
                              }}
                            >
                              <p>first time?</p>Register
                            </button> */}

                            <p className="forgot-password text-right text-center">
                              Not having an account? <a href="register">Register</a>
                            </p>

                          </div>
                        </div>
                      </div>
                    </Card>
                  </Fade>
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