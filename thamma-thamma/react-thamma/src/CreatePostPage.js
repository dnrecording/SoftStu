import "./CreatePost.css";
import { Layout } from "./components/Layout";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Card } from "react-bootstrap";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import "react-quill/dist/quill.bubble.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreatePostPage() {
  const navigate = useNavigate();
  const adminID = "62526df6d30be6196cd5f864"; // Admin ID
  const url = "https://localhost:7290/api/post";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [body,setBody] = useState("");

  const handleBody = e =>{
    console.log(e);
    setBody(e);
  }

  const notify = () => toast.success("สร้างโพสสำเร็จ",{onClose: () => navigate("/")});

  async function fetchCreate(create_data) {
    var allData = {
      ...create_data,
      author: adminID,
      comments: [],
      like: [],
      date: new Date()
    };

    const postCreated = await axios(url, { method: "POST", data: allData });
    if (postCreated.status === 201) {
      notify();
      // navigate("/");
    }
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
                        <label class="mb-2">หัวข้อ :</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="กรุณากรอกหัวข้อ"
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
                        <label class="mb-2">แท็ก :</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="เช่น วัด, คำสอน, ไสยศาสตร์"
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
                        <label class="mb-2">URL รูปภาพ:</label>
                        <input
                          type="url"
                          className="form-control"
                          placeholder="กรุณากรอก URL ของรูปภาพ"
                          {...register("img", {
                            required: true,
                          })}
                        />
                        <p class="text-danger">{errors.img?.message}</p>
                      </div>

                      <div className="form-group">
                        <label class="mb-2">เนื้อหา :</label>
                        <textarea
                          type="text"
                          className="form-control input-mysize"
                          placeholder="กรุณากรอกเนื้อหาสุดแสนน่าสนใจ"
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
                   
                      {/* <div >
                        <div className="new-content-topic">
                          <label class="mb-2" style={{marginTop: "18px"}}>เนื้อหา :</label>
                        </div>
                        <ReactQuill
                          placeholder="กรุณากรอกเนื้อหาสุดแสนน่าสนใจ"
                          modules={CreatePostPage.modules}
                          formats={CreatePostPage.formats}
                          onChange={handleBody}
                          value={body}
                          theme="snow"
                          style={{height: "500px"}}
                        />
                      </div> */}

                      <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block mb-2"
                        style={{marginTop: "100px"}}
                      >
                        โพส
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <ToastContainer
              position="top-center"
              autoClose={1000}
              closeOnClick="false"
            ></ToastContainer>
          </div>
        </div>
      </form>
    </Layout>
  );
}

CreatePostPage.modules = {
  toolbar: [
    [{header: [1, 2, 3, 4, 5, 6]}],
    [{size:[]}],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ 'color': [] }, { 'background': [] }], 
    [{'list': 'ordered'}, {'list': 'bullet'},{'indent': '-1'}, {'indent': '+1'}],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
}

CreatePostPage.formats = [
  "header",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block"
];

export default CreatePostPage;
