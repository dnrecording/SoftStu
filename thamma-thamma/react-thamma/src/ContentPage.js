import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import axios from "axios";
import "./ContentPage.css";
import { Layout } from "./components/Layout";
import { Card } from 'react-bootstrap';

function ContentPage() {
    const navigate = useNavigate();

    const [data, setData] = useState({});
    const [newComment, setNewComment] = useState("");
    let currentuser = localStorage.getItem("id");
    const url = `https://localhost:7290/api/post/625fb10c1a7753903c96eb5d`;
    const urlUser = `https://localhost:7290/api/user/`;

    const items = [...Array(100)].map((val, i) => `Item ${i}`);

    async function fetchEdit(edit_data) {
        // const newComments = data[4].push(edit_data);
        if(edit_data != null){
            data[4].push(edit_data);
        }
        
        let update_data = {
          title: data[1],
          content: data[2],
          img: data[3],
          comments: data[4],
          like: data[5]
        };
        await axios.put(url, update_data);
        const myPost = await axios.get(url);
        setData(Object.values(myPost.data));
      }
    
    const updateComment = (edit_data) => {
        console.log(edit_data);
        fetchEdit(edit_data);
    };

    function updateNewComment(){
        var myComment = document.getElementById("comment").value;
        document.getElementById("comment").value = "";
        var commenterID = currentuser;
        fetchEdit([myComment,commenterID]);
    }

    function updateLike(){
        data[5] += 1;
        fetchEdit();
    }

    async function getUsernamebyID(id){
        // const postName = await axios.get(urlUser+id);
        // console.log(postName.data.username);
        return "Hello";
    }

    useEffect(() => {
        (async () => {
          if (currentuser === null) {
            navigate("/login");
          } else {
            const myPost = await axios.get(url);
            setData(Object.values(myPost.data));
          }
        })();
      }, []);


    return (
        <Layout>
            <div className='row no-gutters'>
                <div class="col-auto">
                    <Card className='contentPageCard'>
                        {/* <img className='contentImage' src="temple1.jpg" /> */}
                        <Card.Img className="contentPageImage" variant="top" src="temple1.jpg" />
                        <Card.Body>
                            <Card.Title style={{fontSize:"40px"}}>{data[1]}</Card.Title>
                            <Card.Text style={{fontSize:"17px"}}>{data[2]}</Card.Text>
                            <Button className='like-button' onClick={updateLike}>{data[5]} Like</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col">
                    <Card className='contentPageComment'>
                        <Card.Body>
                            <Card.Title>Comment</Card.Title>
                            <div className="center-col">
                                <ul>
                                    {/* { data && data.length ? data[4].map((item, i) => (<li key={`item_${i}`}>{ item }</li>)) : ""} */}
                                    { data && data.length ? data[4].map((item, i) => (
                                        <Card className='commentCard'>
                                            <Card.Body>
                                                <Card.Title>{item[0]}</Card.Title>
                                                {/* <Card.Text>{item[1]}</Card.Text> */}
                                                <p>A URL: <a href={"/profile/" + item[1]}>{item[1]}</a></p>
                                            </Card.Body>
                                        </Card>
                                    )) : ""}
                                </ul>
                            </div>
                            <div className="myComment">
                            <div className="col-auto">
                                <textarea
                                    type="name"
                                    class="input-comment"
                                    id="comment"
                                ></textarea>
                                <Button id="sendButton" className='ContentpageSubmit-button' onClick={updateNewComment}>Send</Button>
                            </div>
                            </div>
                        </Card.Body>
                    </Card>
                    
                </div>
            </div>
        </Layout>
    );
}

export default ContentPage;
