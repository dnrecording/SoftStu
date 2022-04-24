import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Profile.css";
import { Layout } from "./components/Layout";
import ContentCard from "./components/ContentCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const client = axios.create({
  baseURL: "https://localhost:7290/api/post/",
});

function HomePage(props) {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const [searchValue, setsearchValue] = useState("");
  let checkFound = 0;

  //Add Tag Here !!!!
  const tag = ["WaT", "Tour" , "Bao","Kuy Floyd I na Hee" ,"Oat"];

  useEffect(() => {
    async function getPost() {
      const response = await client.get("");
      setPost(response.data);
    }
    getPost();
  }, []);

  function setValue(y) {
    setsearchValue(y);
    console.log(checkFound)
  }
  
  const notifySuccess = (text) => {
    toast.success(String(text), {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const notifyError = (text) => {
    toast.error(String(text), {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const notFound = (i) => {
    if(i === post.length-1 && checkFound === 0){
      setValue(null)
      notifyError("No Blogs Found !!!")
    }
  }

  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!";
  return (
    <Layout className="homelay">
      <div className="con-right">
        <div class=" d-none d-xl-block ">
          <div className="searchForm">
            <input
              id="textsearch"
              type="text"
              className="form-control"
              placeholder="Search Blog ..."
            />
            <Button
              onClick={() =>
                (setValue(document.getElementById("textsearch").value),notifySuccess("Search Successfully !"))
              }
            >
              Search
            </Button>
          </div>
        
        <div className="navTag">
          {tag.map((itemTag) => (
            <button className="mb-3 "
              onClick={() =>
                (notifySuccess("Search Successfully !"),checkFound = 0,post.map((item,i) => (
                  <div>
                    {item.tag.search(itemTag) !== -1 ? (checkFound++,setValue(itemTag)) : 
                    notFound(i)}
                  </div>
                )))
              }
              style={{padding:"10px 25px",border:"0px", borderRadius: "1rem" }}
            >
              {itemTag}
            </button>
          ))}
        </div>
        </div>
      </div>
      <div className="con-left">
      <ToastContainer />
        <h1>Home Page</h1>
        {post && post.length ? (
          post.map((item) => (
            <div>
              {item.title.search(searchValue) !== -1 ||
              item.tag.search(searchValue) !== -1 ? 
                <ContentCard key={item.id} {...item} />
               : (
                ""
              )}
            </div>
          ))
        ) : (
          <h1>Page Not Found</h1>
          
        )}
      </div>
      
    </Layout>
  );
}

export default HomePage;
