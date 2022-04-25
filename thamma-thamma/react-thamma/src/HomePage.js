import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Profile.css";
import { Layout } from "./components/Layout";
import ContentCard from "./components/ContentCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const client = axios.create({
  baseURL: "https://localhost:7290/api/post/",
});

function HomePage(props) {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const [searchValue, setsearchValue] = useState("");
  let checkFound = 0;
  var newState = [];

  //Add Tag Here !!!!
  const [alltag, setAllTag] = useState({});
  var tag = ["ทั้งหมด"];
  const green = "#39D1B4";
  const yellow = "#FFD712";
  const [buttonColor, setButtonColor] = useState({});
  function Tag({ itemTag, onClick, color, index }) {
    return (
      <>
        <button
          onClick={(e) => (
            (checkFound = 0),
            post.map((item, i) => (
              <div>
                {item.tag.search(itemTag) !== -1
                  ? (checkFound++,
                    setValue(itemTag),
                    setlastButton(itemTag),
                    handleColorChange(index))
                  : notFound(itemTag, i)}
              </div>
            ))
          )}
          style={{
            backgroundColor: color,
            padding: "5px 20px",
            border: "0px",
            borderRadius: "2rem",
            marginTop: "1rem",
            fontWeight: "550",
            color: "#000000"
          }}
          color={color}
          name={itemTag}
          index={index}
        >
          {itemTag}
        </button>
      </>
    );
  }

  function handleColorChange(i) {
    for (var j = 0; j < alltag.length; j++) {
      if (i === j) {
        newState[j] = "#F7900E";
      } else {
        newState[j] = "#F9C91B";
      }
    }
    //console.log(newState);
    setButtonColor(newState);
  }

  //// Button State !!!
  const [state, setState] = useState(false);
  const [lastButton, setlastButton] = useState("ทั้งหมด");

  const handleButton = (itemTag, i) => {
    if (lastButton === itemTag && state === false) {
      setState(true);
      setsearchValue("");
    } else if (lastButton === itemTag && state === true) {
      setState(false);
    } else if (lastButton !== itemTag) {
      setState(false);
    } else if (lastButton === "ทั้งหมด") {
      setState(false);
    }
    handleColorChange(i);
  };

  useEffect(() => {
    async function getPost() {
      const response = await client.get("");
      setPost(response.data);

      const unique = (value, index, self) => {
        return self.indexOf(value) === index;
      };

      for (var i = 0; i < response.data.length; i++) {
        tag.push(response.data[i].tag);
      }

      tag = tag.filter(unique);
      setAllTag(tag);

      for (var k = 0; k < tag.length; k++) {
        newState.push("#F9C91B");
      }
      setButtonColor(newState);
    }
    getPost();
  }, []);

  function setValue(y) {
    setsearchValue(y);
    //console.log(checkFound)
  }

  const notifySuccess = (text) => {
    toast.success(String(text), {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const notifyError = (text) => {
    toast.error(String(text), {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const notFound = (itemTag, i) => {
    if (i === post.length - 1 && checkFound === 0 && itemTag !== "ทั้งหมด") {
      setValue(null);
      notifyError("No Blogs Found !!!");
    } else if (itemTag == "ทั้งหมด") {
      setValue("");
      setlastButton("ทั้งหมด");
      handleColorChange(0);
    }
  };

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
              placeholder="กรอกข้อความ"
              style={{ borderRadius: "2rem" }}
            />
            <Button
              onClick={() =>
                setValue(document.getElementById("textsearch").value)
              }
              style={{
                borderRadius: "2rem",
                background: "black",
                margin: "0px 0px 0px 10px",
                padding: "10px 20px",
              }}
            >
              ค้นหา
            </Button>
          </div>

          <div className="navTag">
            {alltag && alltag.length
              ? alltag.map((itemTag, i) => (
                  <Tag
                    color={buttonColor[i]}
                    key={itemTag}
                    index={i}
                    onClick={() => handleColorChange(i)}
                    itemTag={itemTag}
                  />
                ))
              : ""}
          </div>
        </div>
      </div>
      <div className="con-left">
        <button className="thamma" onClick={() => setValue("")}></button>
        <ToastContainer />
        {post && post.length
          ? post.map((item) => (
              <div>
                {item.title.search(searchValue) !== -1 ||
                item.tag.search(searchValue) !== -1 ? (
                  <ContentCard key={item.id} {...item} />
                ) : (
                  ""
                )}
              </div>
            ))
          : ""}
      </div>
    </Layout>
  );
}

export default HomePage;
