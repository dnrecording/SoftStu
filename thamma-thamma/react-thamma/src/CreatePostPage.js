import "./CreatePost.css";
import { Layout } from "./components/Layout";
import { Button, Form, Input, Upload, Tooltip } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Card } from "react-bootstrap";

function CreatePostPage() {
  const navigate = useNavigate();
  const adminID = "62526df6d30be6196cd5f864"; // Admin ID
  const url = "https://localhost:7290/api/post";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function fetchCreate(create_data) {
    var allData = {
      ...create_data,
      author: adminID,
      comments: [],
      like: [],
      username: ""
    };
    const postCreated = await axios(url, { method: "POST", data: allData });
    if (postCreated.status === 201) {
      navigate("/");
    }
    console.log(postCreated)
  }

  const onSubmit = (data) => {
    //craete post
    fetchCreate(data);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row d-flex justify-content-start">
            <div className="col-md-4">
              <Card className="card-size">
                <div classNameNameName="App">
                  <div className="container">
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-4"></div>
                      <h3 className="mt-3 text-center border-bottom border-3 mb-3 pb-3 border-dark">Create Post</h3>
                      <div className="form-group">
                        <label class="mb-2">Title :</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Title"
                          {...register("title", {
                            required: true,
                            maxLength: {
                              value: 50,
                              message: "this need to be max length of 50",
                            },
                            minLength: {
                              value: 1,
                              message: "this need to be min length of 1",
                            },
                          })}
                        />
                        <p class="text-danger">{errors.title?.message}</p>
                      </div>

                      <div className="form-group">
                        <label class="mb-2">Tag :</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="eg. Wat, Thamma, Good"
                          {...register("tag", {
                            required: true,
                            maxLength: {
                              value: 20,
                              message: "this need to be max length of 20",
                            },
                            minLength: {
                              value: 1,
                              message: "this need to be min length of 4",
                            },
                          })}
                        />
                        <p class="text-danger">{errors.tag?.message}</p>
                      </div>

                      <div className="form-group">
                        <label class="mb-2">Image URL :</label>
                        <input
                          type="url"
                          className="form-control"
                          placeholder="Enter Image URL"
                          {...register("img", {
                            required: true,
                          })}
                        />
                        <p class="text-danger">{errors.img?.message}</p>
                      </div>

                      <div className="form-group">
                        <label class="mb-2">Content :</label>
                        <textarea
                          type="text"
                          className="form-control input-mysize"
                          placeholder="Tell your story ..."
                          {...register("content", {
                            required: true,
                            minLength: {
                              value: 100,
                              message: "this need to be min length of 100",
                            },
                          })}
                        />
                        <p class="text-danger">{errors.content?.message}</p>
                      </div>
                   

                      <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block mb-2"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default CreatePostPage;
