import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";

function Profile() {
  const [data, setData] = useState({});
  const userID = "62526df6d30be6196cd5f864";
  const url = `https://localhost:7247/api/user/${userID}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The name you entered was: ${name}`);
  };

  useEffect(() => {
    (async () => {
      const users = await axios.get(url);
      setData(Object.values(users.data));
      // [0]: id, [1]: username, [2]: password, [3]: email, [4]: fname, [5]: lname, [6]: img
    })();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div class="container">
        <div class="row gutters">
          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="card h-100">
              <div class="card-body">
                <div class="account-settings">
                  <div class="user-profile">
                    <div class="user-avatar">
                      <img
                        src={data[6]}
                        //{data[6]}
                        alt="src img"
                      ></img>
                    </div>
                    <h5 class="user-name" alt="name">
                      {data[4] + " " + data[5]}
                    </h5>
                    {/* {data[4] + " " + data[5]} */}
                    <h6 class="user-email" alt="email">
                      {data[3]}
                    </h6>
                    {/* {data[3]} */}
                  </div>
                  <div class="row gy-5">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="d-flex flex-column text-center">
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          class="mx-5 mb-1 btn btn-secondary"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          class="mx-5 mt-1 btn btn-danger"
                        >
                          Ban
                        </button>
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
                    <h6 class="mb-2 text-primary">Personal Details</h6>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="fName">First Name</label>
                      <input
                        type="name"
                        class="form-control"
                        id="fName"
                        placeholder={data[4]}
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
                        placeholder={data[5]}
                      ></input>
                    </div>
                  </div>
                </div>
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mt-3 mb-2 text-primary">Email</h6>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="eMail">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="eMail"
                        placeholder={data[3]}
                      ></input>
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="sTate">State</label>
                      <input
                        type="text"
                        class="form-control"
                        id="sTate"
                        placeholder="Enter State"
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
  );
}

export default Profile;
