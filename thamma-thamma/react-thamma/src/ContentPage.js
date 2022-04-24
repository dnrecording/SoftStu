import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";
import "./ContentPage.css";
import { Layout } from "./components/Layout";
import { Card } from 'react-bootstrap';
import { AiFillLike, AiOutlineLike, AiOutlineSend } from "react-icons/ai";
import { FaTrashAlt, FaHandMiddleFinger } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContentPage() {
    const { id } = useParams(); // read url param post id
    const postID = id;

    const navigate = useNavigate();

    const [data, setData] = useState({});
    const [userList, setUserList] = useState({});

    let currentuser = localStorage.getItem("id");
    const adminID = '62526df6d30be6196cd5f864';

    const url = `https://localhost:7290/api/post/${postID}`;
    const urlUser = `https://localhost:7290/api/user`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    async function fetchEdit(edit_data) {
        if (edit_data != null) {
            data[4].push(edit_data);
        }

        let update_data = {
            title: data[1],
            content: data[2],
            img: data[3],
            comments: data[4],
            like: data[5],
            tag: data[6],
            date: data[7],
            author: data[8]
        };

        await axios.put(url, update_data);
        const myPost = await axios.get(url);
        setData(Object.values(myPost.data));
    }

    function updateNewComment() {
        var myComment = document.getElementById("comment").value;
        document.getElementById("comment").value = "";
        var commenterID = currentuser;
        fetchEdit([myComment, commenterID]);
    }

    function updateLike() {
        if (!(data[5].includes(currentuser))) {
            data[5].push(currentuser);
        } else {
            data[5].splice(data[5].indexOf(currentuser), 1);
        }
        fetchEdit();
    }

    function deleteComment(index) {
        data[4].splice(index, 1);
        fetchEdit();
    }

    function likeComment(index) {
        var check = -1;
        for(var i=2;i<data[4][index].length;i++){
            if(data[4][index][i] === currentuser){
                check = i;
            }
        }
           
        if(check === -1){
            data[4][index].push(currentuser);
        }else{
            data[4][index].splice(check,1);
        }
        

        fetchEdit();
    }

    async function deletePost() {
        console.log("delete " + postID);
        await axios.delete(url);
        navigate("/");
    }

    function dataToDate(data) {
        const date = new Date(data);
        return date.toLocaleDateString("th-TH", options);
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

    const YesNoButton = ({ onYes, closeToast }) => {
        const handleClick = () => {
            onYes();
            closeToast();
        };

        return (
            <div style={{ marginLeft: "10px" }}>
                <span style={{fontSize:"20px", marginRight:"50px"}}>ต้องการลบความคิดเห็นใช่หรือไม่</span>
                <button className="real-yesno-button" onClick={handleClick}>
                    <span style={{ color: "#FFFFFF", fontSize:"20px"}}>ยืนยัน</span>
                </button>
            </div>
        );
    };

    const YesNoDeletePostButton = ({ onYes, closeToast }) => {
        const handleClick = () => {
            onYes();
            closeToast();
        };

        return (
            <div style={{ marginLeft: "10px" }}>
                <span style={{fontSize:"20px"}}>ต้องการลบโพสใช่หรือไม่</span>
                <button className="real-yesno-button" onClick={handleClick}>
                    <span style={{ color: "#FFFFFF", fontSize:"20px"}}>ยืนยัน</span>
                </button>
            </div>
        );
    };

    const notify = (index) => {
        toast.error(<YesNoButton onYes={() => deleteComment(index)} />, {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const notifyDeletePost = (index) => {
        toast.error(<YesNoDeletePostButton onYes={() => deletePost(postID)} />, {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    return (
        <Layout>
            <div className='row no-gutters' style={{marginTop:"120px"}}>
                <div class="col-auto">
                    <Card className='contentPageCard'>
                        <div style={{ position: "relative" }}>
                            <div class="overflow-hidden">
                                <Card.Img className="contentPageImage" variant="top" src={data[3]} />
                            </div>
                            {/* {data && data.length ? <Button className='like-amount' onClick={updateLike}>{data[5].length} Like</Button> : ""} */}
                            {data && data.length ? 
                                <div className='like-amount'>
                                <AiFillLike style={{ color: "#1B98E8", fontSize: "25px", margin: "7px 5px 8px 0px" }} />
                                <span className="like-text" style={{ color: "#1B98E8", margin: "5px" }}>{data[5].length}</span>
                            </div>
                            : ""}
                        </div>
                        <Card.Body>
                            {data && data.length && userList && userList.length ?
                                <Card.Body className="commentRow">
                                    <img src={(userList.find(o => o.id === data[8])).img} className="avatar"></img>
                                    <div className="commentColumn">
                                        <Card.Title style={{ display: "flex", justifyContent: "space-between", margin: "0px 0px 5px 0px" }}>
                                            <a href={"/profile/" + (userList.find(o => o.id === data[8])).id} className="link-noUnderline">{(userList.find(o => o.id === data[8])).username}</a>
                                        </Card.Title>
                                        <Card.Text style={{ margin: "0px 0px 0px 20px" }}>{dataToDate(data[7])}</Card.Text>
                                    </div>
                                </Card.Body>
                                : ""}
                            <Card.Title style={{ fontSize: "40px", fontWeight: "700" }}>{data[1]}</Card.Title>
                            <Card.Text style={{ padding: "10px 20px 10px 10px", fontSize: "17px" }}>{data[2]}</Card.Text>
                            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between"}}>
                                {data && data.length && data[5].includes(currentuser) ?
                                    <button className="real-liked-button" onClick={updateLike}>
                                        <div>
                                            <AiFillLike style={{ color: "#1B98E8", fontSize: "25px", margin: "0px 5px 8px 0px" }} />
                                            <span className="like-text" style={{ color: "#1B98E8" }}>Liked</span>
                                        </div>
                                    </button>
                                    :
                                    <button className="real-like-button" onClick={updateLike}>
                                        <div>
                                            <AiOutlineLike style={{ color: "#1B98E8", fontSize: "25px", margin: "0px 5px 8px 0px" }} />
                                            <span className="like-text" style={{ color: "#1B98E8" }}>Like</span>
                                        </div>
                                    </button>
                                }
                                <div>
                                    {currentuser ===  adminID?
                                        <button className="real-delete-button" onClick={(e) => notifyDeletePost(e)}>
                                            <div>
                                                <FaTrashAlt style={{ color: "#D6001A", fontSize:"22px"}} />
                                            </div>
                                        </button>    
                                    : ""
                                }
                                </div>
                            </div>
                            <ToastContainer />
                        </Card.Body>
                    </Card>
                </div>
                <div class="col">
                    <Card className='contentPageComment'>
                        <Card.Body>
                            <Card.Title className="commentRow" style={{ justifyContent: "space-between" }}>
                                <p className="commentTopic">ความคิดเห็น</p>
                                {data && data.length ? <p className="commentTopic" style={{ margin: "0px 155px 0px 0px" }}>{data[4].length} รายการ</p> : ""}
                            </Card.Title>
                            <div className="center-col" style={{ padding: "0px", height: "650px" }}>
                                <ul style={{ padding: "0px" }}>
                                    {data && data.length && userList && userList.length ? data[4].map((item, i) => (
                                        <div>
                                            { (userList.find(o => o.id === item[1])).status === 'true'?
                                                <Card className='commentCard'>
                                                    <Card.Body className="commentRow">
                                                        <img src={(userList.find(o => o.id === item[1])).img} className="avatar"></img>
                                                        <div className="commentColumn">
                                                            <Card.Title style={{ display: "flex", justifyContent: "space-between", margin: "0px 0px 20px 0px" }}>
                                                                <a href={"/profile/" + item[1]} className="link-noUnderline">{(userList.find(o => o.id === item[1])).username}</a>
                                                                {currentuser === adminID || currentuser === item[1] ? <button id={"deleteButton" + i} className="deleteCommentButton" onClick={(e) => notify(i, e)}><FaTrashAlt style={{ color: "#F1011E" }} /></button> : " "}
                                                            </Card.Title>
                                                            <Card.Text style={{ margin: "0px 20px 0px 20px" }}>{item[0]}</Card.Text>
                                                            <button className="comment-liked-button">
                                                                <div>
                                                                    <AiFillLike style={{ color: "#1B98E8", fontSize: "20px", margin: "0px 5px 8px 0px" }} onClick={(e) => likeComment(i, e)}/>
                                                                    <span className="like-text" style={{ color: "#1B98E8", fontSize:"17px"}}>{item.length-2}</span>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </Card.Body>
                                                </Card> 
                                            : 
                                            <div>
                                                {currentuser === adminID ?
                                                    <Card className='commentCard' style={{opacity: "20%"}}>
                                                        <Card.Body className="commentRow">
                                                            <img src={(userList.find(o => o.id === item[1])).img} className="avatar"></img>
                                                            <div className="commentColumn">
                                                                <Card.Title style={{ display: "flex", justifyContent: "space-between", margin: "0px 0px 20px 0px" }}>
                                                                    <a href={"/profile/" + item[1]} className="link-noUnderline">{(userList.find(o => o.id === item[1])).username}</a>
                                                                    {currentuser === adminID || currentuser === item[1] ? <button id={"deleteButton" + i} className="deleteCommentButton" onClick={(e) => notify(i, e)}><FaTrashAlt style={{ color: "#F1011E" }} /></button> : " "}
                                                                </Card.Title>
                                                                <Card.Text style={{ margin: "0px 20px 0px 20px" }}>{item[0]}</Card.Text>
                                                            </div>
                                                        </Card.Body>
                                                    </Card> 
                                                : ""}
                                            </div>
                                            }
                                        </div>
                                    )) : ""}
                                </ul>
                            </div>
                            <div className="myComment" style={{ display: "flex", justifyContent: "space-between" }}>
                                <textarea
                                    type="name"
                                    class="input-comment"
                                    id="comment"
                                ></textarea>
                                <Button id="sendButton" className='ContentpageSubmit-button' style={{ paddingLeft: "15px", paddingRight: "15px" }} onClick={updateNewComment}>
                                    <AiOutlineSend style={{ fontSize: "30px" }} />
                                    {/* <span style={{fontSize:"25px"}}>ส่ง</span> */}
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}

export default ContentPage;
