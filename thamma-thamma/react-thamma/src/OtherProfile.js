import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Profile.css";
import { Layout } from "./components/Layout";

function OtherProfile() {
  const { id } = useParams(); // read url param user id from other user item
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const adminID = "62526df6d30be6196cd5f864"; // Admin ID
  const userID = id;
  const url = `https://localhost:7290/api/user/${userID}`;

  let currentuser = localStorage.getItem("id");
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function fetchBan() {
    let ban_data = {
      username: data[1],
      password: data[2],
      email: data[3],
      fname: data[4],
      lname: data[5],
      img: data[6],
      status: "false",
    };
    const usersBan = await axios.put(url, ban_data);
    setData(Object.values(usersBan.data));
    window.location.reload(false); // refresh window
  }

  const onBan = () => {
    fetchBan();
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function fetchUnban() {
    let unban_data = {
      username: data[1],
      password: data[2],
      email: data[3],
      fname: data[4],
      lname: data[5],
      img: data[6],
      status: "true",
    };
    const usersUnban = await axios.put(url, unban_data);
    setData(Object.values(usersUnban.data));
    window.location.reload(false); // refresh window
  }

  const onUnban = () => {
    fetchUnban();
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    (async () => {
      // if (userID === currentuser) {
      //   navigate("/profile");
      // }
      if(currentuser === null){
        navigate("/login")
      } 
      else {
        const users = await axios.get(url);
        setData(Object.values(users.data));
        console.log(Object.values(users.data));
      }
    })();
  }, []);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Layout>
      <form>
        <div class="container">
          <div class="row gutters">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div class="card h-100">
                <div class="card-body">
                  <div class="account-settings">
                    <div class="user-profile">
                      <div class="user-avatar">
                        <img src={data[6]} alt="profile_img"></img>
                      </div>
                      <h5 class="user-name" alt="name">
                        {data[4] + " " + data[5]}
                      </h5>
                      <h6 class="user-email" alt="email">
                        {data[3]}
                      </h6>
                    </div>
                    <div class="row gy-5">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="d-flex flex-column text-center">
                          {/* need credential to identify current user */}
                          {adminID === currentuser && adminID !== userID && data[7] === "true" && (
                            <button
                              type="button"
                              id="ban"
                              name="ban"
                              class="mx-5 mt-1 btn btn-danger"
                              onClick={onBan}
                            >
                              Ban
                            </button>
                          )}
                          {/* need credential to identify current user */}
                          {adminID === currentuser && data[7] === "false" && (
                            <button
                              type="button"
                              id="unban"
                              name="unban"
                              class="mx-5 mt-2 btn btn-primary"
                              onClick={onUnban}
                            >
                              Unban
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div class="card h-100">
                <div class="card-body">
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h5 class="mb-2 text-primary">Personal Details</h5>
                      <br></br>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="fName">First Name</label>
                        <input
                          type="name"
                          class="form-control"
                          id="fName"
                          value={data[4]}
                        ></input>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="lName">Last Name</label>
                        <input
                          type="name"
                          class="form-control"
                          id="lName"
                          value={data[5]}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <br></br>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="eMail">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="eMail"
                          value={data[3]}
                        ></input>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="img">Image</label>
                        <input
                          type="url"
                          class="form-control"
                          id="img"
                          value={data[6]}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default OtherProfile;
