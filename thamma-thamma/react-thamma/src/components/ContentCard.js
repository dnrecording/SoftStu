import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Layout } from "./Layout";
import * as ReactBootstrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Card } from "react-bootstrap";
import "./ContentCard.css";


function ContentCard(props){
  const urlPost = `https://localhost:7290/api/post/`;
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  let currentuser = localStorage.getItem("id");
  const url = `https://localhost:7290/api/user/${currentuser}`;
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => { 
    (async () => {
      if (currentuser !== null) {
        const users = await axios.get(url);
        setCurrentUser(Object.values(users.data));

        const myPost = await axios.get(urlPost);
        console.log(myPost.data);
        setPost(Object.values(myPost.data));
      } else {
        navigate("/login");
      }
    })();
  }, []);
    const contentCard = (
        <Card className="contentCard">
          <div className="row no-gutters"></div>
          <div class="col-auto">
            <img className="contentImage" src={props.img} />
          </div>
          <div class="col">
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text >{props.content.slice(0,100) + "..."}
              </Card.Text>
              <Button
                class="btn btn-primary mx-2"
                onClick={() => {
                  navigate("/content/" + props.id);
                }}
              >
                more details...
              </Button>
              <Button className="like-button">Like</Button>
            </Card.Body>
          </div>
        </Card>
      );
    return (
        <p>{contentCard}</p>
    );
}

export default ContentCard;
