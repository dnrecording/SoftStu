import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";
import "./ContentPage.css";
import { Layout } from "./components/Layout";
import { Card } from 'react-bootstrap';

function ContentPage() {
    const { id } = useParams(); // read url param post id
    const postID = id;
    
    const navigate = useNavigate();

    const [data, setData] = useState({});
    const [userList, setUserList] = useState({});
    let currentuser = localStorage.getItem("id");

    // const url = `https://localhost:7290/api/post/625fb10c1a7753903c96eb5d`;
    const url = `https://localhost:7290/api/post/${postID}`;
    const urlUser = `https://localhost:7290/api/user`;

    async function fetchEdit(edit_data) {
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

    function deleteComment(index){
        console.log("remove " + index);
        data[4].splice(index,1);
        fetchEdit();
    }

    useEffect(() => {
        (async () => {
          if (currentuser === null) {
            navigate("/login");
          } else {
            const myPost = await axios.get(url);
            setData(Object.values(myPost.data));

            const allUser = await axios.get(urlUser);
            setUserList(allUser.data);
          }
        })();
      }, []);


    return (
        <Layout>
            <div className='row no-gutters'>
                <div class="col-auto">
                    <Card className='contentPageCard'>
                        {/* <img className='contentImage' src="temple1.jpg" /> */}
                        <div style={{position: "relative"}}>
                            <Card.Img className="contentPageImage" variant="top" src={data[3]} />
                            <Button className='like-button' onClick={updateLike}>{data[5]} Like</Button>
                        </div>
                        <Card.Body>
                            <Card.Title style={{fontSize:"40px"}}>{data[1]}</Card.Title>
                            <Card.Text style={{padding: "10px 20px 10px 10px", fontSize:"17px"}}>{data[2]}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col">
                    <Card className='contentPageComment'>
                        <Card.Body>
                            <Card.Title className="commentRow" style={{justifyContent: "space-between"}}>
                                <p className="commentTopic">ความคิดเห็น</p>
                                {data && data.length ? <p className="commentTopic" style={{margin: "0px 155px 0px 0px"}}>{data[4].length} รายการ</p> : ""}
                            </Card.Title>
                            <div className="center-col" style={{padding: "0px", height: "650px"}}>
                                <ul style={{padding: "0px"}}>
                                    { data && data.length && userList && userList.length ? data[4].map((item, i) => (
                                        <Card className='commentCard'>
                                            <Card.Body className="commentRow">
                                                <img src={(userList.find(o => o.id === item[1])).img} className="avatar"></img>
                                                <div className="commentColumn">
                                                    <Card.Title style={{display: "flex",justifyContent: "space-between",margin: "0px 0px 20px 0px"}}>
                                                        <a href={"/profile/" + item[1]} className="link-noUnderline">{(userList.find(o => o.id === item[1])).username}</a>
                                                        {currentuser === '62526df6d30be6196cd5f864' ? <button id={"deleteButton" + i} className="deleteCommentButton" onClick={(e) => deleteComment(i,e)}>x</button> : " "}
                                                    </Card.Title>
                                                    <Card.Text style={{margin: "0px 20px 0px 20px"}}>{item[0]}</Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    )) : ""}
                                </ul>
                            </div>
                            <div className="myComment" style={{display: "flex",justifyContent: "space-between"}}>
                                    <textarea
                                        type="name"
                                        class="input-comment"
                                        id="comment"
                                    ></textarea>
                                    <Button id="sendButton" className='ContentpageSubmit-button' onClick={updateNewComment}>Send</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}

export default ContentPage;
