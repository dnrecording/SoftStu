import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Profile.css";
import { Layout } from "./components/Layout";

function HomePage() {
  const navigate = useNavigate();
  let currentuser = localStorage.getItem("id");
  const url = `https://localhost:7290/api/user/${currentuser}`;

  const [currentUser, setCurrentUser] = useState("");
  // in case need to use current user data
  // [0]: id, [1]: username, [2]: password, [3]: email, [4]: fname, [5]: lname, [6]: img, [7]: status

  useEffect(() => {
    (async () => {
      if (currentuser !== null) {
        const users = await axios.get(url);
        setCurrentUser(Object.values(users.data));
      } else {
        navigate("/login");
      }
    })();
  }, []);

  return (
    <Layout>
      <h1>Home Page</h1>
      <p>{currentuser}</p>
      <Button
        class="btn btn-primary mx-2"
        onClick={() => {
          navigate("/content");
        }}
      >
        Go to Content
      </Button>
      {/* testing */}
<br></br>
<div class="text-center">
<Button class="btn btn-primary mx-2" onClick={() => {navigate("/profile/62526df6d30be6196cd5f864")}}>admin</Button>
<Button class="btn btn-primary mx-2" onClick={() => {navigate("/profile/62527dd6d30be6196cd5f865")}}>user1</Button>
<Button class="btn btn-primary mx-2" onClick={() => {navigate("/profile/62527e2cd30be6196cd5f866")}}>user2</Button>
<Button class="btn btn-primary mx-2" onClick={() => {navigate("/profile/625a9e738f59ed05920b6444")}}>user3</Button>
</div>
    </Layout>
  );
}

export default HomePage;
