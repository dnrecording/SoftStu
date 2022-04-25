import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Profile.css";
import { Layout } from "./components/Layout";

function Profile() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const adminID = "62526df6d30be6196cd5f864"; // Admin ID
  let currentuser = localStorage.getItem("id");
  const url = `https://localhost:7290/api/user/${currentuser}`;
  const urlPost = "https://localhost:7290/api/post/";

  const [show, setShow] = useState(false);
  const [postList, setPostList] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function fetchEdit(edit_data) {
    let update_data = {
      ...edit_data,
      username: data[1],
      password: data[2],
      status: data[7],
    };
    const usersEdit = await axios.put(url, update_data);
    const users = await axios.get(url);
    setData(Object.values(users.data));

    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("eMail").value = "";
    document.getElementById("img").value = "";
  }

  const onSubmit = (edit_data) => {
    fetchEdit(edit_data);
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const deleteAcc = () => {
    // logout first then delete account
    (async () => {
      
      for(var i=0;i<postList.length;i++){
        // delete every post likes of this user
        if(postList[i].like.includes(currentuser)){
          postList[i].like.splice(postList[i].like.indexOf(currentuser),1);
        }

        for(var j=postList[i].comments.length-1;j>=0;j--){
          
          if(postList[i].comments[j].includes(currentuser)){
            if(postList[i].comments[j].indexOf(currentuser) != 1){
              postList[i].comments[j].splice(postList[i].comments[j].indexOf(currentuser),1);
            }
          }

          if(postList[i].comments[j][1] === currentuser){
            postList[i].comments.splice(j,1);
          }
        }

        // delete every comments of this user
        await axios.put(urlPost + postList[i].id, postList[i]);
      }

      // delete user
      await axios.delete(url);
      navigate("/login", { replace: true });
    })();
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    (async () => {
      if (currentuser === null) {
        navigate("/login");
      } else {
        const users = await axios.get(url);
        setData(Object.values(users.data));

        const allPost = await axios.get(urlPost);
        setPostList(allPost.data);
      }
    })();
  }, []);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div class="container" style={{padding:"100px 0px 0px 0px"}}>
          <div class="row gutters">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div class="card h-100 border-0 mt-4">
                <div class="card-body">
                  <div class="account-settings">
                    <div class="user-profile">
                      <div class="user-avatar">
                        <img src={data[6]} alt="profile_img" style={{objectFit:"cover"}}></img>
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
                            บันทึก
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div class="card h-100 border-0 mt-4">
                <div class="card-body">
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h5 class="mb-2 text-primary">ข้อมูลส่วนตัว</h5>
                      <br></br>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="fName">ชื่อจริง *</label>
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
                        <label for="lName">นามสกุล *</label>
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
                        <label for="eMail">อีเมล์ *</label>
                        <input
                          type="email"
                          class="form-control"
                          id="eMail"
                          placeholder={data[3]}
                          {...register("email", {
                            required: true,
                            pattern:
                              /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          })}
                        ></input>
                        <p class="text-danger">{errors.email?.message}</p>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="img">URL รูปภาพ *</label>
                        <input
                          type="url"
                          class="form-control"
                          id="img"
                          placeholder={data[6]}
                          {...register("img",{required: true})}
                        ></input>
                      </div>
                    </div>
                    <div>
                      <br></br>
                      <button class="delete-btn ">
                      {data[0] !== adminID && (
                        <a class="text-danger" onClick={handleShow}>
                          ลบบัญชี
                        </a>
                      )}
                      </button>
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
              Cancel
            </Button>
            <Button variant="danger" onClick={deleteAcc}>
              Confirm Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </Layout>
  );
}

export default Profile;
