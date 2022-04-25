import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Layout } from "./Layout";
import * as ReactBootstrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Card } from "react-bootstrap";
import "./ContentCard.css";
import LoadingPlaceHolder, { containerStyles } from "./LoadingPlaceHolder";
import Tag from "./Tag";

function ContentCard(props) {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  let imageLoadNum = 0;
  const date = new Date(props.date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: '2-digit', 
    minute: '2-digit'
  };
  const stuffLoaded = () => {
    imageLoadNum++;
    if (imageLoadNum < 2) return;
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  };
  return (
    <div className="contentCard" onLoad={stuffLoaded}>
      <div className="content">
        <div className="contentTitle">
          {!loaded && (
            <LoadingPlaceHolder
              extraStyles={{
                height: "50px",
                width: "620px",
                marginBottom: "12px",
                borderRadius: "10px",
              }}
            />
          )}
          {loaded && (
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/content/" + props.id);
              }}
            >
              {props.title}
            </h2>
          )}
          {Array.from(
            Array(Math.ceil(props.content.slice(0, 150).length / 39)).keys()
          ).map(
            () =>
              !loaded && (
                <LoadingPlaceHolder
                  extraStyles={{
                    height: "18px",
                    borderRadius: "10px",
                    marginBottom: "5px",
                  }}
                />
              )
          )}
          {loaded && (
            <p
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/content/" + props.id);
              }}
            >
              {props.content.slice(0, 300) + "..."}
            </p>
          )}
          <div className="content-footer">
            {!loaded && (
              <LoadingPlaceHolder
                extraStyles={{
                  height: "20px",
                  width: "150px",
                  borderRadius: "10px",
                  marginTop: "8px",
                }}
              />
            )}
            {loaded && <p>{date.toLocaleDateString("th-TH", options)}</p>}
            {!loaded && (
              <LoadingPlaceHolder
                extraStyles={{
                  height: "35px",
                  width: "100px",
                  marginLeft: "40px",
                  borderRadius: "30px",
                  marginTop: "8px",
                }}
              />
            )}
            {loaded && (
              <button
                style={{
                  cursor: "default",
                  borderRadius: "1rem",
                  marginLeft: "50px",
                  padding:"3px 15px",
                  border: "0px",
                }}
              >
                {props.tag}{" "}
              </button>
            )}
          </div>
          <div className="contentText"></div>
        </div>
        <div style={containerStyles}>
          {!loaded && (
            <LoadingPlaceHolder
              extraStyles={{
                height: "200px",
                top: "0",
                left: "20px",
                width: "300px",
              }}
              container
            />
          )}
          <img
            className="contentImage"
            onLoad={stuffLoaded}
            src={props.img}
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/content/" + props.id);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
