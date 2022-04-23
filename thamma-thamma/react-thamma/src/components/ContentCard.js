import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Layout } from "./Layout";
import * as ReactBootstrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Card } from "react-bootstrap";
import  "./ContentCard.css";
import LoadingPlaceHolder, { containerStyles } from "./LoadingPlaceHolder";

function ContentCard(props) {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  let imageLoadNum = 0;
  const date = new Date(props.date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
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
                width : "640px",
                marginBottom: "12px",
                borderRadius: "10px",
              }}
            />
          )}
          {loaded && <h1 style={{ cursor: "pointer" }}onClick={() => {navigate("/content/" + props.id);}}>{props.title}</h1>}
          {Array.from(Array(Math.ceil(props.content.slice(0,150).length / 39)).keys()).map(() => !loaded && (<LoadingPlaceHolder extraStyles={{ height: "18px", borderRadius: "10px" , marginBottom: "5px" }}/>))}
          {loaded && <p style={{ cursor: "pointer" }}onClick={() => {navigate("/content/" + props.id);}}>{props.content.slice(0,300) + "..."}</p>}
          <div className="content-footer">
          {!loaded && (
            <LoadingPlaceHolder
              extraStyles={{
                height: "20px",
                width : "150px",
                borderRadius: "10px",
                marginTop: "8px",
              }}
            />
          )}
            {loaded &&<p>{date.toLocaleDateString("en-US", options)}</p>}
            {!loaded && (
            <LoadingPlaceHolder
              extraStyles={{
                height: "35px",
                width : "100px",
                marginLeft: "40px",
                borderRadius: "30px",
                marginTop: "8px",
              }}
            />
          )}
          {loaded && <button className="contentTag">Tag : {props.tag}</button>}
            
          </div>
          <div className="contentText">
          </div>
        </div>
        <div style={containerStyles}>
          {!loaded && (
            <LoadingPlaceHolder
              extraStyles={{ height: "200px", top: "0", left: "20px" ,width : "200px" ,  }}
              container
            />
          )}
          <img className="contentImage" onLoad={stuffLoaded} src={props.img} 
            style={{ cursor: "pointer" }}onClick={() => {navigate("/content/" + props.id);}}/>

        </div>
      </div>
    </div>
  );
}

export default ContentCard;
