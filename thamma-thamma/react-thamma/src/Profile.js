import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import axios from "axios";
import "./Profile.css";
import { Layout } from "./components/Layout";

function Profile() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const adminID = "62526df6d30be6196cd5f864"; // Admin ID
  // const userID = "62526df6d30be6196cd5f864"; // testing
  const userID = "625a9e738f59ed05920b6444"; // use credential to see your own profile && status : true
  const url = `https://localhost:7290/api/user/${userID}`;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function fetchEdit(edit_data) {
    let update_data = { ...edit_data, username: data[1], password: data[2], status: data[7] };
    const usersEdit = await axios.put(url, update_data);
    setData(Object.values(usersEdit.data));
    window.location.reload(false); // refresh window
  }

  const onSubmit = (edit_data) => {
    fetchEdit(edit_data)
  };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const deleteAcc = () => {
    // logout first then delete account
    (async () => {
      navigate("/", { replace: true });
      await axios.delete(url);
    })();
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    (async () => {
      const users = await axios.get(url);
      setData(Object.values(users.data));
      // [0]: id, [1]: username, [2]: password, [3]: email, [4]: fname, [5]: lname, [6]: img, [7]: status
    })();
  }, []);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Layout>
    <form onSubmit={handleSubmit(onSubmit)}>
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
                        alt="profile_img"
                      ></img>
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
                        <button
                          type="submit"
                          id="submit"
                          name="submit"
                          class="mx-5 mb-1 btn btn-secondary"
                        >
                          Save
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
                    <h5 class="mb-2 text-primary">Personal Details</h5>
                    <br></br>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="fName">First Name *</label>
                      <input
                        type="name"
                        class="form-control"
                        id="fName"
                        placeholder={data[4]}
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
                      ></input>
                      <p class="text-danger">{errors.fname?.message}</p>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="lName">Last Name *</label>
                      <input
                        type="name"
                        class="form-control"
                        id="lName"
                        placeholder={data[5]}
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
                      ></input>
                      <p class="text-danger">{errors.lname?.message}</p>
                    </div>
                  </div>
                </div>
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <br></br>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="eMail">Email *</label>
                      <input
                        type="email"
                        class="form-control"
                        id="eMail"
                        placeholder={data[3]}
                        {...register("email", {
                          required: true,
                          pattern:
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                      ></input>
                      <p class="text-danger">{errors.email?.message}</p>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="img">Image *</label>
                      <input
                        type="url"
                        class="form-control"
                        id="img"
                        placeholder={data[6]}
                        {...register("img")}
                      ></input>
                    </div>
                  </div>
                  <div class="text-end">
                    <br></br>
                  {data[0]!=adminID&&<a class="text-danger" onClick={handleShow}>Delete account</a>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm to delete account</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this account?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteAcc}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
{/* testing */}
<br></br>
<div class="text-center">
<Button class="btn btn-primary mx-2" onClick={() => {navigate("/profile/62526df6d30be6196cd5f864")}}>admin</Button>
<Button class="btn btn-primary mx-2" onClick={() => {navigate("/profile/62527dd6d30be6196cd5f865")}}>user1</Button>
<Button class="btn btn-primary mx-2" onClick={() => {navigate("/profile/62527e2cd30be6196cd5f866")}}>user2</Button>
<Button class="btn btn-primary mx-2" onClick={() => {navigate("/profile/625a9e738f59ed05920b6444")}}>user3</Button>
</div>
    </Layout>
  );
}

export default Profile;
