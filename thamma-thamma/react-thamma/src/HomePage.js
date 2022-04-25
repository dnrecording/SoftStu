import React, { useState, useEffect } from "react";
import {Button} from "react-bootstrap";
import axios from "axios";
import "./Profile.css";
import { Layout } from "./components/Layout";
import ContentCard from "./components/ContentCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const client = axios.create({
  baseURL: "https://localhost:7290/api/post/",
});

function HomePage() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const [searchValue, setsearchValue] = useState("");
  let checkFound = 0;
  var newState = [];

  //Add Tag Here !!!!
  const [alltag, setAllTag] = useState({});
  var tag = ["All"];
  const [buttonColor, setButtonColor] = useState({});
  function Tag({ itemTag, color, index }) {
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
            padding: "3px 20px",
            border: "0px",
            borderRadius: "2rem",
            marginTop: "1rem",
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
        newState[j] = "#FFD712";
      } else {
        newState[j] = "#39D1B4";
      }
    }
    //console.log(newState);
    setButtonColor(newState);
  }

  //// Button State !!!
  const [state, setState] = useState(false);
  const [lastButton, setlastButton] = useState("All");

  const handleButton = (itemTag, i) => {
    if (lastButton === itemTag && state === false) {
      setState(true);
      setsearchValue("");
    } else if (lastButton === itemTag && state === true) {
      setState(false);
    } else if (lastButton !== itemTag) {
      setState(false);
    } else if (lastButton === "All") {
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
        newState.push("#39D1B4");
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
    if ((i === post.length - 1 && checkFound === 0 && itemTag !== "All")||i===999) {
      setValue(null);
      notifyError("No Blogs Found !!!");
    } else if (itemTag === "All") {
      setValue("");
      setlastButton("All");
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
              placeholder="Search Blog ..."
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
              Search
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
